import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../api/thirdParty';
import MovieCard from '../Search/MovieCard';
import LoadingSpinner from '../Common/LoadingSpinner';
import ErrorMessage from '../Common/ErrorMessage';

const TrendingSection = () => {
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadTrending = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchTrendingMovies();
                setTrending(data);
            } catch (err) {
                setError("Failed to fetch trending movies list.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        loadTrending();
    }, []);

    return (
        <div className="mt-12">
            <h2 className="text-3xl font-extrabold text-[#66FCF1] mb-6 border-b border-gray-700 pb-2">
                🎬 Trending Now (Top Picks)
            </h2>

            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}

            {!loading && !error && trending.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {trending.map(movie => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            )}
            {!loading && !error && trending.length === 0 && (
                <p className="text-[#C5C6C7]/70 italic">
                    No trending data available at the moment.
                </p>
            )}
        </div>
    );
};

export default TrendingSection;