import { Badge, Col } from "react-bootstrap";

const colors = ["secondary"];

export const ProjectCard = ({ imgUrl, title, description, skills, style }) => {
  return (
    <div className="project-card">
      <img src={imgUrl} alt={title} style={style} />
      <h3>{title}</h3>
      <p>{description}</p>
      {skills && skills.length > 0 && (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
};