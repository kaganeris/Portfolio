import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/foto.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              BENİ <span className="purple"> TANIYIN </span>
            </h1>
            <p className="home-about-body">
              Kod yazmaya başlamak verdiğim en iyi karardı. 🤷‍♂️
              <br />
              <br />Kendimi
              <i>
                <b className="purple"> C#, Javascript ve Html </b>
              </i> ile rahat hissediyorum.
              <br />
              <br />
              İlgi alanlarım arasında &nbsp;
              <i>
                <b className="purple">Asp.Net MVC ve Asp.Net API  </b>  projeleri geliştirmek ve bu teknolojilerle ilgili ürünler oluşturmak yer alıyor.
              </i>
              <br />
              <br />
              Fırsat buldukça kendimi Front End için <b className="purple">React.js</b> ile geliştiriyorum. Ayrıca hobi olarak
              <i>
                <b className="purple">
                  {" "}
                  Unity
                </b>
              </i>
              &nbsp; ile oyunlar geliştiriyorum.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>BANA ULAŞIN</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kaganeris"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kaganeris/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kaganeris"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
