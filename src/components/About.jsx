import { Link } from "react-router-dom";
import { Education } from "../utils/Data";
import { LeetCode, HackerRank } from "../utils/icons";
const About = () => {
  const { id, degree, college, year, marks } = Education;
  return (
    <div>
      <div className=" py-10 bg-blue-100 box-border">
        <p className="md:text-3xl xl:text-4xl font-bold text-2xl text-gray-600 md:my-3 my-2 text-center">
          Education
        </p>
        <p className="flex-col justify-center md:items-center item-start mx-20">
          {Education.map((item) => (
            <div className="w-full lg:w-2/3 m-auto my-5 shadow-lg shadow-orange-200 h-fit text-center p-4 text-fuchsia-600 bg-blue-50">
              <p className="md:text-xl xl:text-2xl text-lg font-bold text-blue-900 text-center my-2">
                {item.degree}
              </p>
              <p className="md:text-lg text-base lg:text-xl font-semibold flex flex-wrap text-center md:text-start px-10 md:p-0">
                College : {item.college}
              </p>
              <p className="md:text-xl  text-base lg:text-lg font-semibold flex flex-wrap text-center md:text-start px-10 md:p-0">
                Percentage/CGPA: {item.marks}
              </p>
              <p className="md:text-xl  text-base lg:text-lg font-semibold flex flex-wrap text-center md:text-start px-10 md:p-0">
                Passing Year :{item.year}
              </p>
            </div>
          ))}
        </p>

        <div className="bg-fuchsia-100">
          <p className="md:text-3xl xl:text-4xl font-bold text-2xl text-gray-600 md:my-8 my-2 text-center ">
            Skills
          </p>
          <div>
            <div className="flex justify-center">
              <p className="md:text-lg text-base lg:text-xl font-semibold text-center md:text-start px-10 md:p-0 mr-20">Web Development : </p>
              <Link to={"/project"} className="md:text-lg text-base font-semibold text-center md:text-start px-4 hover:text-blue-700 hover:border-b-blue-600 border-b-2">See My Projects</Link>
            </div>
            <div className="flex justify-center">
              <p className="md:text-lg text-base lg:text-xl font-semibold text-center md:text-start px-10 my-5 md:p-0 mr-10">Problem Solver : </p>
              <div className="self-center">
                <Link to={"https://leetcode.com/010sachin/"} target="_blank" className="md:text-lg text-base font-semibold text-center md:text-start px-4 hover:text-blue-700 hover:border-b-blue-600 border-b-2">LeetCode</Link>
                <Link to={"https://www.hackerrank.com/profile/010sssachin"} target="_blank" className="md:text-lg text-base font-semibold text-center md:text-start px-4 hover:text-blue-700 hover:border-b-blue-600 border-b-2">Hacker Rank</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
