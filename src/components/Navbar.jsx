import React, { useState } from "react";
import styled from "styled-components";
// import { IoMdBoat } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdOutlineDirectionsBoatFilled } from "react-icons/md";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { navAnimation } from "animations";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));

  return (
    <Nav
      state={isNavOpen ? 1 : 0}
      variants={navAnimation}
      transition={{ delay: 0.1 }}
      ref={element}
      animate={controls}
    >
      <div className="brand__container">
        <a href="#" className="brand">
          <MdOutlineDirectionsBoatFilled />
        </a>
        <div className="toggle">
          {isNavOpen ? (
            <MdClose onClick={() => setIsNavOpen(false)} />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setIsNavOpen(true);
              }}
            />
          )}
        </div>
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li className="active">
            <a href="#home">Start</a>
          </li>
          <li>
            <a href="#synowie">Synowie</a>
          </li>
          <li>
            <a href="#arka">Arka</a>
          </li>
          <li>
            <a href="#potop">Potop</a>
          </li>
          <li>
            <a href="#występek">Występek Chama</a>
          </li>
          <li>
            <a href="#epilog">Epilog</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 12rem;
  padding-top: 2rem;
  color: var(--third-color);
  cursor: pointer;

  .brand__container {
    margin: 0 2rem;

    .brand {
      color: #fff;
      font-size: 2rem;
    }

    .toggle {
      display: none;
    }
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;

      .active {
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }

      li {
        a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;
    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .brand {
      }
      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;

        svg {
          font-size: 2rem;
        }
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background: var(--secondary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      z-index: 1;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;

        li {
          margin-bottom: 1.5rem;
        }
      }
    }
  }
`;

export default Navbar;
