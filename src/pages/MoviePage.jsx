import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/omdb.js';
import MovieDetails from '../components/Details/MovieDetails.jsx';
import LoadingSpinner from '../components/Common/LoadingSpinner.jsx';
import ErrorMessage from '../components/Common/ErrorMessage.jsx';
import WithErrorBoundary from "../components/HOCs/WithErrorBoundary.jsx";


const MoviePage = () => {
    const { imdbID } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getMovieDetails(imdbID);
                setMovie(data);
            } catch {
                setError("Failed to load movie details.");
            } finally {
                setLoading(false);
            }
        };
        if (imdbID) fetchDetails();
    }, [imdbID]);

    if (loading) return <LoadingSpinner />;
    if (error || !movie) return <ErrorMessage message={error || "Could not retrieve movie data."} />;

    return <div className="p-4"><MovieDetails movie={movie} imdbID={imdbID} /></div>;
};

export default WithErrorBoundary(MoviePage);
