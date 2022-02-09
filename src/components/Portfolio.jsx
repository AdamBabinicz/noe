import React, { useState } from "react";
import styled from "styled-components";
import loadmore from "../assets/loadmore.png";
import portfolio1 from "../assets/10.jpg";
import portfolio2 from "../assets/9.jpg";
import Title from "./Title";
import {
  BsCloudLightningRain,
  BsFillCloudLightningRainFill,
  BsFillCloudRainFill,
  BsFillCloudRainHeavyFill,
  BsCloudRainHeavy,
  BsWater,
} from "react-icons/bs";
import { FaPooStorm, FaWater } from "react-icons/fa";
import { RiThunderstormsLine, RiFloodFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { portfolioAnimation } from "animations";
import Modal from "./Portal/Modal";

function Portfolio() {
  const [element, controls] = useScroll();
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <Section id="potop" ref={element}>
      <Title value="Potop" />
      <div className="background">
        <img src={portfolio1} alt="..." className="design1" />
        <img src={portfolio2} alt="..." className="design2" />
      </div>
      <div className="portfolio__title">
        <p>Księga Rodzaju 6,14 – 8,19</p>
        <h2>Potop</h2>
      </div>
      <div className="grid">
        <motion.div
          className="child-one grid-box"
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          whileInView={{ opacity: 1 }}
        >
          {/* <img src={placeholder} alt="..." /> */}
          <BsCloudLightningRain />
        </motion.div>
        <motion.div
          className="child-two grid-box"
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          {/* <img src={placeholder} alt="..." /> */}
          <BsFillCloudLightningRainFill />
        </motion.div>
        <motion.div
          className="child-three grid-box"
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          {/* <img src={placeholder} alt="..." /> */}
          <BsFillCloudRainFill />
        </motion.div>
        <motion.div
          className="child-four grid-box"
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          {/* <img src={placeholder} alt="..." /> */}
          <BsFillCloudRainHeavyFill />
        </motion.div>
        <motion.div
          className="child-five grid-box"
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          {/* <img src={placeholder} alt="..." /> */}
          <BsCloudRainHeavy />
        </motion.div>
        <motion.div
          className="child-six grid-box"
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          {/* <img src={placeholder} alt="..." /> */}
          <FaPooStorm />
        </motion.div>
        <motion.div
          className="child-seven grid-box"
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          {/* <img src={placeholder} alt="..." /> */}
          <FaWater />
        </motion.div>
        <motion.div
          className="child-eight grid-box"
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          {/* <img src={placeholder} alt="..." /> */}
          <BsWater />
        </motion.div>
      </div>
      <div className="portfolio-more">
        <span>Więcej</span>
        <img src={loadmore} alt="..." onClick={() => Toggle()} />
      </div>
      <Modal show={modal} close={Toggle} title="Rdz 9,18-27">
        <p>
          W Biblii Tysiąclecia perykopa z Rdz 9,18-29 została zatytułowana Noe
          przeklina Kanaana, a błogosławi Sema. Redaktor umieszcza ją po opisie
          potopu, a w zasadzie na końcu tego opowiadania. Skutki grzechu zostały
          zmyte wodami potopu. Nie ustała jednak przyczyna grzechu (por. 8,21).
          Człowiek bowiem przejawia skłonności do zła. Tę prawdę ilustruje
          opowiadanie z Rdz 9,18-27. Po potopie ponownie pojawiają się podziały
          wśród ludzi i znów dochodzi do naruszenia jedności braterskiej.
        </p>
        <br />
        <p>
          <em>Dariusz Adamczyk UJK, Kielce</em>
        </p>
      </Modal>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  padding: 2rem 0;
  background: var(--secondary-color);
  .background {
    position: relative;
    z-index: 0;
    .design1 {
      position: absolute;
      z-index: 1;
      right: 8%;
      top: 0;
    }
    .design2 {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 30rem;
      height: 40rem;
    }
  }
  .sideTitle {
    z-index: 2;
    h2 {
      color: #fff;
      margin-left: 1rem;
    }
  }
  .portfolio__title {
    margin: 6rem 15rem;
    p {
      color: var(--primary-color);
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
    h2 {
      color: white;
      font-size: 2rem;
    }
  }
  .grid {
    padding: 0 15rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "one one two two"
      "one one three four"
      "five six seven seven"
      "eight six seven seven";
    .grid-box {
      height: 15rem;
      width: 100%;
      background: var(--primary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      /* cursor: pointer; */
      svg {
        transition: 0.4s ease-in-out;
        font-size: 4rem;
        color: #fff;
      }
      &:hover {
        svg {
          transform: scale(1.2);
        }
      }
      &:nth-of-type(1) {
        grid-area: one;
        height: 100%;
        background: #8860e66a;
        z-index: 10;
      }
      &:nth-of-type(2) {
        z-index: 10;
        grid-area: two;
        background: #662d91ca;
      }
      &:nth-of-type(3) {
        grid-area: three;
        background: #8860e6b0;
      }
      &:nth-of-type(4) {
        grid-area: four;
      }
      &:nth-of-type(5) {
        z-index: 10;
        grid-area: five;
        background: #8860e6b0;
      }
      &:nth-of-type(6) {
        grid-area: six;
        height: 100%;
        background: #662d91ca;
      }
      &:nth-of-type(7) {
        grid-area: seven;
        background: #8860e66a;
        height: 100%;
      }
      &:nth-of-type(8) {
        z-index: 10;
        grid-area: eight;
      }
    }
  }
  .portfolio-more {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 4rem 0;
    span {
      color: white;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }
    img {
      cursor: pointer;
      transition: all 0.4s ease-in-out;

      &:hover {
        opacity: 0.5;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      /* display: none; */
      z-index: -1;
    }
    .portfolio__title {
      margin: 0;
      padding: 0 2rem;
      text-align: center;
      h2 {
        font-size: 1.5rem;
      }
    }
    .grid {
      padding: 2rem 4rem;
      grid-template-columns: 1fr;
      grid-template-areas:
        "one"
        "two"
        "three"
        "four"
        "five"
        "six"
        "seven"
        "eight";
      .grid-box {
        height: 10rem !important;
      }
    }
  }
`;

export default Portfolio;
