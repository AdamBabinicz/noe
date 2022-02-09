import React from "react";
import styled from "styled-components";
import { BsPinterest, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { useScroll } from "./useScroll";
import { footerLogoAnimations, footerTextAnimations } from "animations";
import { motion } from "framer-motion";

function Footer() {
  const [element, controls] = useScroll();

  return (
    <Foot ref={element}>
      <motion.span
        animate={controls}
        variants={footerTextAnimations}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        Radom, 2022 - {new Date().getFullYear()}.
      </motion.span>
      <motion.div
        className="footer__social__icons"
        animate={controls}
        variants={footerLogoAnimations}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        <ul>
          <li>
            <a
              href="https://www.facebook.com/groups/biblia.chrzescijanstwo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/biblia_hist"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=Y1N1aJ3bTto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://pl.pinterest.com/pin/578008933398426235"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsPinterest />
            </a>
          </li>
        </ul>
      </motion.div>
    </Foot>
  );
}

const Foot = styled.footer`
  background: grey;
  color: var(--third-color);
  display: flex;
  justify-content: space-between;
  padding: 5rem 10rem;

  .footer__social__icons {
    display: flex;
    gap: 2rem;

    ul {
      display: flex;

      li {
        list-style-type: none;
        margin-right: 1rem;
      }
      li:last-child {
        margin-right: 0;
      }
    }

    svg {
      color: var(--third-color);
      font-size: 1.4rem;
      cursor: pointer;
      transition: all 0.4s ease-in-out;

      &:hover {
        color: var(--secondary-color);
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;

    .footer__social__icons {
      display: flex;
      justify-content: center;
      align-items: center;
      ul {
        padding: 1rem;
      }
    }
  }
`;

export default Footer;
