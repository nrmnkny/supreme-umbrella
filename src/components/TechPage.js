import React, { useEffect, useState } from 'react';
import Technologies from './Technologies'; // Ensure this path matches where your Technologies component is located

const TechPage = () => {
    const [technologies, setTechnologies] = useState([]); // Initializes the technologies state as an empty array
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State to store any errors

    useEffect(() => {
        fetch('http://localhost:3001/api/technologies')
            .then(response => {
                if (!response.ok) { // Check if the response status is not ok
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data); // Log data for debugging
                setTechnologies(data); // Set the technologies state with fetched data
                setLoading(false); // Set loading to false after data is received
            })
            .catch(error => {
                console.error('Error fetching technologies:', error);
                setError(error.message); // Set error state with error message
                setLoading(false); // Set loading to false because fetch is complete, albeit with an error
            });
    }, []); // Empty dependency array means this effect runs only once after the initial render

    if (loading) return <p>Loading...</p>; // Display loading message while fetching data
    if (error) return <p>Error: {error}</p>; // Display error message if an error occurred

    return (
        <div>
            <Technologies technologies={technologies} /> 
        </div>
    );
};

export default TechPage;
