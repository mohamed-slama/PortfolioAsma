import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ paddingBottom: "20px", paddingTop: "20px" }}
    >
      <Container>
        <Row>
          <Col xs={12}>
            <MailchimpForm />
          </Col>
          <Col
            size={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/asma-srairi007/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/asma.srairi1/">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/asma_srairi/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
