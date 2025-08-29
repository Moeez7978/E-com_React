import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';


const Footer = () => {
  return (
    <>
      {/* Contact Short Section */}
      <div className="w-full flex  justify-center -mb-16 z-10 relative mt-10">
        <div className="w-full max-w-4xl bg-white text-black p-8 rounded-lg shadow-lg text-center flex flex-row items-center justify-between">
          <div><h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
          <h3 className="text-lg font-medium mb-4">Contact Us Today</h3></div>
          <NavLink to="/Contact">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300">
              Get Started
            </button>
          </NavLink>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-blue-900 text-white pt-24 pb-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">React E-com Project</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus molestias, debitis odio repellat distinctio nemo.
            </p>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to get important updates</h3>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2  bg-gray-200 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="submit"
                value="Subscribe"
                className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
              />
            </form>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex gap-4 text-xl">
              <li><BsFacebook /></li>
              <li><BsInstagram /></li>
              <li><BsLinkedin /></li>
              <li><BsTwitter /></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Call Us</h3>
            <p className="text-sm">+92 1234567890</p>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="bg-blue-950 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} React E-com Project</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
