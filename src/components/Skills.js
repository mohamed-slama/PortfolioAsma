import mobile1 from "../assets/img/mobile3orange.png";
import gamedev from "../assets/img/gameorange.png";
import webdev from "../assets/img/web4orange.png";
import art from "../assets/img/art2orange.png";
import diart from "../assets/img/diart1orange.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import envi from "../assets/img/house55.png";
import con from "../assets/img/inno4.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I possess diverse skills across various types of development and art,<br></br> showcasing expertise in both technical and creative domains.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <img src={gamedev} alt="Image" style={{ filter: 'invert(100%)' }} />
                                <h5>Game Development</h5>
                            </div>
                            <div className="item">
                            <img src={envi} alt="Image" style={{ filter: 'invert(100%)' }} />
                                <h5>Environment Art</h5>
                            </div>
                            <div className="item">
                            <img src={con} alt="Image" style={{ filter: 'invert(200%)' }} />
                                <h5>Concept Art</h5>
                            </div>
                            <div className="item">
                            <img src={mobile1} alt="Image" style={{ filter: 'invert(100%)' }} />
                                <h5>Mobile Development</h5>
                            </div>
                            <div className="item">
                            <img src={webdev} alt="Image" style={{ filter: 'invert(100%)' }} />
                                <h5>Web Developement</h5>
                            </div>
                            <div className="item">
                            <img src={diart} alt="Image" style={{ filter: 'invert(100%)' }} />
                                <h5>Digital art</h5>
                            </div>
                            <div className="item">
                            <img src={art} alt="Image" style={{ filter: 'invert(100%)' }} />
                                <h5>Drawing</h5>
                            </div>
                           
                        
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>



  )
}
