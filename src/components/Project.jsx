import { projectList } from "../utils/Data";
import { Link } from "react-router-dom";
import { Button1 } from "../utils/button";
const Project = () => {
  const projects = projectList;
  return (
    <div className="font-Roboto m-5 box-border">
      <div className="flex justify-evenly items-center md:flex-row flex-col my-10">
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold md:font-bold text-center text-fuchsia-500">
          Projects that I had made
        </p>
        <Link to={"/contact"}>
          <Button1 className="px-4 py-2 my-3 md:my-8 text-lg font-semibold text-white text-center" btn={"Let's Discuss Your Project"}>
          </Button1>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center">
        {projects.map((item) => (
          <div className="flex md:flex-row flex-col flex-wrap justify-start relative my-5 md:m-5" key={item.id}>
            <img
              src={item.imageLink}
              alt=""
              className="sm:max-h-48 rounded-lg brightness-100 hover:brightness-50"
            />

            <div className="absolute top-6 left-12 text-gray-100 w-full transition duration-500 hover:scale-110">
              <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
                {item.webName}
              </p>

            </div>
            <div className="absolute bottom-2 left-0 flex flex-row justify-around items-center px-4 w-[100%] transition duration-500 hover:scale-110 text-fuchsia-200">
              <Link target="_blank" to={item?.liveLink} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Live Link
                </span>
              </Link>
              <Link target="_blank" to={item.gitLink} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Github Link
                </span>
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
