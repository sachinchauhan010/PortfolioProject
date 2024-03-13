import { Twitter, Gmail, LinkedIn, Insta } from "../utils/icons";
import { contactImg } from "../utils/Data";
const Section2 = () => {
  return (
    <>
      <div className="flex justify-center items-center m-10 gap-x-20 shadow-2xl">
        <div>
          <p className="md:text-2xl xl:text-3xl text-xl font-bold text-blue-900 md:my-4 my-2">
            Get In Touch
          </p>
          <p className="md:text-3xl xl:text-4xl font-bold text-2xl text-gray-600 md:my-3 my-2">
            Have a Project in Your Mind
          </p>

          <div className="text-blue-500 flex justify-center items-center gap-x-10">
          <button className="bg-gradient-to-r from-purple-500 rounded-md to-pink-500 px-4 py-2 my-3 md:my-8 text-lg font-semibold text-white hover:text-blue-900 text-center">
            Contact me
          </button>
            <p>{Twitter}</p>
            <p>{Gmail}</p>
            <p>{LinkedIn}</p>
            <p>{Insta}</p>
          </div>
        </div>
        <div>
          <img src={contactImg} alt="" />
        </div>
      </div>
    </>
  );
};
export default Section2;
