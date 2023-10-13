import "./GigCard.scss";
import { Link } from "react-router-dom";
import starIcon from "../../../public/assets/star.png";
import heartIcon from "../../../public/assets/heart.png";

const GigCard = ({ gig }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={gig.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={gig.pp} alt="" />
            <span>{gig.username}</span>
          </div>
          <p>{gig.desc}</p>
          <div className="star">
            <img src={starIcon} alt="" />
            <span>{gig.star}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src={heartIcon} alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              ₹ {gig.price}
              <sup>.99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
