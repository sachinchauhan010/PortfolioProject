import { projectList } from "../utils/Data";
import { Link } from "react-router-dom";
const Project = () => {
  const projects = projectList;
  return (
    <div className="font-Roboto m-5 box-border">
      <div className="flex justify-evenly items-center md:flex-row flex-col">
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
          <div className="flex md:flex-row flex-col flex-wrap justify-start relative my-5 md:m-5">
            <img
              src={item.imageLink}
              alt=""
              className="h-[200px] w-[400px] md:h-[320px] md:w-[600px] rounded-lg brightness-75 hover:brightness-50"
            />

            <div className="absolute top-6 left-12 text-fuchsia-200 w-full transition duration-500 hover:scale-110">
              <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
                {item.webName}
              </p>
              <p className="text-2xl md:text-4xl lg:text-8xl font-semibold absolute right-20 top-0">
                {item.id}
              </p>
            </div>
            <div className="absolute bottom-2 left-0 flex flex-row justify-around items-center px-4 w-[100%] transition duration-500 hover:scale-110 text-fuchsia-200">
              <Link
                to={item.liveLink}
                target="_blank"
                className="relative inline-flex items-center px-10 py-2 overflow-hidden text-lg font-bold text-fuchsia-200  border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Live Link</span>
              </Link>
              <Link
                target="_blank"
                to={item.gitLink}
                className="relative inline-flex items-center px-10 py-2 overflow-hidden text-xl font-semibold text-fuchsia-200 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Github Link</span>
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
