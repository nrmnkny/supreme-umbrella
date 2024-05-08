import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ('./Header.css');

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);  // State to manage the menu toggle

    return (
        <header className="bg-white text-black p-5 fixed top-0 w-full z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/"  className="flex items-center">
                    {/* <img src="/favicon-01.png" alt="Encreage Logo" className="h-10 mr-2" /> */}
                        <h1 className="text-3xl font-bold font-mono">encreage</h1>
                </Link>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
                <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <li>
                            <Link to="/services" className="hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:text-accent">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/technologies" className="hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:text-accent">
                                Technologies
                            </Link>
                        </li>
                        <li>
                            <Link to="/aboutus" className="hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:text-accent">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:text-accent">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
