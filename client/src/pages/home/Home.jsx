import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data";
import checkImg from "../../../public/assets/check.png";
import video from "../../../public/assets/video.mp4";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Carousel from "react-multi-carousel";

function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
  };

  return (
    <div className="home">
      {/* featured hero-sec */}
      <Featured />

      {/* trusted by component */}
      <TrustedBy />

      {/* slider 1 component */}
      <Carousel responsive={responsive}>
        {cards.map((card) => (
          <CatCard card={card} key={card.id} />
        ))}
      </Carousel>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="title">
              <img src={checkImg} alt="" />
              Stick to your budget
            </div>
            <p>
              Stick to your budget Find the right service for every price point.
              No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <img src={checkImg} alt="" />
              Get quality work done quickly
            </div>
            <p>
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>
            <div className="title">
              <img src={checkImg} alt="" />
              Pay when you are happy
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
            <div className="title">
              <img src={checkImg} alt="" />
              Count on 24/7 support
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
          <div className="item">
            <video src={video} controls></video>
          </div>
        </div>
      </div>

      {/* features component 2 */}
      <div className="features dark">
        <div className="container">
          <div className="item">
            <div className="header">
              <div className="logo">
                <span>fiverr</span>
                <span>.</span>
              </div>
              <h2>Business Solutions</h2>
            </div>
            <p className="belowHeader">
              Advanced solutions and professional talent for businesses
            </p>
            <div className="title">
              <img src={checkImg} alt="" />
              <div className="titleText">
                <h2>Fiverr Pro</h2>
                <p>
                  Access top freelancers and professional business tools for any
                  project
                </p>
              </div>
            </div>
            <div className="title">
              <img src={checkImg} alt="" />
              <div className="titleText">
                <h2>Fiverr Certified</h2>
                <p>Build your own branded marketplace of certified experts</p>
              </div>
            </div>
            <div className="title">
              <img src={checkImg} alt="" />
              <div className="titleText">
                <h2>Fiverr Enterprise</h2>
                <p>
                  Manage your freelance workforce and onboard additional talent
                  with an end-to-end SaaS solution
                </p>
              </div>
            </div>
            <button>Learn More</button>
          </div>
          <div className="item">
            <img
              alt="Fiverr Pro freelancers"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* silder 2 */}
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
