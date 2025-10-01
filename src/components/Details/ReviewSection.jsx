import React, { useState, useEffect } from 'react';
import { fetchUserReviews } from '../../api/thirdParty';
import LoadingSpinner from '../Common/LoadingSpinner';
import ErrorMessage from '../Common/ErrorMessage';

const ReviewSection = ({ imdbID }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadReviews = async () => {
            if (!imdbID) return;

            setLoading(true);
            setError(null);
            try {
                const data = await fetchUserReviews(imdbID);
                setReviews(data);
            } catch (err) {
                setError("Failed to fetch user reviews.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        loadReviews();
    }, [imdbID]);

    return (
        <div className="mt-10 pt-6 border-t border-gray-700">
            <h3 className="text-3xl font-bold text-[#66FCF1] mb-4">User Reviews & Consensus</h3>

            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}

            {!loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div
                                key={index}
                                className="p-5 bg-gray-800/70 rounded-lg shadow-xl border-l-4 border-l-[#66FCF1]"
                            >
                                <p className="italic text-[#C5C6C7] mb-3">
                                    "{review.snippet}"
                                </p>
                                <div className="text-sm font-medium text-[#45A29E]">
                                    - {review.author}, {review.source} ({review.score})
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-[#C5C6C7]/70 italic col-span-2">
                            No aggregated web reviews available for this title yet.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default ReviewSection;