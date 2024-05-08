import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4 w-full fixed bottom-0 border-t-2 border-black">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className='underline'>
          <p>&copy; 2024 Encreage</p>
          <p>All rights reserved</p>
        </div>
        <div>
          <Link to="/blog" className="text-black hover:text-gray-700 transition-colors duration-300 font-bold py-2 px-4 rounded">
            Blog (beta)
          </Link>
        </div>
        <div>
          <ul className="flex">
            <li className="mx-2">
              <a href="#" className="text-black hover:text-gray-700 transition-colors duration-300 font-bold py-2 px-4 rounded">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="mx-2">
              <a href="#" className="text-black hover:text-gray-700 transition-colors duration-300 font-bold py-2 px-4 rounded">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="mx-2">
              <a href="#" className="text-black hover:text-gray-700 transition-colors duration-300 font-bold py-2 px-4 rounded">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
