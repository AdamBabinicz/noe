import React from "react";
import styled from "styled-components";

function Title({ value }) {
  return (
    <Div className="sideTitle">
      <h2>{value}</h2>
    </Div>
  );
}

const Div = styled.div`
  position: relative;

  h2 {
    position: absolute;
    transform: translateX(-43%) translateY(20vw) rotate(-90deg);
    font-size: 7rem;
    color: var(--secondary-color);
    font-weight: lighter;

    @media screen and (min-width: 280px) and (max-width: 1080px) {
      display: none;
    }
  }
`;

export default Title;
