import Image from "../../assets/project.jpeg";

export default function Project({ project }) {
  let img = project.img || Image;
  return (
    <div className="project-container">
      <p className="project-heading">{project.name}</p>
      <div className="project">
        <div className="project-img-container">
          <img src={img} className="project-image" alt="" />
        </div>
        <div className="project-content">
          <div className="">
            <p className="project-desc">{project.desc}</p>
            <button className="project-repo main-button">
              <a href={project.link} target="_blank">
                <span className="emoji">🔗</span>Go to Repo
              </a>
            </button>
            <button className="project-repo main-button">
              <a href={project.projectLink} target="_blank">
                <span className="emoji">🔗</span>Live Demo
              </a>
            </button>
          </div>
          <div className="button-grid-container">
            {project.stack.map((tech, idx) => (
              <button
                key={`${project.name}-btn-${idx}`}
                className="grid-button"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
