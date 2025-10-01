import React, { useState, useEffect } from 'react';
import SearchBar from "../components/Search/SearchBar.jsx";
import MovieCard from '../components/Search/MovieCard.jsx';
import SearchFilter from '../components/Search/SearchFilter.jsx';
import SearchHistory from '../components/Search/SearchHistory.jsx';
import GenreNav from '../components/Discover/GenreNav.jsx';
import TrendingSection from '../components/Discover/TrendingSection.jsx';
import LoadingSpinner from '../components/Common/LoadingSpinner.jsx';
import ErrorMessage from '../components/Common/ErrorMessage.jsx';
import { searchMovies } from '../api/omdb.js';
import { useDebounce } from "../components/Hooks/useDebounce.jsx";
import { useLocalStorage } from "../components/Hooks/useLocalStorage.jsx";

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({ type: '', year: '' });
    const [history, setHistory] = useLocalStorage('searchHistory', []);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const onFilterChange = (key, value) => setFilters(prev => ({ ...prev, [key]: value }));

    const handleSearch = async (query, currentFilters) => {
        if (!query.trim()) {
            setMovies([]);
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const data = await searchMovies(query, currentFilters.type, currentFilters.year);
            setMovies(data.Search || []);
            if (data.Search) setHistory(prev => [query, ...prev.filter(t => t !== query)].slice(0, 10));
        } catch {
            setError("Failed to fetch search results. Please check your API key or network.");
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await handleSearch(debouncedSearchTerm, filters);
        };
        fetchData();
    }, [debouncedSearchTerm, filters]);

    const handleGenreSelect = (genre) => setSearchTerm(genre);
    const handleHistorySelect = (term) => setSearchTerm(term);

    const showResults = !loading && !error && debouncedSearchTerm;

    return (
        <div className="text-[#C5C6C7]">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#66FCF1] text-center mb-6">
                CineScope: Minimal, Dynamic Hub
            </h1>

            <SearchHistory history={history} onHistorySelect={handleHistorySelect} />
            <SearchBar onSearch={setSearchTerm} />
            <SearchFilter onFilterChange={onFilterChange} filters={filters} />

            {!debouncedSearchTerm && (
                <>
                    <GenreNav onGenreSelect={handleGenreSelect} />
                    <TrendingSection />
                </>
            )}

            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}

            {showResults && movies.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
                    {movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}
                </div>
            )}

            {showResults && movies.length === 0 && (
                <div className="text-center mt-10 text-xl text-[#45A29E]">
                    No results found for "{debouncedSearchTerm}". Try adjusting your filters!
                </div>
            )}
        </div>
    );
};

export default HomePage;
