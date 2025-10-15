import React from "react";
import logo from "../assets/logo.png"; // update path if needed

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-8">
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* Left Section - Logo and Name */}
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <img src={logo} className="h-8 w-8" alt="PM Education Logo" />
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">
              PM Education
            </span>
          </div>

          {/* Middle Section - Quick Links */}
          <ul className="flex flex-wrap justify-center mb-4 sm:mb-0 text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Students
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>

          {/* Right Section - Social Icons */}
          <div className="flex space-x-4 justify-center">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="hover:underline">
            P&M Technologies
          </a>
          . All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
