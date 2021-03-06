import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });

  return (
    <Div>
      <a href="#" className={`${visible ? "block" : "none"}`}>
        <FaChevronUp />
      </a>
    </Div>
  );
}

const Div = styled.div`
  max-width: 100vw;

  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background: orange;
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease-in-out;
    z-index: 100;

    svg {
      color: var(--third-color);
      font-size: 1.3rem;
    }

     @media screen and (min-width: 280px) and (max-width: 1080px) {
      left: 85vw;
      right: initial;
    }
  }
  }
`;

export default ScrollToTop;
