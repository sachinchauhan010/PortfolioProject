import { projectList } from "../utils/Data";
import { Link } from "react-router-dom";

import ProjectCard from './ProjetCard'

const Project = () => {
  const projects = projectList;
  return (
    <div className="font-Roboto box-border text-white p-2 md:p-4">
      <div className="flex justify-evenly items-center md:flex-row flex-col my-10">
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold md:font-bold text-center text-primary">
          Projects that I had made
        </p>
        <button className="border-2 py-1 mt-3 md:mt-0 px-4 rounded hover:text-primary hover:border-primary">
          <Link
            to={"/contact"}
          >Let's Discuss your Project</Link>
        </button>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-5 justify-start relative items-center">
        {projects.map((item) => (
          <ProjectCard item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};
export default Project;
