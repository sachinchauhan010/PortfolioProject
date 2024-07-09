import photo from "../images/image.png";
const Section1 = () => {
  return (
    <>
      <div className="flex justify-center items-center md:p-10 p-4 md:gap-x-10 text-start md:text-start font-Roboto bg-blue-50 border-[1px] border-gray-200 rounded-md shadow-xl">
        
        <div className="flex-col flex-wrap md:px-10">
          <p className="md:text-3xl xl:text-5xl text-2xl text-center font-bold text-blue-900 md:my-4 my-2">
            Full Stack Web Developer
          </p>
          <p className="md:text-lg text-base lg:text-xl font-medium flex flex-wrap md:text-start md:px-10 md:p-0">
            My journey in the world of web development began with a fascination
            for the endless possibilities of the internet. I've honed my skills
            in HTML, CSS, JavaScript, Tailwind, React Js, Node Js, Express Js, MongoDB constantly pushing
            the boundaries of what's possible in the browser. I thrive on turning concepts
            into reality through clean, efficient code.
          </p>
          <p className="md:text-lg text-base lg:text-xl font-medium flex flex-wrap md:text-start md:px-10 md:p-0 mt-6">
            I bring a collaborative spirit to every project. I understand the
            importance of effective communication and teamwork in delivering
            outstanding results.
          </p>
          <p className="md:text-lg text-base lg:text-xl font-semibold flex flex-wrap text-center md:text-start sm:mx-10 px-10 md:p-0 text-gray-600 cursor-pointer my-4">
            Full Stack Web Development
          </p>
          <p className="md:text-lg text-base lg:text-xl font-semibold flex flex-wrap text-center md:text-start px-10 sm:mx-10 md:p-0 text-gray-600 cursor-pointer my-4">
            Problem Solving
          </p>
        </div>
      </div>
    </>
  );
};
export default Section1;
