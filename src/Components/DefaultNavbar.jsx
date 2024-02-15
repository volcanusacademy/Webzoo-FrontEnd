import React, { useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { scaleRotate as Menu } from "react-burger-menu";
import WebZoo from "../assets/WebZoo1.png"

const DefaultNavbar = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    console.log(to);
  };
  
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',  // Set 'right' property to move the button to the right
      top: '36px',
      zIndex:50
    },
    bmBurgerBars: {
      background: '#fff'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      right:0,
      zIndex:99
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  

  return (
    <div>
    <div className=" overflow-hidden fixed " data-aos="fade-right" data-aos-duration="500"
          data-aos-easing="ease-in-sine">
      <img src={WebZoo} className="w-60 bg-black h-20 m-3" alt="logo"></img>
    </div>
      <Menu
        styles={styles}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        itemListElement="div"
        right
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
            className="p-3 hover:cursor-pointer text-white w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-black hover:text-white hover:scale-90"
          >
            About
          </Link>
          <Link
            to="quality"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
            className="p-3 hover:cursor-pointer text-white w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-black hover:text-white hover:scale-90"
          >
           Quality
          </Link>
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
            className="p-3 hover:cursor-pointer text-white w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-black hover:text-white hover:scale-90"
          >
            Work
          </Link>
          <Link
            to="clients"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
            className="p-3 hover:cursor-pointer text-white w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-black hover:text-white hover:scale-90"
          >
            Clients
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
            className="p-3 hover:cursor-pointer text-white w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-black hover:text-white hover:scale-90"
          >
            Contact
          </Link>
        </div>
      </Menu>
    </div>
  );
};

export default DefaultNavbar;
