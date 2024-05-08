import React from 'react';
import './LandingPage.css';  // Ensure this CSS file is correctly linked

const LandingPage = () => {
    return (
        <div className="relative overflow-hidden">
            <video autoPlay loop muted playsInline className="video-bg">
                <source src="/lp.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content-container">
                <h1 className="headline">Welcome to Our World</h1>
                <p className="subheadline">Innovating one project at a time</p>
            </div>
        </div>
    );
};

export default LandingPage;
