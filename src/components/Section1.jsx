import photo from "../images/image.png";
const Section1 = () => {
  return (
    <>
      <div className="flex justify-center items-center md:p-10 p-4 md:gap-x-10 text-start md:text-start font-Roboto bg-violet-100">
        <img
          src={photo}
          alt=""
          className="object-contain hidden md:block w-[280px] sm:ml-auto sm:mr-auto md:mx-10 p-2 rounded-md shadow-lg lg:shadow-2xl shadow-fuchsia-300 m-6 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        />
        <div className="flex-col flex-wrap md:px-10">
          <p className="md:text-3xl xl:text-5xl text-2xl text-center font-bold text-blue-900 md:my-4 my-2">
            Frontend Web Developer
          </p>
          <p className="md:text-lg text-base lg:text-xl font-semibold flex flex-wrap md:text-start md:px-10 md:p-0">
            My journey in the world of web development began with a fascination
            for the endless possibilities of the internet. I've honed my skills
            in HTML, CSS, JavaScript, React Js and Tailwind constantly pushing
            the boundaries of what's possible in the browser. I thrive on turning concepts
            into reality through clean, efficient code.
          </p>
          <p className="md:text-lg text-base lg:text-xl font-semibold flex flex-wrap md:text-start md:px-10 md:p-0 mt-6">
            I bring a collaborative spirit to every project. I understand the
            importance of effective communication and teamwork in delivering
            outstanding results.
          </p>

          <div className="flex flex-col md:flex-row items-center md:justify-start md:gap-x-10 sm:mx-10">
            <button className="bg-gradient-to-r from-purple-500 rounded-md to-pink-500 px-4 py-2 w-full sm:w-fit my-3 md:my-8 text-lg font-semibold text-white hover:text-blue-900">
              Main Skills
            </button>
            <button className="bg-gradient-to-r from-purple-500 rounded-md to-pink-500 px-4 py-2 w-full sm:w-fit  my-3 md:my-8 text-lg font-semibold text-white hover:text-blue-900">
              Education
            </button>
          </div>
          <p className="md:text-lg text-base lg:text-xl font-semibold flex flex-wrap text-center md:text-start sm:mx-10 px-10 md:p-0 text-gray-600 cursor-pointer my-4">
            Frontend Web Development
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
