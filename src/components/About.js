import React, { useState, useEffect } from 'react';

const AboutUs = () => {
    const [aboutData, setAboutData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/api/aboutus')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setAboutData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching about us data:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center mt-5">Loading...</div>;
    if (error) return <div className="text-center text-red-500 mt-5">Error: {error}</div>;
    if (aboutData.length === 0) return <div className="text-center mt-5">No data available</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            {aboutData.map(item => (
                <div key={item.id} className={`bg-white shadow-lg rounded-lg p-6 mb-4 ${item.title === 'Mission' ? 'border-l-4 border-blue-500' : ''}`}>
                    <h2 className="text-2xl font-semibold">{item.title}</h2>
                    <p className={`${item.title === 'Mission' ? 'text-lg font-medium text-blue-600' : 'text-gray-600'} mt-2`}>
                        {item.content}
                    </p>
                    {item.image && item.image !== 'http://localhost:3001/default.jpg' && (
                        <img src={`/${item.image}`} alt="Product 1" className="max-w-full h-auto mt-4 rounded" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default AboutUs;
