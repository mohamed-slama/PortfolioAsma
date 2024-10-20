import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import rpg from "../assets/img/rpgenv.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Carousel from "react-multi-carousel";
import vr8 from "../assets/img/VR8.png";
import vr3 from "../assets/img/VR3.png";
import vrGG from "../assets/img/VRGG.png";
import vr5 from "../assets/img/VR5.png";
import vr12 from "../assets/img/VR12.png";
import vr11 from "../assets/img/VR11.png";
import VID1 from "../assets/img/IndarVR.mp4";
import argot1 from "../assets/img/argot1.jpg";
import argot2 from "../assets/img/argot2.jpg";
import argot4 from "../assets/img/argot4.jpg";
import argot5 from "../assets/img/argot5.jpg";
import argot6 from "../assets/img/argot6.jpg";
import argot7 from "../assets/img/argot7.jpg";
import argot8 from "../assets/img/argot8.jpg";
import arfur1 from "../assets/img/arfur1.jpg";
import arfur2 from "../assets/img/arfur2.jpg";
import arfur3 from "../assets/img/arfur3.jpg";
import arfur4 from "../assets/img/arfur4.jpg";
import arfur5 from "../assets/img/arfur5.jpg";
import room1 from "../assets/img/ROOM1.png";
import room2 from "../assets/img/ROOM3.png";
import env1 from "../assets/img/env11.png";
import env2 from "../assets/img/evn12.png";
import env3 from "../assets/img/env13.png";
import VID2 from "../assets/img/inv11.mp4";
import env22 from "../assets/img/srairi-asma-rpg1.jpg";
import env23 from "../assets/img/srairi-asma-rpg3.jpg";
import env24 from "../assets/img/srairi-asma-rpg5.jpg";
import env25 from "../assets/img/srairi-asma-rpg8.jpg";
import VID3 from "../assets/img/ENV2.mp4";
import skin1 from "../assets/img/AK1.png";
import skin11 from "../assets/img/AK11.png";
import skin2 from "../assets/img/GLO1.png";
import skin22 from "../assets/img/GLO11.png";
import skin3 from "../assets/img/GA1.png";
import skin33 from "../assets/img/GA11.png";
import skin4 from "../assets/img/D1.png";
import skin44 from "../assets/img/D12.png";
import digirala1 from "../assets/img/asmada1.jpg";
import digirala2 from "../assets/img/asmada2.png";
import digirala3 from "../assets/img/asmaaaa (3).png";
import digirala4 from "../assets/img/watercolor.jpg";
import digirala5 from "../assets/img/GOJU.jpg";
import aa from "../assets/img/d13.jpg";
import aa2 from "../assets/img/d14.jpg";
import aa3 from "../assets/img/d10.jpg";
import aa4 from "../assets/img/d3.jpg";
import aa5 from "../assets/img/d7.jpg";
import aa6 from "../assets/img/d8.jpg";
import aa7 from "../assets/img/d6.jpg";
import aa8 from "../assets/img/d4.jpg";
import aa9 from "../assets/img/d2.jpg";
import lava1 from "../assets/img/LAVATOWN.png";
import lava2 from "../assets/img/LAVATOWN2.png";
import lava3 from "../assets/img/LAVATOWN3.png";
import lava4 from "../assets/img/LAVATOWN4.png";



