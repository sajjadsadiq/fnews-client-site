import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const user = false;
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        background: "white",
        "z-index": "1",
      }}
    >
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo */}
          <a
            href="/"
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <i style={{ "font-size": "40px" }} class="fab fa-foursquare"></i>
            <span style={{ "font-size": "30px" }} class=" text-xl">
              News
            </span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" class="mr-5 hover:text-gray-900">
              HOME
            </a>
            <a class="mr-5 hover:text-gray-900">ABOUT</a>
            <a class="mr-5 hover:text-gray-900">CONTACT</a>
            <a href="/addPost" class="mr-5 hover:text-gray-900">
              ADD POST
            </a>
          </nav>
          {user ? (
            <div style={{"display":"flex","align-items":"center"}}>
              <img
                style={{ width: "40px", "border-radius": "50%" }}
                src="https://i.ibb.co/02sWdwn/Sajjad-Sadiq.png"
                alt="profile picture"
              />
              <span style={{"margin-left":"5px"}}>Sajjad Dev</span>
            </div>
          ) : (
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              <Link to="/login">Login</Link>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          )}
        </div>
      </header>
    </div>
  );
};
