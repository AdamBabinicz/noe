import React from "react";
import styled from "styled-components";
import placeholder from "../assets/19.jpg";
import placeholder1 from "../assets/1.webp";
import placeholder2 from "../assets/31.jpg";
import play from "../assets/play.png";
import Title from "../components/Title";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { blogsAnimations } from "animations";

export default function Blog() {
  const [element, controls] = useScroll();

  const blogsData = [
    {
      image: placeholder,
      title: "Wypędzenie Chama",
      type: "Rdz 9, 24-27",
      description:
        "Niech będzie przeklęty Kanaan! Niech będzie najniższym sługą swych braci! A potem dodał: Niech będzie błogosławiony Pan, Bóg Sema! Niech Kanaan będzie sługą Sema! Niech Bóg da i Jafetowi dużą przestrzeń i niech on zamieszka w namiotach Sema, a Kanaan niech będzie mu sługą.",
    },
    {
      image: placeholder1,
      title: "Interpretacja z judaizmu",
      type: "Kpł 20, 11",
      description:
        "Określenie „odsłonić czyjąś nagość” w Prawie Mojżeszowym oznacza współżycie płciowe z tą osobą, bądź z jego współmałżonkem – Ktokolwiek obcuje cieleśnie z żoną swojego ojca, odsłania nagość ojca: będą ukarani śmiercią oboje, ich krew [spadnie] na nich.",
    },
    {
      image: placeholder2,
      title: "Interpretacje z poza Biblii",
      type: "Noah’s Curse: The Biblical Justification of American Slavery",
      description:
        "Noe przekłął Kanaana, ponieważ został poczęty w Arce, wbrew jego zakazowi. Według późniejszej tradycji rabinackiej zawartej w Talmudzie Kanaan wykastrował Noego, bądź uczynił to Cham.",
    },
  ];

  return (
    <Section id="występek" ref={element}>
      <Title value="Występek Chama" />
      <div className="decoration"></div>
      <div className="blogs">
        {blogsData.map(({ image, title, type, description }) => {
          return (
            <motion.div
              className="blog"
              key={title}
              variants={blogsAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="image">
                <img src={image} alt="..." />
              </div>
              <div className="title">
                <h3>{title}</h3>
              </div>
              <span className="type">{type}</span>
              <div className="description">
                <p>{description}</p>
              </div>
              {/* <div className="more">
                <img src={play} alt="..." />
                <span>Czytaj</span>
              </div> */}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  position: relative;

  .decoration {
    position: absolute;
    height: 20rem;
    width: 70vw;
    border: 0.5rem solid var(--secondary-color);
    left: 15%;
    top: -2rem;
  }
  .blogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 5rem 20rem;

    .blog {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 1rem;

      .image {
        height: 22rem;
        background: #a686f0af;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 90%;
          height: 20rem;
          object-fit: cover;
          z-index: 4;
        }
      }
      .title {
        h3 {
          color: var(--secondary-color);
          font-size: 2rem;
        }
      }
      .type {
        color: var(--primary-color);
        font-weight: bolder;
        text-transform: uppercase;
      }
      .description {
        height: 10rem;
        color: var(--primary-color);
      }
      .more {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;

        span {
          letter-spacing: 0.1rem;
          color: var(--primary-color);
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 0;
    .decoration {
      display: none;
    }
    .blogs {
      padding: 0 2rem;
      grid-template-columns: 1fr;
      margin: 0 1rem;

      .blog {
        .image {
          height: 26rem;
          img {
            height: 23rem;
            object-fit: contain;
          }
        }
      }
    }
  }
`;
