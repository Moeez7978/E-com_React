import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Footer = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Contact Short Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
        className="w-full flex justify-center -mb-16 z-10 relative mt-10"
      >
        <div className="w-full max-w-4xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-8 rounded-lg shadow-lg text-center flex flex-row items-center justify-between">
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-xl font-semibold mb-2"
            >
              Ready to get started?
            </motion.h3>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-lg font-medium mb-4"
            >
              Contact Us Today
            </motion.h3>
          </div>
          <NavLink to="/Contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white text-purple-700 px-6 py-3 rounded-md hover:bg-yellow-300 hover:text-purple-900 transition duration-300"
            >
              Get Started
            </motion.button>
          </NavLink>
        </div>
      </motion.div>

      {/* Main Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 text-white pt-24 pb-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold mb-2">React E-com Project</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus molestias, debitis odio repellat distinctio nemo.
            </p>
          </motion.div>

          {/* Subscribe Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-bold mb-4">Subscribe to get important updates</h3>
            <form className="flex flex-col gap-4">
              <motion.input
                type="email"
                placeholder="Enter your email"
                whileFocus={{ scale: 1.02 }}
                className="px-4 py-2 bg-gray-200 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <motion.input
                type="submit"
                value="Subscribe"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white py-2 rounded-md hover:bg-yellow-300 hover:text-purple-900 transition duration-300"
              />
            </form>
          </motion.div>

          {/* Social Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex gap-4 text-xl">
              {[BsFacebook, BsInstagram, BsLinkedin, BsTwitter].map((Icon, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.2, color: '#FFD700' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon />
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-bold mb-2">Call Us</h3>
            <p className="text-sm">+92 1234567890</p>
          </motion.div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-950 text-white py-4"
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} React E-com Project</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
