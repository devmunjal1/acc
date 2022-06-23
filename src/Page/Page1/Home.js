import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Bg.css";
import { motion } from "framer-motion";
import bg from "./back.png";
import center from "./center.png";
import { useSelector, useDispatch } from "react-redux";
import theme from "styled-theming";
import { BsBoxArrowUp } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from "../../components/Navbar/Navbar";
import { useWallet } from "use-wallet";

// const iconColor = theme("theme", {
//     light: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
//     dark: "linear-gradient(to right, #fc00ff, #00dbde)",
//   });

const HomePage = styled.section`
  display: flex;
  //
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
  width: 100%;
  padding: 9rem 0 5rem 0;

  background-color: #fff;

  @media only screen and (max-width: 768px) {
    width: 100%;

    background-size: auto 100%;
    flex-direction: column;
  }
`;

const Width = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: column;
  //  padding: 3rem 0 0 0;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1400px) {
    width: 90%;
  }
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    margin: 7rem 0 0 0;
  }

  @media only screen and (max-width: 510px) {
    width: 98%;
    //margin: 4rem  0 0 0;
  }
`;
const Background = styled.div`
  background-image: url(${bg});
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  width: 90%;
  height: 30rem;
  position: relative;
  display: flex;
  //
  align-items: center;
  justify-content: center;
  margin: 8rem 0 0 0;
`;

const H = styled.h1`
  color: #000000;
  font-size: 3.5rem;

  text-align: center;

  line-height: 1.2;

  @media only screen and (max-width: 1300px) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 1300px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 1100px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const Center = styled.div`
  width: 30rem;
  height: 40rem;
  position: absolute;
  @media only screen and (max-width: 768px) {
    width: 98%;
    flex-direction: column;
  }
`;

const ShowButton = styled(Link)`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background-color: rgba(2, 169, 92, 1); //
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  position: fixed;
  height: 4rem;
  width: 3rem;
  border-radius: 0.5rem;
  transition: 0.5s linear;
  right: 3rem;
  bottom: 10rem;
  display: grid;
  place-items: center;
  z-index: 7;
  @media only screen and (max-width: 768px) {
    right: 2rem;
    bottom: 5rem;
  }
`;

const Home = () => {
  // const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled);
  const dispatch = useDispatch();
  const wallet = useWallet();

  const renderButton = () => {
    return wallet.account ? (
      <Button
        type="button"
        style={{ padding: "0 1rem", minWidth: "11rem" }}
        onClick={() => {
          wallet.connect();
        }}
        to="donate"
        spy={true}
        smooth={true}
        offset={150}
      >
        {wallet.account.slice(0, 10)}...
      </Button>
    ) : (
      <Button
        type="button"
        style={{ padding: "0 1rem", minWidth: "11rem" }}
        onClick={() => {
          wallet.connect();
        }}
        to="donate"
        spy={true}
        smooth={true}
        offset={150}
      >
        Donate
      </Button>
    );
  };

  const [showButton, setShowButton] = useState(false);

  const showButtonTop = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 600) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    showButtonTop();
    // adding the event when scroll change background
    window.addEventListener("scroll", showButtonTop);
  });

  return (
    <HomePage id="home">
      <Width>
        <H>
          Optimize your tokenized holdings with a low -friction high-execution
          platform
        </H>
        <Button
          type="button"
          whileHover={{ scale: 1.1, boxShadow: "0 0 25px #ff7b00" }}
          whileTap={{ scale: 0.7 }}
          style={{ margin: "2.5rem 0 0 0" }}
        >
          Download App
          <div style={{ margin: "0.2rem 0 0 1rem" }}>
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.13924 14L0 12.9781L6.72152 6.99999L0 1.0219L1.13924 0L9 6.99999L1.13924 14Z"
                fill="black"
              />
            </svg>
          </div>
        </Button>
        <Background>
          <Center>
            <img
              src={center}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Center>
        </Background>
      </Width>

      {showButton ? (
        <ShowButton type="button" to="home" spy={true} smooth={true}>
          <BsBoxArrowUp size="2rem" />
        </ShowButton>
      ) : null}
    </HomePage>
  );
};

export default Home;
