import React from "react";
import styled from "styled-components";
import milestone1 from "../assets/14.png";
import milestone2 from "../assets/15.png";
import milestone3 from "../assets/16.png";
import milestoneBackground from "../assets/12.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { milestoneAnimations } from "animations";
import img from "../assets/5.jfif";

function Milestones() {
  const [element, controls] = useScroll();

  const milestone = [
    {
      image: milestone1,
      data: "Noe, pierwszy człowiek, który posadził winną latorośl, sporządził wino z jej gron, upił się i obnażył intymne części swego ciała...",
      amount: "Rdz",
    },
    {
      image: milestone2,
      data: "Cham, ojciec Kanaana, wszedł do namiotu, gdzie leżał Noe, ujrzał, że jest on nagi i zaraz doniósł o tym Semowi i Jafetowi.",
      amount: "9,",
    },
    {
      image: milestone3,
      data: "Oni zaś zarzucili płaszcz na ramiona, weszli tyłem do namiotu i zakryli nagość swego ojca, nie spoglądając na niego.",
      amount: "21 - 23",
    },
  ];

  return (
    <Section ref={element}>
      <div className="background">
        <img src={milestoneBackground} alt="..." />
      </div>
      <div className="milestones">
        {milestone.map((ms) => {
          return (
            <motion.div
              className="milestone"
              key={ms.data}
              variants={milestoneAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
            >
              <p>{ms.amount}</p>
              <span>{ms.data}</span>
              <img src={ms.image} alt="milestone image" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 100vh;
  background: var(--primary-color);
  padding: 0 10rem;
  position: relative;
  overflow: hidden;

  .background {
    position: absolute;
    left: 0;
    bottom: -30%;

    img {
      height: 60rem;
      z-index: 2;
      object-fit: cover;
    }
  }
  .milestones {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: #fff;
    align-items: center;
    height: 100%;
    /* gap: 3rem; */
    .milestone {
      z-index: 20;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      p {
        font-size: 5rem;
        font-weight: bolder;
        line-height: 3rem;
      }
      span {
        color: #fffc7;
        margin-right: 2rem;
        line-height: 1.5rem;
      }
      img {
        height: 6rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    background: url(${img}) center left/cover no-repeat;
    padding: 5rem 2rem;
    min-height: 100vh;
    height: 100%;
    .background {
      display: none;
    }
    .milestones {
      grid-template-columns: 1fr;
      gap: 5rem;
    }
  }
`;

export default Milestones;
