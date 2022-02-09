import React from "react";
import styled from "styled-components";
// import video1 from "../assets/25.jpg";
import video2 from "../assets/22.jpg";
import { GiAllSeeingEye, GiDoubleFish } from "react-icons/gi";
import meal from "../assets/1.mp4";
import { motion } from "framer-motion";
import { videoAnimations } from "animations";

function Video() {
  return (
    <Section>
      <div className="background">
        <GiDoubleFish className="design1" />
        <GiAllSeeingEye className="design2" />
      </div>
      <motion.div
        className="video"
        variants={videoAnimations}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
        whileInView={{ opacity: 1 }}
      >
        <video
          loop
          controls="false"
          muted
          // allowFullScreen
          src={meal}
          type="video/mp4"
        />
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background: #662d91aa;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .video {
    z-index: 10;

    video {
      min-width: 80vw;
      min-height: 80vh;
    }
  }
  .background {
    .design1 {
      position: absolute;
      left: 0;
      bottom: 6rem;
      width: 22rem;
      font-size: 8rem;
      color: #fff;
      z-index: 11;
    }
    .design2 {
      position: absolute;
      right: 7rem;
      top: 3rem;
      font-size: 8rem;
      color: #fff;
      z-index: 11;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: none;
    .background {
      .design1 {
        bottom: 2rem;
      }
    }
    height: 100%;
    padding: 6rem 2rem;
    .video {
      video {
      }
    }
  }
`;

export default Video;
