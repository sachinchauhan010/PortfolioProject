import { Gmail, Twitter, LinkedIn } from "../utils/icons";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <div>
        <section className="font-Roboto p-10 text-center bg-blue-50">
          <div className="container flex-col items-center justify-center">
            <h2 className="md:text-2xl lg:text-4xl text-xl font-semibold m-5 text-blue-800">
              Contact Me
            </h2>
            <h3 className="md:text-xl lg:text-2xl text-lg font-semibold text-gray-500">
              Questions, Thoughts, Or Just Want To Say Hello?
            </h3>

            <div className="lg:w-[50%] m-auto my-10 w-full">
              <form action="#" className="">
                <div className="my-4">
                  <input
                    className="formField w-full h-12 px-8 text-lg border-none rounded-md shadow-md bg-opacity-90 bg-white outline-none"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="my-4">
                  <input
                    className="formField w-full h-12 px-8 text-lg border-none rounded-md shadow-md bg-opacity-90 bg-white"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="my-4">
                  <input
                    className="formField w-full h-12 px-8 text-lg border-none rounded-md shadow-md bg-opacity-90 bg-white"
                    type="text"
                    placeholder="Enter your Subject address"
                  />
                </div>
                <div className="my-4">
                  <textarea
                    className="formField w-full px-8 pt-4 text-lg border-none rounded-md shadow-md bg-opacity-90 bg-white"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="formBtn">
                  <button
                    type="submit"
                    className="btn transition duration-500 border-none text-lg my-4 px-6 py-2 bg-red-600 rounded-full text-white hover:transform hover:scale-90"
                  >
                    Send Message
                    <i className="submit-icon fa-solid fa-paper-plane fa"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-blue-900 py-10 shadow-xl lg:w-[50%] m-auto my-10 w-full rounded-md">
            <h2 className="md:text-xl lg:text-2xl text-lg font-semibold text-gray-300">I am on Social</h2>
            <div className="flex flex-col justify-center pt-6 lg:pt-0 mt-10">
              <div className="flex justify-center gap-x-10 flex-row text-white">
                <Link
                  to="https://x.com/SACHINC28888156?t=TsUIVfVpJrlF18rNhnrOSQ&s=09"
                  target="_blank"
                >
                  {Twitter}
                </Link>
                <Link to="www.linkedin.com/in/sachinchauhan010" target="_blank">
                  {LinkedIn}
                </Link>
                <Link to="010sssachin@gmail.com" target="_blank">
                  {Gmail}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Contact;
