import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/api/services')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setServices(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center mt-5">Loading services...</div>;
    if (error) return <div className="text-center text-red-600 mt-5">Error fetching services: {error}</div>;

    return (
        <div className="container mx-auto px-10 py-12">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Services</h1>
            <div className="flex flex-wrap justify-center gap-6">
                {services.map(service => (
                    <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-sm">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-900">{service.name}</h2>
                            <p className="mt-2 text-gray-600">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
