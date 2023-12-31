import "./CatCard.scss";
import { Link } from "react-router-dom";

function CatCard({ card }) {
  return (
    <Link to="/gigs">
      <div className="catCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
}

export default CatCard;
