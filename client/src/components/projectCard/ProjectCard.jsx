import { Link } from "react-router-dom";
import "./ProjectCard.scss";

function ProjectCard({ project }) {
  return (
    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
      <div className="projectCard">
        <img src={project.img} alt="" />
        <div className="info">
          <img src={project.pp} alt="" />
          <div className="texts">
            <h2>{project.cat}</h2>
            <span>{project.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
