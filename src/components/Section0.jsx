import photo from "../images/image.png";
const Section0 = () => {
  return (
    <div>
      <div className="md:flex md:justify-center gap-x-10 md:p-8 bg-blue-50 text-center relative box-border">
        <div className="flex-col items-center justify-center md:items-center md:justify-center md:w-1/2 font-Roboto p-2 md:text-start">
          <p className="md:text-4xl xl:text-6xl text-3xl font-bold text-blue-900 md:my-4 my-2">
            Hello, I am <br />
            <span className="text-fuchsia-500">Sachin Chauhan</span>
          </p>
          <p className="md:text-3xl xl:text-4xl font-bold text-2xl text-gray-600 md:my-3 my-2">
            Web Developer
          </p>
          <p className="md:text-lg text-base lg:text-xl font-semibold flex flex-wrap text-center md:text-start px-10 md:p-0">
            I'm a Web developer and I have Problem Solving Skill. I have
            knowledge of Database also. It's my portfolio website. Here you will
            learn about my Journey.
          </p>

          <button className="bg-gradient-to-r from-purple-500 rounded-md to-pink-500 px-4 py-2 my-3 md:mx-0 sm:mx-10 md:my-8 text-lg font-semibold text-white hover:text-blue-900 w-full sm:w-fit">
            Hire me
          </button>

          <button className="px-4 py-2 md:my-8 md:m-4 border-2 rounded-md bg-fuchsia-400 text-lg sm:mx-10 font-semibold text-white hover:text-blue-900 w-full sm:w-fit">
            Download CV
          </button>
        </div>

        <img
          src={photo}
          alt=""
          className="h-[350px] w-[350px] md:mx-10 m-auto rounded-[50%] box-border shadow-lg lg:shadow-2xl shadow-fuchsia-300 bg-yellow-300 hover:scale-110 duration-500 overflow-hidden text-center "
        />

        <p className="md:text-4xl xl:text-6xl font-bold text-slate-300 read-only font-Roboto absolute md:bottom-0 md:left-2 md:block hidden">
          SACHIN CHAUHAN
        </p>
      </div>
    </div>
  );
};
export default Section0;
