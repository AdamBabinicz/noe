import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { contactAnimations } from "animations";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import img from "../assets/23.png";

function Contact() {
  const [element, controls] = useScroll();

  return (
    <Section id="epilog" ref={element}>
      <Title value="Epilog" />
      <motion.div
        className="contact"
        animate={controls}
        variants={contactAnimations}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
      >
        <div className="contact__title">
          <p>Problematyka teologiczna</p>
          <h2>Epilog</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Dariusz Adamczyk UJK, Kielce</h4>
            <p>
              "Po opowiadaniu o potopie, w Księdze Rodzaju znajduje się epizod o
              upadku Chama (Rdz 9,18-29). Autor podejmuje w nim zagadnienie
              nowego początku ludzkości po kataklizmie. Początkowe wersety tej
              narracji (18 i 19) stanowią jednocześnie zakończenie opowiadania o
              potopie.
            </p>
            <p>
              Trzej synowie Noego: Sem, Cham i Jafet są jedynymi
              przedstawicielami ludzkości na ziemi. Autor nie wspomina tu o ich
              żonach, które razem z nimi weszły do arki. W tych dwóch wersetach
              podkreśla rolę synów Noego w dziejach ludzkości. Od nich bierze
              początek cała ludzkość popotopowa: „od nich to zaludniła się cała
              ziemia” (w. 19b). Zawarta jest tu
              <b> idea rodzinnej jedności wszystkich narodów</b>."
            </p>
            {/* <div>
              <p>
                <strong>Address:</strong> Some Street India
              </p>
              <p>
                <strong>Email:</strong> kishansheth21@gmail.com
              </p>
              <p>
                <strong>Website:</strong> www.yourwebsite.com
              </p>
            </div> */}
          </div>
          <div className="contact__data__form">
            <img src={img} alt="..." />
            {/* <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <textarea placeholder="message"></textarea>
            <button>Send Message</button> */}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .contact {
    color: var(--primary-color);
    margin: 0 23rem;
    &__title {
      margin: 6rem 0;
      p {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: var(--primary-color);
      }
      h2 {
        color: var(--secondary-color);
        font-size: 2rem;
      }
    }
    &__data {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
      &__description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
          font-size: 1.5rem;
        }
        p {
          letter-spacing: 0.1rem;
          text-align: justify;
        }
        div {
          p {
            strong {
              text-transform: uppercase;
            }
          }
        }
      }
      &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        img {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        input,
        textarea {
          text-transform: uppercase;
          border: none;
          border-bottom: 0.1rem solid var(--secondary-color);
          width: 100%;
          color: var(--secondary-color);
          letter-spacing: 0.2rem;
          padding-bottom: 0.7rem;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: var(--secondary-color);
            letter-spacing: 0.4rem;
          }
        }
        textarea {
          width: 100% !important;
          height: 50%;
          resize: none;
        }
        button {
          width: 100%;
          background-color: transparent;
          border: 0.1rem solid var(--secondary-color);
          height: 3rem;
          color: var(--secondary-color);
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            background-color: var(--secondary-color);
            color: var(--primary-color);
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .contact {
      margin: 1rem;
      padding: 0 1rem;
      &__title {
        margin: 0;
        text-align: center;
        p {
          font-size: 0.8rem;
        }
        h2 {
          font-size: 1.3rem;
        }
      }
      &__data {
        grid-template-columns: 1fr;
        margin: 0;
        p {
          text-align: left;
        }
        &__form {
          input {
          }
          button {
            height: 6rem;
          }
        }
      }
    }
  }
`;

export default Contact;
