import React from "react";
import styled from "styled-components";
import service1 from "../assets/7-.png";
import service2 from "../assets/6-.png";
import service3 from "../assets/8.png";
import play from "../assets/play.png";
import Title from "./Title";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { servicesAnimations } from "animations";

function Services() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: "Sem",
      text: "Sem był uważany za przodka wszystkich Semitów, w tym także ludów wywodzących się od Ebera. Ten zaś, był przodkiem aramejskich i arabskich plemion Mezopotamii, Syrii i Zajordanii.",
      image: service1,
    },
    {
      type: "Cham",
      text: "Symbolicznie uważa się go za praprzodka ludności zamieszkującej Kanaan i Afrykę (m.in. Egipt, Libię i Etiopię), funkcjonujących również pod pojęciem ludności chamickiej.",
      image: service2,
    },
    {
      type: "Jafet",
      text: "Symboliczny przodek Indoeuropejczyków lub szerzej, ludów Północy, oraz ludów na obszarach Azji Mniejszej, które zostały zajęte przez potomków Jafeta.",
      image: service3,
    },
  ];

  return (
    <Section id="synowie" ref={element}>
      <Title value="synowie" />
      <div className="services">
        {data.map((service, index) => {
          return (
            <motion.div
              className="services__service"
              key={service.type}
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="services__service__image">
                <img src={service.image} alt="service" />
              </div>
              <div className="services__service__title">
                <span>0{index + 1}</span>
                <h2>{service.type}</h2>
              </div>
              <p className="services__service__description">{service.text}</p>
              {/* <img src={play} alt="Play" /> */}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;

  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 14rem;
    margin-top: 10rem;
    gap: 5rem;

    &__service {
      padding: 2rem;

      img{
        margin-top: 1rem;
      }

      &:nth-of-type(3) {
        background: var(--primary-color);
        
        .services__service__title {
          h2 {
            color: var(--third-color);
          }
          span {
            color: #fff;
          }
        }
        .services__service__description {
          color: #fff;
        }
      }
      &__image {
        margin-bottom: 3rem;

        img {
          width: 100%;
        }
      }
      &__title {
        color: var(--primary-color);
        font-weight: bolder;
        line-height: 3rem;
      }
      h3 {
        font-size: 3rem;
        line-height: 2.5rem;
        margin-bottom: 5rem;
        color: var(--secondary-color);
      }
    }
    &__description {
      color: var(--primary-color);
      margin-bottom: 2rem;
    }
  }
}

 @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      margin: 2rem 0;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 2rem;
    }
  }
`;

export default Services;
