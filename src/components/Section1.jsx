import photo from "../images/image.png";
const Section1 = () => {
  return (
    <>
      <div className="flex justify-center items-center p-10 bg-fuchsia-100 md:gap-x-10 text-center md:text-start font-Roboto">
        <img
          src={photo}
          alt=""
          className="object-contain hidden md:block w-[280px] sm:ml-auto sm:mr-auto md:mx-10 p-2 rounded-md shadow-lg lg:shadow-2xl shadow-fuchsia-300 m-6 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        />
        <div className="flex-col flex-wrap px-10">
          <p className="md:text-3xl xl:text-5xl text-2xl font-bold text-blue-900 md:my-4 my-2">
            Frontend Web Developer
          </p>
          <p className="md:text-lg text-base lg:text-xl font-semibold flex flex-wrap text-center md:text-start px-10 md:p-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            accusamus rem, error quod perspiciatis exercitationem, consequatur
            reprehenderit fugit harum ipsa quas accusantium. Quis quo
            dignissimos modi voluptatibus, culpa quae id.
          </p>
          <div className="flex md:justify-start justify-around gap-x-10">
            <button className="bg-gradient-to-r from-purple-500 rounded-md to-pink-500 px-4 py-2 my-3 md:my-8 text-lg font-semibold text-white hover:text-blue-900 text-center">
              Main Skills
            </button>
            <button className="bg-gradient-to-r from-purple-500 rounded-md to-pink-500 px-4 py-2 my-3 md:my-8 text-lg font-semibold text-white hover:text-blue-900 text-center">
              Education
            </button>
          </div>
          <p className="md:text-lg text-base lg:text-xl font-semibold flex flex-wrap text-center md:text-start px-10 md:p-0 text-gray-600 cursor-pointer my-4">Web Development</p>
          <p className="md:text-lg text-base lg:text-xl font-semibold flex flex-wrap text-center md:text-start px-10 md:p-0 text-gray-600 cursor-pointer my-4">Problem Solving</p>
        </div>
      </div>
    </>
  );
};
export default Section1;
