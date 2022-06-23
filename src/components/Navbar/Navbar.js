import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "./logo.svg";
import mlogo from "./logo.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Burger, Menu } from "./components";
import FocusLock from "react-focus-lock";
import { Link, animateScroll as scroll } from "react-scroll";
import theme from "styled-theming";
import { useSelector, useDispatch } from "react-redux";
import dis from "./Discord.png";
import med from "./Medium.png";
import twi from "./Twitter.png";
import { Link as RouterLink } from "react-router-dom";

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});

export const Link1 = styled(RouterLink)`
  display: flex;
  margin: 0 0 0 8vw;
  align-items: center;
  text-decoration: none;
  color: #000;
  cursor: pointer;
 
 // background:red;
  font-family: 'Roboto Condensed', sans-serif;
  @-webkit-keyframes hvr-pulse {
    25% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
  @keyframes hvr-pulse {
    25% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
 
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  
  &:hover, &:focus, &:active {
    -webkit-animation-name: hvr-pulse;
    animation-name: hvr-pulse;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
}

@media only screen and (max-width: 1600px) {
  margin: 0 0 0 1rem;
}

@media only screen and (max-width: 768px) {
  font-size: 1.8rem;
}


`;

const Link2 = styled(RouterLink)`
  display: flex;
  margin: 0;
  align-items: center;
  text-decoration: none;
  color: #fff !important;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
  }
`;

const Hr = styled.a`
  display: flex;
  margin: 0;
  align-items: center;
  text-decoration: none;
  color: #fff !important;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
  }
`;

const Mobile = styled.div`
  display: none;
  @media only screen and (max-width: 1200px) {
    display: block;
  }
`;

const PC = styled.div`
  display: block;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Button = styled(Link)`
  background-color: transparent;
  border: none;
  border-radius: 2rem;
  padding: 0 1.5rem;
  color: #000;
  font-size: 1rem;
  height: 3.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const IconContainer = styled.div`
  margin: 0 8vw 0 2rem;
  @media only screen and (max-width: 1600px) {
    margin: 0 1rem 0 0;
  }
  @media only screen and (max-width: 1200px) {
    margin: 0 6rem 0 0;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const Image = styled(motion.img)`
  cursor: pointer;
`;
const RightContainer = styled.div`
  display: flex;
  //background: red;
  align-items: center;
`;

const Navbar = () => {
  // const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled);

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className={navbar ? "navActiveLight" : "nav"}>
      <Link1 to="/" spy={true} smooth={true}>
        <img src={logo} alt="Logo" className={navbar ? "LogoActive" : "Logo"} />
      </Link1>

      {/* <RightContainer> */}

      <PC>
        <ul className="list">
          <Hr
            href="http://donor-vaults.s3-website-us-west-2.amazonaws.com/#/avax"
            spy={true}
            smooth={true}
            offset={-80}
          >
            Asset Structuring
          </Hr>
          {/* <Link2 to="/earn" spy={true} smooth={true} offset={-80}>Earn</Link2>
                  <Link2 to="/donate" spy={true} smooth={true} offset={-80}>Donate</Link2> */}
          <Link2 to="/donate" spy={true} smooth={true} offset={-80}>
            Transfer Agent
          </Link2>
          <Link2 to="/docs" spy={true} smooth={true} offset={-80}>
            Real Estate Tokenization
          </Link2>
          <Link2 to="/work" spy={true} smooth={true} offset={-80}>
            HNI’s & Family Offices
          </Link2>
        </ul>
      </PC>

      <div style={{ display: "flex" }}>
        <IconContainer>
          <Button
            type="button"
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px #ff7b00" }}
            whileTap={{ scale: 0.7 }}
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
        </IconContainer>

        <Mobile ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </Mobile>
      </div>

      {/* </RightContainer> */}
    </nav>
  );
};

export default Navbar;
