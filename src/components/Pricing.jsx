import React, { Fragment } from "react";
import styled from "styled-components";
import play from "../assets/play.png";
import Title from "../components/Title";
import pricing1 from "../assets/6.jpg";
import pricing2 from "../assets/7.jfif";
import { CgArrowLongDown } from "react-icons/cg";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { pricingAnimations } from "animations";

function Pricing() {
  const [element, controls] = useScroll();

  const plans = [
    {
      name: "Sem",
      price: 600,
    },
    {
      name: "Cham",
      price: 536,
    },
    {
      name: "Jafet",
      price: "?",
    },
  ];

  const data = [
    {
      value: "Elam",
      type: "Sem",
    },
    {
      value: "Assur",
      type: "Sem",
    },
    {
      value: "Arfachsad",
      type: "Sem",
    },
    {
      value: "Lud",
      type: "Sem",
    },
    {
      value: "Aram",
      type: "Sem",
    },
    {
      value: "Kusz",
      type: "Cham",
    },
    {
      value: "Misraim",
      type: "Cham",
    },
    {
      value: "Put",
      type: "Cham",
    },
    {
      value: "Kanaan",
      type: "Cham",
    },
    {
      value: "Gomer",
      type: "Jafet",
    },
    {
      value: "Magog",
      type: "Jafet",
    },
    {
      value: "Madai",
      type: "Jafet",
    },
    {
      value: "Jawan",
      type: "Jafet",
    },
    {
      value: "Tubal",
      type: "Jafet",
    },
    {
      value: "Meszech",
      type: "Jafet",
    },
    {
      value: "Tiras",
      type: "Jafet",
    },
  ];

  return (
    <Section ref={element}>
      <Title value="Wnuki" />
      <div className="background">
        <img src={pricing1} alt="..." className="bg1" />
        <img src={pricing2} alt="..." className="bg2" />
      </div>
      <div className="pricing__title">
        <p>Potomkowie</p>
        <h2>Noego</h2>
      </div>
      <div className="pricing">
        {plans.map(({ name, price }, index) => {
          return (
            <motion.div
              className="pricing__plan"
              key={index}
              variants={pricingAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="pricing__plan__name">
                <h2>{name}</h2>
                <div className="pricing__plan__name__price">
                  <span></span>
                  <p>{price}</p>
                </div>
                <span>lat</span>
                <CgArrowLongDown className="pricing__plan__name__arrow" />
              </div>
              <div className="pricing__plan__content">
                <ul className={`pricing__plan__content__features ${name}`}>
                  {data.map(({ value, type }, index2) => {
                    return (
                      <Fragment key={index2}>
                        {name === "Sem" ? (
                          type === name ? (
                            <li>{value}</li>
                          ) : (
                            <li className="line">{value}</li>
                          )
                        ) : name === "Cham" ? (
                          type === name ? (
                            <li>{value}</li>
                          ) : (
                            <li className="line">{value}</li>
                          )
                        ) : (
                          type === "Jafet" && <li>{value}</li>
                        )}
                      </Fragment>
                    );
                  })}
                </ul>
                {/* <div className="pricing__plan__content__actions">
                  <span>Czytaj</span>
                  <img src={play} alt="..." />
                </div> */}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.8)
  );

  .sideTitle {
    z-index: 2;
    h2 {
      color: #fff;
      margin-left: 1rem;
    }
  }

  .background {
    .bg1 {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      opacity: 0.4;
    }
    .bg2 {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: -1;
      opacity: 0.3;
    }
  }
  .pricing__title {
    margin: 6rem 10rem;

    p {
      color: var(--third-color);
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
    h2 {
      color: var(--third-color);
      font-size: 2rem;
    }
  }
  .pricing {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 10rem;

    &__plan {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;

      &:nth-child(2) {
        .pricing__plan__content {
          padding: 0 5rem;
          border-left: 0.2rem solid var(--third-color);
          border-right: 0.2rem solid var(--third-color);
          width: 100%;
        }
      }
      &__name {
        background: var(--primary-color);
        width: 15rem;
        height: 15rem;
        border-radius: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--secondary-color);

        &__arrow {
          color: var(--third-color);
          font-size: 3rem;
        }

        h2 {
          font-size: 2rem;
          line-height: 1.3rem;
        }
        &__price {
          display: flex;
          color: #fff;
          position: relative;

          span {
            position: absolute;
            top: 1rem;
            left: -0.9rem;
            font-size: 1.3rem;
          }
          p {
            font-size: 4rem;
            font-weight: bold;
          }
        }
      }
      &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        max-height: 300px;

        &__features {
          list-style-type: none;
          text-align: center;
          color: var(--third-color);
          display: flex;
          flex-direction: column;
          gap: 0.6rem;

          .line {
            /* text-decoration: line-through; */
            display: none;
          }
          margin-bottom: 2rem;
        }
        &__actions {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: var(--third-color);
          gap: 0.9rem;

          span {
            text-transform: uppercase;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    background-color: var(--secondary-color);
    .pricing__title {
      margin: 0;
      padding: 0 2rem;
      text-align: center;
      h2 {
        font-size: 1.3rem;
      }
    }
    .background {
      display: none;
    }
    .pricing {
      grid-template-columns: 1fr;
      padding: 1rem;
      gap: 4rem;
      &__plan {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        &__name {
          height: 10rem;
          width: 10rem;
          h2 {
            font-size: 1.5rem;
          }
          &__price {
            p {
              font-size: 3rem;
            }
          }
        }
        &:nth-child(2) {
          .pricing__plan__content {
            padding: 0rem;
            border: none;
          }
        }
      }
    }
  }
`;

export default Pricing;
