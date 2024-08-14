import { Gmail, Twitter, LinkedIn } from "../utils/icons";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ri7h3pr", "template_jjgrli9", form.current, {
        publicKey: "z0eFejMA2I3fdToog",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log(form);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(!showSuccessPopup);
  };

  return (
    <>
        <section className="font-Roboto px-2 py-6 sm:p-10 text-center bg-gray-900 text-white">
          <div className="container flex-col items-center justify-center relative">
            {showSuccessPopup && (
              <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center">
                <div className="bg-white w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg p-8">
                  <div className="text-center">
                    <svg
                      className="h-12 w-12 text-green-500 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 6.586V13a1 1 0 11-2 0V6.586z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h2 className="text-lg font-semibold mt-4">Success!</h2>
                    <p className="text-gray-700 mt-2">
                      Your email has been sent successfully.
                    </p>
                    <button
                      onClick={closeSuccessPopup}
                      className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600"
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            )}

            <h2 className="md:text-2xl lg:text-4xl text-xl font-semibold m-5">
              Contact Me
            </h2>
            <h3 className="md:text-xl lg:text-2xl text-lg font-normal text-start md:text-center">
              Questions, Thoughts, Or Just Want To Say Hello?
            </h3>

            <div className="lg:w-[50%] m-auto my-10 w-full">
              <form action="#" className="" ref={form} onSubmit={sendEmail}>
                <div className="my-4">
                  <input
                    className="formField w-full h-12 px-8 text-lg rounded-md shadow-md bg-opacity-90 bg-gray-700 outline-none"
                    type="text"
                    placeholder="Enter your name"
                    name="to_name"
                  />
                </div>
                <div className="my-4">
                  <input
                    className="formField w-full h-12 px-8 text-lg rounded-md shadow-md bg-opacity-90 bg-gray-700 outline-none"
                    type="email"
                    placeholder="Enter your email address"
                    name="from_name"
                  />
                </div>
                <div className="my-4">
                  <textarea
                    className="formField w-full px-8 pt-4 text-lg rounded-md shadow-md bg-opacity-90 bg-gray-700 outline-none"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <input
                  type="submit"
                  value="Send Message"
                  className="btn cursor-pointer transition duration-500 border-none text-lg my-4 px-6 py-2 bg-primary rounded-full text-white hover:transform hover:scale-110 hover:bg-gray-700 hover:text-gray-50"
                  onClick={closeSuccessPopup}
                />
              </form>
            </div>
          </div>

        </section>
    </>
  );
};
export default Contact;
