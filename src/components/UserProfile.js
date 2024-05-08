import React, { useEffect, useState } from 'react';

const UserProfile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');  // Retrieve the token from localStorage
            if (!token) return;

            try {
                const response = await fetch('http://localhost:3001/api/users/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setProfile(data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, []);

    if (!profile) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {profile.username}</p>
            <p>Email: {profile.email}</p>
        </div>
    );
};

export default UserProfile;
