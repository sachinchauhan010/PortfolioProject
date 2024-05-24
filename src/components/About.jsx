import { Link } from "react-router-dom";
import { Education } from "../utils/Data";

const About = () => {

  return (
    <div>
      <div className="md:py-10 bg-blue-100 box-border py-20">
        <Link
          target="_blank"
          to={"https://drive.google.com/file/d/1jR5y3PHE5-qBRPYU9hnZxs5rWFtb1BY4/view?usp=sharing"}
          className="group mx-auto sm:w-fit bg-gray-300 px-4 py-2 my-3 md:my-8 text-lg font-semibold hover:text-fuchsia-500 text-blue-900 text-center absolute md:top-20 md:right-10 right-[24%] top-20"
        >
          Download Resume
          <span className="absolute bottom-1 right-0 h-[2px] w-0 bg-blue-900 transition-all delay-200 duration-100 group-hover:w-full" />
        </Link>

        <p className="md:text-3xl xl:text-4xl font-bold text-2xl text-gray-600 md:my-3 my-2 text-center">
          Education
        </p>
        <p className="flex-col justify-center md:items-center item-start md:mx-20 m-4">
          {Education.map((item) => (
            <div
              key={item.degree}
              className="w-full lg:w-2/3 m-auto my-5 shadow-lg shadow-orange-200 h-fit text-center p-4 text-fuchsia-600 bg-blue-50"
            >
              <p className="md:text-xl xl:text-2xl text-lg font-bold text-gray-700 text-center my-2">
                {item.degree}
              </p>
              <p className="md:text-lg text-base lg:text-xl font-semibold flex flex-wrap text-center md:text-start px-10 md:p-0">
                <span className="text-blue-900 font-semibold pr-4">College : </span>{item.college}
              </p>
              <p className="md:text-xl text-base lg:text-lg font-semibold flex flex-wrap text-center md:text-start px-10 md:p-0">
              <span className="text-blue-900 font-semibold pr-4">Percentage/CGPA :</span> {item.marks}
              </p>
              <p className="md:text-xl text-base lg:text-lg font-semibold flex flex-wrap text-center md:text-start px-10 md:p-0">
              <span className="text-blue-900 font-semibold pr-4">Passing Year : </span>{item.year}
              </p>
            </div>
          ))}
        </p>

        <div className="bg-fuchsia-100 p-3">
          <p className="md:text-3xl xl:text-4xl font-bold text-2xl text-gray-600 md:my-3 my-2 text-center">
            Skills
          </p>
          <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-x-10 sm:p-10">
            <div className="h-32 md:w-[280px] w-full shadow-xl m-3 p-6 text-center bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-800 mb-2">
                Web Development
              </p>
              <Link
                to={"/project"}
                className="md:text-lg text-base font-semibold text-center md:text-start px-4 hover:text-blue-700 hover:border-b-blue-600 border-b-2"
              >
                See My Projects
              </Link>
            </div>
            <div className="h-32 md:w-[300px] w-full shadow-xl m-3 p-6 text-center bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-800 mb-2">
                Problem Solving
              </p>
              <Link
                to={"https://leetcode.com/010sachin/"}
                target="_blank"
                className="md:text-lg text-base font-semibold text-center md:text-start px-4 hover:text-blue-700 hover:border-b-blue-600 border-b-2"
              >
                LeetCode
              </Link>
              <Link
                to={"https://www.hackerrank.com/profile/010sssachin"}
                target="_blank"
                className="md:text-lg text-base font-semibold text-center md:text-start px-4 hover:text-blue-700 hover:border-b-blue-600 border-b-2"
              >
                Hacker Rank
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
