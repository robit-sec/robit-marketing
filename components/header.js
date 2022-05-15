import "../styles/index.css";
import NextLink from "next/link";
import { Link, animateScroll as scroll } from "react-scroll";
import React from "react";

class Header extends React.Component {
  state = { mobileMenuOpen: false };

  handleMenuClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      mobileMenuOpen: !prevState.mobileMenuOpen,
    }));
  };

  render() {
    return (
      <div className="w-full">
        <header className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 bg-robitBlue">
          <div className="flex-1 flex justify-between items-center">
            <a href="/" className="flex items-center w-12 h-12">
              <img src="/robit-logo-white-medium.png" />
            </a>
            <label
              className="cursor-pointer lg:hidden block mt-2"
              id="nav-button"
              onClick={this.handleMenuClick}
            >
              <div className="hamburger hamburger--slider" id="burger">
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </label>
          </div>

          <div
            className="hidden lg:flex lg:items-center lg:w-auto w-full"
            id="menu"
          >
            <nav>
              <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                <li>
                  <NextLink href="consultation">
                    <a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-white">
                      Consultation
                    </a>
                  </NextLink>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={700}
                    className="cursor-pointer lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 font-bold underline text-white"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div
          id="mobile-nav"
          className="w-full hidden"
          className={this.state.mobileMenuOpen ? "block" : "hidden"}
        >
          <ul>
            <Link
              className="cursor-pointer h-12 flex items-center border-b-2 border-t-4"
              to="contact"
              smooth={true}
              duration={700}
            >
              <li className="px-8">Get Started</li>
            </Link>
            <a className="h-12 flex items-center border-b-4" href="/websites">
              <li className="px-8">Websites</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
