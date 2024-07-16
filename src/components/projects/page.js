import { projects } from "./data";
import "./projects.css";
import ProjectShowCase from "./ProjectShowCase";

export default function About() {
  return (
    <div id="projects" className="projects">
      <div className="container">
        <div className="">
          {projects.map(({ title, link, description }, i) => (
            <ProjectShowCase
              key={link}
              link={link}
              title={title}
              description={description}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

