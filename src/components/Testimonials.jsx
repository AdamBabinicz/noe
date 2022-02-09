import React, { useState } from "react";
import styled from "styled-components";
// import placeholder from "../assets/placeholder.png";
import testimonials1 from "../assets/18.png";
import testimonials2 from "../assets/33.jpg";
import { GiCampingTent } from "react-icons/gi";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { testimonialsAnimation } from "animations";

function Testimonials() {
  const [element, controls] = useScroll();

  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      designation: "Synowie",
      name: "Sema",
      review:
        "Sem jest pierworodnym synem Noego, a więc najważniejszym z punktu widzenia trwania rodu. Na pierworodnym spoczywała większość obowiązków wobec rodziców, ale i przypadała mu większa część dziedzictwa oraz przywilej otrzymania od ojca błogosławieństwa. Sem jest nazwany praojcem wszystkich synów Hebera, którzy, w 1 Mż 11,10-27, są złączeni z imieniem Hebrajczyków. Zdaniem uczonych patriarchowie przybyli z górnej Mezopotamii, z kraju Mitanni = Arpakszad.",
    },
    {
      designation: "Synowie",
      name: "Chama",
      review:
        "Wymienieni są synowie Chama: Kusz, Misraim, Put i Kanaan oraz wnukowie zrodzeni przez Kusza i dwóch prawnuków(wnuków Kusza). Wśród jego potomków szczególnie wyróżnionymzostał Nimrod, któremu poświęcono więcej miejsca i opisano jego dzieła. Wiersze 8-12 opowiadają o Nimrodzie nie jako o protoplaście jakiegoś ludu, ale jako o bohaterze kojarzącym się z mocarzami z 1 Mż 6,4. Słowa „był pierwszym mocarzem na ziemi” (w.8) można zrozumieć, że był walecznym, odważnym lub też, że był tyranem.",
    },
    {
      designation: "Synowie",
      name: "Jafeta",
      review:
        "Wymienionych jest siedmiu synów: Gomer, Magog, Madai, Jawan, Tubal, Meszech i Tiras oraz siedmiu wnuków Jafeta - trzech synów Gomera i czterech synów Jawana. „Od nich wywodziły się narody wyspiarzy podzielone według swoich języków i plemion w narodach swoich” (10,5). O potomkach Jawana naukowcy mówią jako o ludach wybrzeża lub o ludach morza. Imiona potomków Jafeta są nazwami ludów a także i terytoriów zamieszkujących wyspy Morza Śródziemnego oraz północną część Azji Mniejszej. ",
    },
  ];

  return (
    <Section ref={element}>
      <div className="background">
        <img src={testimonials1} alt="..." className="design1" />
        <img src={testimonials2} alt="..." className="design2" />
      </div>
      <div className="container">
        <motion.div
          className="testimonials"
          variants={testimonialsAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          whileInView={{ opacity: 1 }}
        >
          {testimonials.map(({ designation, name, review }, index) => {
            return (
              <div
                className={`testimonial ${
                  selected === index ? "active" : "hidden"
                }`}
                key={index}
              >
                <div className="image">
                  <div className="circle1"></div>
                  <div className="circle2">
                    {/* <img src={placeholder} alt="..." /> */}
                    <GiCampingTent />
                  </div>
                </div>
                <div className="title-container">
                  <span className="designation">{designation}</span>
                  <h3 className="title">{name}</h3>
                </div>
                <p className="description">{review}</p>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          className="controls"
          variants={testimonialsAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
        >
          <button
            className={selected === 0 ? "active" : ""}
            onClick={() => setSelected(0)}
          ></button>
          <button
            className={selected === 1 ? "active" : ""}
            onClick={() => setSelected(1)}
          ></button>
          <button
            className={selected === 2 ? "active" : ""}
            onClick={() => setSelected(2)}
          ></button>
        </motion.div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  overflow: hidden;

  .background {
    position: relative;

    .design1 {
      position: absolute;
      left: 0;
      height: 35rem;
      top: 10rem;
    }
    .design2 {
      position: absolute;
      right: 0;
    }
  }
  .container {
    min-height: 100vh;
    background: var(--primary-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .testimonials {
      display: flex;
      gap: 1rem;
      text-align: center;
      justify-content: center;
      width: 30%;

      .testimonial {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        align-items: center;

        .image {
          position: relative;

          .circle1 {
            position: absolute;
            /* left: -0.7rem;
            top: -0.7rem; */
            height: 10rem;
            width: 10rem;
            border: 0.2rem solid #fff;
            border-radius: 10rem;
          }
          .circle2 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 10rem;
            width: 10rem;
            border-radius: 10rem;
            background: #8860e6b0;

            svg {
              font-size: 4rem;
            }
          }
        }
      }
      .hidden {
        display: none;
      }
      color: var(--third-color);

      .designation {
        color: var(--secondary-color);
      }
      .description {
        height: 8rem;
        width: 600px;
        line-height: 1.5rem;
        z-index: 1;
        text-align: left;
      }
    }
    .controls {
      display: flex;
      gap: 1rem;
      button {
        padding: 0.5rem;
        border-radius: 1rem;
        background: #fff;
        border: 0.1rem solid transparent;
        cursor: pointer;
        margin-top: 2rem;
      }
      .active {
        background: transparent;
        border: 0.1rem solid #fff;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    background: grey;
    .background {
      display: none;
    }
    .container {
      padding: 4rem 0;

      .controls {
        button {
          margin-top: 3rem;
        }
      }
      .testimonials {
        width: 80%;
        .testimonial {
          .description {
            height: 18rem;
            width: 100%;
          }
        }
      }
    }
  }
`;

export default Testimonials;
