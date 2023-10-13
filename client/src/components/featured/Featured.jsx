import "./Featured.scss";
import manImg from "../../../public/assets/man.png";
import searchBtn from "../../../public/assets/search.png";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <p>
            Find the right <span>freelance</span> <br /> service, right away
          </p>
          <div className="search">
            <div className="searchInput">
              <img src={searchBtn} alt="" />
              <input type="text" placeholder="Try building mobile app" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src={manImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
