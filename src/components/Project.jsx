import { projectList } from "../utils/Data";
import { Link } from "react-router-dom";
const Project = () => {
  const projects = projectList;
  return (
    <div className="font-Roboto m-5">
      <div className="flex justify-evenly items-center ">
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold md:font-bold text-center text-fuchsia-700">
          Projects that I had made
        </p>
        <Link to={"/contact"}>
          <button className="bg-gradient-to-r from-purple-500 rounded-md to-pink-500 px-4 py-2 my-3 md:my-8 text-lg font-semibold text-white hover:text-blue-900 text-center">
            Let's Discuss Your Project
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center">
        {projects.map((item) => (
          <div className="flex flex-col justify-start relative m-5 ">
            <img
              src={item.imageLink}
              alt=""
              className="h-[200px] w-[400px] md:h-[320px] md:w-[600px] rounded-lg brightness-75 hover:brightness-50"
            />

            <div className="absolute top-10 left-12 text-fuchsia-200 w-full transition duration-500 hover:scale-110">
              <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
                {item.webName}
              </p>
              <p className="text-2xl md:text-4xl lg:text-8xl font-semibold absolute right-20 top-0">
                {item.id}
              </p>

              <Link
                target="_blank"
                to={item.liveLink}
                className="flex md:text-xl lg:text-2xl font-semibold  m-2 gap-2"
              >
                Live Link
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-link"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </Link>
              <Link
                target="_blank"
                to={item.gitLink}
                className="flex md:text-xl lg:text-2xl font-semibold m-2 gap-2"
              >
                Github Link
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-link"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="center"></div>
    </div>
  );
};
export default Project;
