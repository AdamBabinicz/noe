import React from "react";
import styled from "styled-components";
import home from "../assets/11.jpg";
import play from "../assets/4.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "../animations";

function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div
        className="home"
        variants="homeAnimations"
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>Noe</h1>
          </div>
          <div className="subTitle">
            <p>- chodził z prawdziwym Bogiem</p>
          </div>
          <img src={play} alt="..." />
        </div>
      </motion.div>
      <motion.div
        className="info"
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="grid">
          <div className="col">
            <strong>Nammah (Waila)</strong>
            <p>- żona</p>
          </div>
          <div className="col">
            <strong>Sem</strong>
            <p>- syn</p>
          </div>
          <div className="col">
            <strong>Cham</strong>
            <p>- syn</p>
          </div>
          <div className="col">
            <strong>Jafet</strong>
            <p>- syn</p>
          </div>
          <div className="col">
            <strong>Księga Rodzaju</strong>
            <p>7, 6-24</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background: url(${home}) center/cover no-repeat;
  min-height: 100vh;
  position: relative;

  .home {
    height: 100%;

    .content {
      height: 100%;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      width: 60%;

      img {
        margin-bottom: 2rem;
        border: 2px solid #fff;
        padding: 1rem;
      }

      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
          text-transform: uppercase;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
          font-size: 2rem;
        }
      }
    }
  }

  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background: var(--secondary-color);
    color: #fff;
    padding: 4rem;

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-top: 3rem;
        margin-bottom: 2rem;

        img {
          margin: 0 auto;
        }

        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Home;
