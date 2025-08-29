import React from 'react';
import { NavLink } from 'react-router-dom';


const ErrorPage = () => {
  return (
    <>
      <div className="min-h-[70%] flex flex-col justify-center items-center  text-center px-4 py-20">
        <h1 className="text-7xl font-bold text-purple-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Uh Oh! Page Not Found</h2>
        <p className="text-gray-600 max-w-xl mb-6">
          The page you are looking for does not exist. How you got here is a mystery.
          But you can click the button below to go back to the homepage.
        </p>
        <NavLink to="/">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300">
            Go Home
          </button>
        </NavLink>
      </div>

   
    </>
  );
};

export default ErrorPage;
