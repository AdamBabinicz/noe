import React from "react";
import styled from "styled-components";
import skills1 from "../assets/41.jpg";
import skills2 from "../assets/3.png";
import Title from "./Title";
import { skillsBarAnimations } from "animations";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";

function Skills() {
  const [element, controls] = useScroll();

  const skillsData = [
    {
      name: "długość",
      amount: 133.5,
    },
    {
      name: "szerokość",
      amount: 22.3,
    },
    {
      name: "wysokość",
      amount: 13.4,
    },
    // {
    //   name: "creativity",
    //   amount: 75,
    // },
    // {
    //   name: "creativity",
    //   amount: 75,
    // },
  ];

  return (
    <Section id="arka" ref={element}>
      <Title value="Arka" />
      <div className="background">
        <img src={skills1} alt="skills design" className="design1" />
        <img src={skills2} alt="skills design" className="design2" />
      </div>
      <div className="skills__title">
        <p>Budowa</p>
        <h2>Arki</h2>
      </div>
      <div className="skills">
        <div className="skills__bars">
          {skillsData.map(({ name, amount }) => {
            return (
              <motion.div
                className="skills__bars__bar"
                key={name}
                variants={skillsBarAnimations}
                animate={controls}
                transition={{
                  delay: 0.03,
                  type: "tween",
                  duration: 0.8,
                }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="container">
                  <progress value={amount} max="100" />
                  <span>{name}</span>
                </div>
                <h3>{amount}m</h3>
              </motion.div>
            );
          })}
        </div>
        <div className="skills__content">
          <p className="title">תֵבָה</p>
          <div className="description">
            Arka Noego miała być zgodnie z przekazem biblijnym pływającym
            obiektem wykonanym z drzewa żywicznego nieokreślonego gatunku o
            długości 300 łokci, szerokości 50 łokci i wysokości 30 łokci. Jeśli
            przyjąć, że łokieć miał 44,5 cm, to wymiary arki wynosiły 133,5 ×
            22,3 × 13,4 m. Od góry arka przykryta miała być przepuszczającą
            światło konstrukcją (hebr. sohar) zwisającą na jeden łokieć ze
            wszystkich stron arki – konstrukcja ta mogła być dachem lub otworem
            wpuszczającym światło. Arka miała mieć wejście w bocznej ścianie.
            Wewnątrz była wzmocniona jeszcze dwoma dodatkowymi kondygnacjami, a
            łączna powierzchnia trzech pokładów wynosiła ok. 8900 m². Zgodnie z
            przekazem podzielona była w sumie na trzy piętra. Od wewnątrz i
            zewnątrz powleczona była smołą.
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  height: 140vh;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.8)
  );

  .background {
    position: relative;

    .design1 {
      position: absolute;
      right: 2rem;
      top: 2rem;
      z-index: 1;
      object-fit: contain;
      height: 700px;
      opacity: 0.7;
    }
    .design2 {
      position: absolute;
      left: 1rem;
      top: 10rem;
      z-index: 1;
      opacity: 0.4;
    }
  }
  .sideTitle {
    z-index: 2;
    h2 {
      color: #fff;
      margin-left: 1rem;
    }
  }
  .skills__title {
    padding: 6rem 10rem;

    p {
      letter-spacing: 0.2rem;
      color: var(--primary-color);
      text-transform: uppercase;
    }
    h2 {
      color: var(--third-color);
      font-size: 2rem;
    }
  }
  .skills {
    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    padding: 0 20rem;
    gap: 10rem;

    &__bars {
      transform: rotate(-90deg);
      width: max-content;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      z-index: 1;

      &__bar {
        display: flex;
        flex-direction: row-reverse;
        gap: 1rem;

        .container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;

          span {
            letter-spacing: 0.2rem;
            color: var(--third-color);
          }
          progress {
            width: 20rem;
            -webkit-appearance: none;
            appearance: none;

            &::-webkit-progress-bar {
              height: 3rem;
              background: var(--third-color);
            }
            &::-webkit-progress-value {
              background: #662d91aa;
            }
          }
        }
        h3 {
          transform: rotate(90deg);
          color: var(--third-color);
          font-size: 2rem;
        }
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: var(--third-color);
      z-index: 2;
      line-height: 1.6rem;
      /* min-width: 500px; */

      .title {
        font-weight: bolder;
        letter-spacing: 0.2rem;
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    min-height: 100vh;
    overflow-x: hidden;
    padding: 2rem 0;
    .background {
      display: none;
    }
    .skills__title {
      padding: 2rem;
      text-align: center;
      margin-bottom: 4rem;
      h2 {
        font-size: 1.5rem;
      }
    }
    .skills {
      padding: 0;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      &__bars {
        padding: 0.2rem;
        gap: 3rem;
        align-items: center;
        justify-content: center;

        &__bar {
          .container {
            gap: 0.5rem;

            progress {
              max-width: 12rem;
              width: 100%;
              height: 0.5rem;
              &::-webkit-progress-bar {
                height: 0.3rem;
              }
            }
          }
          h3 {
            font-size: 1rem;
          }
        }
      }
      &__content {
        padding: 0 2rem;
      }
    }
  }
`;

export default Skills;
