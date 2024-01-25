import React from "react";
import style from "./NavBar.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoMdHelp } from "react-icons/io";
import { Dropdown } from "react-bootstrap";
import { IoSchoolSharp } from "react-icons/io5";

function NavBar(props) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 768);
  };
  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      closeOffcanvas();
    }
  }, [isLargeScreen]);

  // scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className=" mb-3"
          id={style.Navbar}
        >
          <Container fluid>
            <Navbar.Brand>
              {" "}
              <Link
                to="/"
                id={style.Link}
                onClick={() => scrollToSection("section1")}
              >
                {" "}
                <img src="images/2.png" alt="" className={style.logo} />
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              id={style.NavToggle}
              onClick={() => setShowOffcanvas(!showOffcanvas)}
            />

            <Navbar.Offcanvas
              // id={`offcanvasNavbar-expand-${expand}`}
              id="offcanvas"
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showOffcanvas}
              onHide={closeOffcanvas}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  LOGO
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* yaa */}
                  <Dropdown >
                    <Dropdown.Toggle id={style.dropdownToggle}>
                      <FcAbout className={style.accountIcon2} />
                      ABOUT US
                    </Dropdown.Toggle>

                    <Dropdown.Menu id={style.Dropdown_menu}>
                      <h6><Link to="/about" id={style.link}>About Foundation</Link></h6>
                      <h6><Link to="/about/professor" id={style.link}>About Pro.John</Link></h6>
                      <h6><Link id={style.link}>Gallery</Link></h6>
                     
                    </Dropdown.Menu>
                  </Dropdown>

                  <Link to="/news" id={style.Link} onClick={closeOffcanvas}>
                    <Nav
                      id={style.Link2}
                      onClick={() => scrollToSection("section3")}
                    >
                      {" "}
                      <FaRegNewspaper className={style.accountIcon} />
                      NEWS
                    </Nav>
                  </Link>
                  <Link to="/lectures" id={style.Link} onClick={closeOffcanvas}>
                    <Nav
                      id={style.Link2}
                      onClick={() => scrollToSection("section3")}
                    >
                      {" "}
                      <IoSchoolSharp className={style.accountIcon} />
                      LECTURES
                    </Nav>
                  </Link>

                  <Link to="/events" id={style.Link} onClick={closeOffcanvas}>
                    <Nav
                      id={style.Link2}
                      onClick={() => scrollToSection("section3")}
                    >
                      {" "}
                      <FaRegCalendarAlt className={style.accountIcon} />
                      EVENTS
                    </Nav>
                  </Link>
                  <Link to="/donate" id={style.Link} onClick={closeOffcanvas}>
                    <Nav
                      id={style.Link2}
                      onClick={() => scrollToSection("section3")}
                    >
                      {" "}
                      <button className={style.donateButton}>
                        <FaDonate className={style.accountIcon} />
                        DONATE
                      </button>{" "}
                    </Nav>
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
