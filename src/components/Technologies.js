import React from 'react';

const Technologies = ({ technologies }) => {
    if (!technologies || technologies.length === 0) {
        return <p className="text-center text-gray-600 text-xl mt-5">No technologies to display</p>;
    }

    return (
        <div className="px-4 py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-semibold text-gray-800">Technologies We Use</h1>
                    <p className="text-gray-500 text-lg">Explore the technologies that power our solutions.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map(tech => (
                        <div key={tech.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{tech.name}</h3>
                            <p className="text-gray-600">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Technologies;
