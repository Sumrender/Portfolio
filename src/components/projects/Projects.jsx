import "./Projects.css"
import Project from "./Project";
import { projects } from "../../data/data";

export default function Projects() {
  return (
    <div className="projects">
      <p>
        <u> My Coding Projects</u> <span className="projects-emoji">🛠️</span>
      </p>
      {projects.map((project, idx)=>(<Project key={`project-${idx}`} project={project} />))}
    </div>
  );
}
