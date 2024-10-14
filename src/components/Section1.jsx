import Divider from "../utils/Divider.jsx";
import Photo2 from '../images/SachinPhoto2.png'
const Section1 = () => {
  return (
    <>
      <div className="flex justify-center items-center md:p-10 p-4 md:gap-x-10 text-start md:text-start font-Roboto rounded-md shadow-xl">
        <img
          src={Photo2}
          alt=""
          className="object-contain hidden md:block w-[350px] sm:ml-auto sm:mr-auto md:mx-10 p-2 rounded-md shadow-lg lg:shadow-2xl shadow-fuchsia-300 m-6 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        />
        <div className="">
          <p className="md:text-3xl xl:text-5xl text-2xl text-center font-semibold text-primary md:my-4 my-2">
            Full Stack Web Developer
          </p>
          <div className="md:text-base text-sm font-normal lg:text-lg md:px-10 md:p-0">
            <p className="">
              My journey in the world of web development began with a fascination
              for the endless possibilities of the internet. I've honed my skills
              in HTML, CSS, JavaScript, Tailwind, React Js, Node Js, Express Js, MongoDB constantly pushing
              the boundaries of what's possible in the browser. I thrive on turning concepts
              into reality through clean, efficient code.
            </p>
            <p className="md:text-base text-sm font-normal lg:text-lg flex flex-wrap md:text-start mt-6">
              I bring a collaborative spirit to every project. I understand the
              importance of effective communication and teamwork in delivering
              outstanding results.
            </p>
            <p className="md:text-lg text-base lg:text-xl font-normal flex flex-wrap text-start md:p-0 text-primary cursor-pointer my-4">
              Full Stack Web Development
            </p>
            <p className="md:text-lg text-base lg:text-xl font-normal flex flex-wrap text-start md:p-0 text-primary cursor-pointer my-4">
              Problem Solving
            </p>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};
export default Section1;
