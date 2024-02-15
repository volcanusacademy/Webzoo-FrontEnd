import React, { useContext, useState } from "react";
import addressImg from "../assets/address.svg";
import phoneImg from "../assets/phone.svg";
import clockImg from "../assets/clock.svg";
import Footer from "./Footer";
import { AppContext } from "../Context/AppContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = useContext(AppContext);
  const isValidEmail = (email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Before registering:", { name, email, subject, message });
    const registerRes = await data.register({ name, email, subject, message });
    console.log("After successful registration");
    toast.success(registerRes.message, {
      position: "top-center",
      autoClose: 2999,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <ToastContainer />
      <div
        id="contact"
        className="mx-auto container rounded-xl w-full md:w-[100%] text-white"
      >
        <div className="text-center m-8 pb-9">
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-4xl mt-10 text-primary font-bold m-3"
          >
            Get In Touch With Us
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 w-[90%] mx-auto">
          <div className="w-full col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="mb-10 flex flex-col lg:flex-row gap-2 justify-center">
                <div className="w-full lg:w-1/2">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-b-2 border-t-0 border-r-0 border-l-0 bg-transparent outline-none"
                    placeholder="Enter name"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  />
                </div>
                <div className="relative w-full my-10 lg:my-0 lg:w-1/2">
                  <input
                    type="email"
                    className={`w-full border-b-2 border-t-0 border-r-0 border-l-0 bg-transparent outline-none ${
                      !isValidEmail(email) && email.length > 0
                        ? "border-red-500"
                        : ""
                    }`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                  {!isValidEmail(email) && email.length > 0 && (
                    <p className="text-red-500  text-sm mt-1 absolute left-0 top-7">
                      Please enter a valid email address
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-10">
                <input
                  type="text"
                  className="w-full border-b-2 border-t-0 border-r-0 border-l-0 bg-transparent outline-none"
                  placeholder="Enter subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full border-b-2 border-t-0 border-r-0 border-l-0 bg-transparent outline-none"
                  placeholder="Enter message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="30"
                  rows="4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                ></textarea>
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="bg-primary p-3 w-80  rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col md:flex-row  "
          >
            <div className="">
              <div className=" p-4 flex items-center">
                <img src={addressImg} alt="" className="mr-4" />
                <div className="border-l-2 pl-4">
                  <strong>Address</strong>
                  <p>Bellevue, USA</p>
                </div>
              </div>

              <div className=" p-4 flex items-center">
                <img src={phoneImg} alt="" className="mr-4 -ml-2" />
                <div className="border-l-2 pl-4">
                  <strong>Phone</strong>
                  <p>+1-206 717 5141</p>
                </div>
              </div>
              <div className=" p-4 flex items-center">
                <img src={clockImg} alt="" className="mr-4" />
                <div className="border-l-2 pl-4">
                  <strong>Working time</strong>
                  <p>support@torquevision.ai</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