export const Projects = () => {
  const [activeTab, setActiveTab] = useState('first');
  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };
  const Gamedevep = [
    {
      title: "INDAR Virtual Reality furniture experience",

      // First part of the description without bullet points
      firstPart:
        "A virtual reality experience on the Meta Quest 2 developed with Unreal Engine 5.1, that provides furniture suppliers and customers with a customizable showroom showcasing modern and Tunisian furniture.",

      // Second part of the description that will have lines with bullet points
      secondPart:
        "3D Design (Blender). UI/UX design (Figma). Environment Design (UE5). Virtual Reality (VR) Development (UE5). Rendering Optimization (Real-Time Rendering, Lighting, Post-Processing Effects, Shading and Materials) (UE5). Backend Development (NodeJS, MongoDB). Deployment and Version Control(GitHub, Vercel)  ",

      videoUrl: VID1,
      images: [
        { imgUrl: vr8 },
        { imgUrl: vrGG },
        { imgUrl: vr3 },
        { imgUrl: vr5 },
        { imgUrl: vr12 },
        { imgUrl: vr11 },
      ],
    },
    {
      title: "AR (Augmented Reality) Game of thrones",

      // First part of the description without bullet points
      firstPart:
        "This Game of Thrones AR quiz game lets players encounter iconic characters in real-world settings and answer trivia about their histories and alliances to earn points.",

      // Second part of the description that will have lines with bullet points
      secondPart:
        "UI/UX design (Figma). Augmented Reality (AR) Development (unity (Vuforia)). Backend Development (NodeJS, MongoDB). Deployment and Version Control (GitHub, Vercel)  ",

      images: [
        { imgUrl: argot1 },
        { imgUrl: argot5 },
        { imgUrl: argot8 },
        { imgUrl: argot4 },
        { imgUrl: argot5 },
        { imgUrl: argot6 },
        { imgUrl: argot7 },
        { imgUrl: argot2 },
      ],
    },
    {
      title: "AR (Augmented Reality) Furniture experience",

      // First part of the description without bullet points
      firstPart:
        "In this augmented reality furniture experience, users can visualize 3D furniture pieces in their real-world environment using their smartphones. They can easily scale and move the furniture to find the perfect fit for their space, allowing for seamless customization and an immersive shopping experience right from their device",

      // Second part of the description that will have lines with bullet points
      secondPart:
        "UI/UX design (Figma). Augmented Reality (AR) Development (unity (Vuforia)). Backend Development (NodeJS, MongoDB). Deployment and Version Control (GitHub, Vercel)  ",

      images: [
        { imgUrl: arfur1 },
        { imgUrl: arfur2 },
        { imgUrl: arfur3 },
        { imgUrl: arfur4 },
        { imgUrl: arfur5 },
      ],
    },
  ];

  const envArt = [
    {
      title: "Tropical Riverside Environment",

      // First part of the description without bullet points
      firstPart:
        "This Unreal Engine (V5.4.4) scene showcases a vibrant tropical riverside landscape with lush greenery and crystal-clear water reflecting the azure sky. Nestled along the riverbank, a cozy room invites relaxation with its warm lighting and inviting furnishings, harmonizing beautifully with the natural surroundings.",

      // Second part of the description that will have lines with bullet points
      secondPart:
        "Post-Processing Effects. Dynamic Lighting. Wind Simulation. 3D Audio (Music and Sound Effects). High-Quality Textures. Movie Rendering.  ",

      videoUrl: VID2,
      images: [
        { imgUrl: env1 },
        { imgUrl: env2 },
        { imgUrl: env3 },
        { imgUrl: room1 },
        { imgUrl: room2 },
      ],
    },
    {
      title: "Apocalypse Road RGP Environment",

      // First part of the description without bullet points
      firstPart:
        "This scene immerses players in a dark designed with Unreal Engine 5.4.4, a desolate landscape filled with cracked asphalt roads and jagged remnants of civilization. Flickering flames and smoldering debris create an eerie glow, while charred trees and twisted metal structures enhance the sense of chaos and danger in this haunting world.",

      // Second part of the description that will have lines with bullet points
      secondPart:
        "Post-Processing Effects. Dynamic Lighting. Wind Simulation. 3D Audio (Music and Sound Effects). High-Quality Textures. Movie Rendering.  ",

      videoUrl: VID3,
      images: [
        { imgUrl: env22 },
        { imgUrl: env23 },
        { imgUrl: env24 },
        { imgUrl: env25 },
      ],
    },
    {
      title: "Stylized Lava Town",

      // First part of the description without bullet points
      firstPart:
        "In my Unreal Engine 5 scene, a vibrant lava town features whimsical architecture made of volcanic rock, illuminated by flowing lava rivers. The twilight sky and dynamic lighting create a magical atmosphere, bringing the environment to life.",

      // Second part of the description that will have lines with bullet points
      secondPart:
        "Post-Processing Effects. Dynamic/Static Lighting.  High-Quality lava Textures.  ",

      images: [
        { imgUrl: lava1 },
        { imgUrl: lava2 },
        { imgUrl: lava3 },
        { imgUrl: lava4 },
      ],
    },
  ];

  const conArt = [
    {
      title: "Counter Strike 2 Skin creation (Workshop)",

      // First part of the description without bullet points
      firstPart:
        "I created  unique skins for CS2 that reflects my passion for the game and its vibrant community. This project allowed me to blend creativity and technical skills, resulting in a design that enhances the weapon's visual appeal while resonating with fellow players.",

      // Second part of the description that will have lines with bullet points
      secondPart: "UV editing. 3D design. Digital drawing. Texture mapping.  ",

      images: [
        { imgUrl: skin1 },
        { imgUrl: skin11 },
        { imgUrl: skin4 },
        { imgUrl: skin44 },
        { imgUrl: skin2 },
        { imgUrl: skin22 },
        { imgUrl: skin3 },
        { imgUrl: skin33 },
      ],
    },
  ];

  const DigitalArt = [
    {
      title: "Personal digital drawings",

      // First part of the description without bullet points
      firstPart:
        "I created a series of digital drawings using Krita and a Wacom tablet, showcasing my artistic versatility. Each piece features intricate details and vibrant colors",
      secondPart: "Realistic Visuals. Anime Realism. Stylized Art. Character Design. Portraiture.",
      images: [
        { imgUrl: digirala1 },
        { imgUrl: digirala2 },
        { imgUrl: digirala3 },
        { imgUrl: digirala4 },
        { imgUrl: digirala5 },
      ],
    },
  ];
  const Drawing = [
    {
      title: "Personal drawings",

      // First part of the description without bullet points
      firstPart:
        "My drawing series reflects a lifelong passion for art, filled with intricate details and vibrant colors that showcase your versatility. Each piece tells a story of your creative growth and deep obsession with drawing since childhood.",
      secondPart: "Anime. Realism. Abstract art. Line art. Portraits.",
      images: [
        { imgUrl:aa },
        { imgUrl: aa2 },
        { imgUrl: aa3 },
        { imgUrl: aa4 },
        { imgUrl: aa5 },
        { imgUrl: aa6 },
        { imgUrl: aa7 },
        { imgUrl: aa8 },
        { imgUrl: aa9 },
        
      ],
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    The projects section of my portfolio showcases a diverse
                    collection of images representing every project I’ve been
                    involved in, ranging from academic studies in game
                    development and engineering to personal and artistic
                    endeavors.
                  </p>

                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="first"
                    activeKey={activeTab} onSelect={handleTabSelect}
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item
                        style={{
                          width: "20%",
                          display: "inline-block",
                          cursor: "pointer",
                        }}
                      >
                        <Nav.Link eventKey="first">Game Developement</Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        style={{
                          width: "20%",
                          display: "inline-block",
                          cursor: "pointer",
                        }}
                      >
                        <Nav.Link eventKey="second">Environment Art</Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        style={{
                          width: "20%",
                          display: "inline-block",
                          cursor: "pointer",
                        }}
                      >
                        <Nav.Link eventKey="third">Concept Art</Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        style={{
                          width: "20%",
                          display: "inline-block",
                          cursor: "pointer",
                        }}
                      >
                        <Nav.Link eventKey="fourth">Digital Art</Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        style={{
                          width: "20%",
                          display: "inline-block",
                          cursor: "pointer",
                        }}
                      >
                        <Nav.Link eventKey="fifth">Drawings</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {Gamedevep.map((section, index) => (
                            <div key={index} style={{ paddingBottom: "80px" }}>
                              <h3>{section.title}</h3>
                              {/* First part of the description (without bullet points) */}
                              <p
                                style={{
                                  textAlign: "left",
                                  margin: 0,
                                  width: "100%",
                                  whiteSpace: "normal",
                                  marginBottom: "20px",
                                }}
                              >
                                {section.firstPart}{" "}
                                {/* Render the first part of the description directly */}
                              </p>

                              {/* Second part of the description (with bullet points) */}
                              <p
                                style={{
                                  textAlign: "left",
                                  margin: 0,
                                  width: "100%",
                                  whiteSpace: "normal",
                                  marginBottom: "50px",
                                }}
                              >
                                {section.secondPart
                                  .split(/[.!?]+/)
                                  .map((sentence, idx) => {
                                    if (sentence.trim().length > 0) {
                                      return (
                                        <span
                                          key={idx}
                                          style={{
                                            display: "block",
                                            marginBottom: "8px",
                                          }}
                                        >
                                          • {sentence.trim()}.
                                        </span>
                                      );
                                    }
                                    return null; // Skip any empty fragments
                                  })}
                              </p>

                              <Carousel
                              key={`carousel-${index}`}
                                responsive={responsive}
                                infinite={true}
                                className="project-carousel"
                                containerClass="carousel-container"
                                itemClass="carousel-item-padding-40-px"
                              >
                                {section.images.map((image, imgIndex) => (
                                  <div
                                    key={imgIndex}
                                    style={{ padding: "0 15px" }}
                                  >
                                    <ProjectCard
                                      imgUrl={image.imgUrl}
                                      style={{
                                        width: "100%",
                                        height: "250px",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                      }}
                                    />
                                  </div>
                                ))}
                              </Carousel>

                              {section.videoUrl && (
                                <div
                                  className="video-container"
                                  style={{ marginTop: "20px" }}
                                >
                                  <video
                                    controls
                                    style={{
                                      width: "100%",
                                      height: "auto",
                                      maxWidth: "900px",
                                      borderRadius: "10px",
                                      margin: "0 auto",
                                      display: "block",
                                    }}
                                  >
                                    <source
                                      src={section.videoUrl}
                                      type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                  </video>
                                </div>
                              )}
                            </div>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {envArt.map((section, index) => {
                            console.log("Environment Art Section:", section); // Debugging line
                            return (
                              <div
                                key={index}
                                style={{ paddingBottom: "80px" }}
                              >
                                <h3>{section.title}</h3>
                                {/* First part of the description (without bullet points) */}
                                <p
                                  style={{
                                    textAlign: "left",
                                    margin: 0,
                                    width: "100%",
                                    whiteSpace: "normal",
                                    marginBottom: "20px",
                                  }}
                                >
                                  {section.firstPart}{" "}
                                  {/* Render the first part of the description directly */}
                                </p>

                                {/* Second part of the description (with bullet points) */}
                                <p
                                  style={{
                                    textAlign: "left",
                                    margin: 0,
                                    width: "100%",
                                    whiteSpace: "normal",
                                    marginBottom: "50px",
                                  }}
                                >
                                  {section.secondPart
                                    .split(/[.!?]+/)
                                    .map((sentence, idx) => {
                                      if (sentence.trim().length > 0) {
                                        return (
                                          <span
                                            key={idx}
                                            style={{
                                              display: "block",
                                              marginBottom: "8px",
                                            }}
                                          >
                                            • {sentence.trim()}.
                                          </span>
                                        );
                                      }
                                      return null; // Skip any empty fragments
                                    })}
                                </p>

                                <Carousel
                                  key={`carousel-${index}`}
                                  responsive={responsive}
                                  infinite={true}
                                  className="project-carousel"
                                  containerClass="carousel-container"
                                  itemClass="carousel-item-padding-40-px"
                                >
                                  {section.images.map((image, imgIndex) => (
                                    <div
                                      key={imgIndex}
                                      style={{ padding: "0 15px" }}
                                    >
                                      <ProjectCard
                                        imgUrl={image.imgUrl}
                                        style={{
                                          width: "100%",
                                          height: "250px",
                                          objectFit: "cover",
                                          borderRadius: "10px",
                                        }}
                                      />
                                    </div>
                                  ))}
                                </Carousel>

                                {section.videoUrl && (
                                  <div
                                    className="video-container"
                                    style={{ marginTop: "20px" }}
                                  >
                                    <video
                                      controls
                                      style={{
                                        width: "100%",
                                        height: "auto",
                                        maxWidth: "900px",
                                        borderRadius: "10px",
                                        margin: "0 auto",
                                        display: "block",
                                      }}
                                    >
                                      <source
                                        src={section.videoUrl}
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {conArt.map((section, index) => (
                            <div key={index} style={{ paddingBottom: "80px" }}>
                              <h3>{section.title}</h3>
                              {/* First part of the description (without bullet points) */}
                              <p
                                style={{
                                  textAlign: "left",
                                  margin: 0,
                                  width: "100%",
                                  whiteSpace: "normal",
                                  marginBottom: "20px",
                                }}
                              >
                                {section.firstPart}{" "}
                                {/* Render the first part of the description directly */}
                              </p>

                              {/* Second part of the description (with bullet points) */}
                              <p
                                style={{
                                  textAlign: "left",
                                  margin: 0,
                                  width: "100%",
                                  whiteSpace: "normal",
                                  marginBottom: "50px",
                                }}
                              >
                                {section.secondPart
                                  .split(/[.!?]+/)
                                  .map((sentence, idx) => {
                                    if (sentence.trim().length > 0) {
                                      return (
                                        <span
                                          key={idx}
                                          style={{
                                            display: "block",
                                            marginBottom: "8px",
                                          }}
                                        >
                                          • {sentence.trim()}.
                                        </span>
                                      );
                                    }
                                    return null; // Skip any empty fragments
                                  })}
                              </p>

                              <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="project-carousel"
                                containerClass="carousel-container"
                                itemClass="carousel-item-padding-40-px"
                              >
                                {section.images.map((image, imgIndex) => (
                                  <div
                                    key={imgIndex}
                                    style={{ padding: "0 15px" }}
                                  >
                                    <ProjectCard
                                      imgUrl={image.imgUrl}
                                      style={{
                                        width: "100%",
                                        height: "250px",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                      }}
                                    />
                                  </div>
                                ))}
                              </Carousel>

                              {section.videoUrl && (
                                <div
                                  className="video-container"
                                  style={{ marginTop: "20px" }}
                                >
                                  <video
                                    controls
                                    style={{
                                      width: "100%",
                                      height: "auto",
                                      maxWidth: "900px",
                                      borderRadius: "10px",
                                      margin: "0 auto",
                                      display: "block",
                                    }}
                                  >
                                    <source
                                      src={section.videoUrl}
                                      type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                  </video>
                                </div>
                              )}
                            </div>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {DigitalArt.map((section, index) => (
                            <div key={index} style={{ paddingBottom: "80px" }}>
                              <h3>{section.title}</h3>
                              {/* First part of the description (without bullet points) */}
                              <p
                                style={{
                                  textAlign: "left",
                                  margin: 0,
                                  width: "100%",
                                  whiteSpace: "normal",
                                  marginBottom: "20px",
                                }}
                              >
                                {section.firstPart}{" "}
                                {/* Render the first part of the description directly */}
                              </p>

                              {/* Second part of the description (with bullet points) */}
                              <p
                                style={{
                                  textAlign: "left",
                                  margin: 0,
                                  width: "100%",
                                  whiteSpace: "normal",
                                  marginBottom: "50px",
                                }}
                              >
                                {section.secondPart
                                  .split(/[.!?]+/)
                                  .map((sentence, idx) => {
                                    if (sentence.trim().length > 0) {
                                      return (
                                        <span
                                          key={idx}
                                          style={{
                                            display: "block",
                                            marginBottom: "8px",
                                          }}
                                        >
                                          • {sentence.trim()}.
                                        </span>
                                      );
                                    }
                                    return null; // Skip any empty fragments
                                  })}
                              </p>

                              <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="project-carousel"
                                containerClass="carousel-container"
                                itemClass="carousel-item-padding-40-px"
                              >
                                {section.images.map((image, imgIndex) => (
                                  <div
                                    key={imgIndex}
                                    style={{ padding: "0 15px" }}
                                  >
                                    <ProjectCard
                                      imgUrl={image.imgUrl}
                                      style={{
                                        width: "100%",
                                        height: "400px",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                      }}
                                    />
                                  </div>
                                ))}
                              </Carousel>

                              {section.videoUrl && (
                                <div
                                  className="video-container"
                                  style={{ marginTop: "20px" }}
                                >
                                  <video
                                    controls
                                    style={{
                                      width: "100%",
                                      height: "auto",
                                      maxWidth: "900px",
                                      borderRadius: "10px",
                                      margin: "0 auto",
                                      display: "block",
                                    }}
                                  >
                                    <source
                                      src={section.videoUrl}
                                      type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                  </video>
                                </div>
                              )}
                            </div>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fifth">
                      <Row>
                          {Drawing.map((section, index) => (
                            <div key={index} style={{ paddingBottom: "80px" }}>
                              <h3>{section.title}</h3>
                              {/* First part of the description (without bullet points) */}
                              <p
                                style={{
                                  textAlign: "left",
                                  margin: 0,
                                  width: "100%",
                                  whiteSpace: "normal",
                                  marginBottom: "20px",
                                }}
                              >
                                {section.firstPart}{" "}
                                {/* Render the first part of the description directly */}
                              </p>

                              {/* Second part of the description (with bullet points) */}
                              <p
                                style={{
                                  textAlign: "left",
                                  margin: 0,
                                  width: "100%",
                                  whiteSpace: "normal",
                                  marginBottom: "50px",
                                }}
                              >
                                {section.secondPart
                                  .split(/[.!?]+/)
                                  .map((sentence, idx) => {
                                    if (sentence.trim().length > 0) {
                                      return (
                                        <span
                                          key={idx}
                                          style={{
                                            display: "block",
                                            marginBottom: "8px",
                                          }}
                                        >
                                          • {sentence.trim()}.
                                        </span>
                                      );
                                    }
                                    return null; // Skip any empty fragments
                                  })}
                              </p>

                              <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="project-carousel"
                                containerClass="carousel-container"
                                itemClass="carousel-item-padding-40-px"
                              >
                                {section.images.map((image, imgIndex) => (
                                  <div
                                    key={imgIndex}
                                    style={{ padding: "0 15px" }}
                                  >
                                    <ProjectCard
                                      imgUrl={image.imgUrl}
                                      style={{
                                        width: "100%",
                                        height: "400px",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                      }}
                                    />
                                  </div>
                                ))}
                              </Carousel>

                              {section.videoUrl && (
                                <div
                                  className="video-container"
                                  style={{ marginTop: "20px" }}
                                >
                                  <video
                                    controls
                                    style={{
                                      width: "100%",
                                      height: "auto",
                                      maxWidth: "900px",
                                      borderRadius: "10px",
                                      margin: "0 auto",
                                      display: "block",
                                    }}
                                  >
                                    <source
                                      src={section.videoUrl}
                                      type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                  </video>
                                </div>
                              )}
                            </div>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      ></img>
    </section>
  );
};
