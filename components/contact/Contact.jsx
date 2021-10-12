/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import NoteImage from "/public/assets/notepad.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageField, setMessageField] = useState("");
  const [validationMessage, setValidationMessage] = useState({
    status: "",
    message: "",
  });

  useEffect(() => {
    const messageTimeout = setTimeout(() => {
      setValidationMessage({ status: "", message: "" });
    }, 5000);
    return () => clearTimeout(messageTimeout);
  }, [validationMessage]);

  const postMessage = async () => {
    const response = await axios.post("https://formspree.io/f/xwkrywaq", {
      name,
      email,
      messageField,
    });

    console.log(response);

    if (response.status === 200) {
      setValidationMessage({
        status: "success",
        message: "Thanks, I will reply ASAP :)",
      });
    } else {
      setValidationMessage({
        status: "error",
        message: "server error, please try again",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || messageField === "" || email === "") {
      setValidationMessage({
        status: "error",
        message: "Oops, looks like you've missed some input fields",
      });
    } else if (!email.includes("@") || !email.includes(".")) {
      setValidationMessage({
        status: "error",
        message: "your email seems a bit... sketchy",
      });
    } else {
      postMessage();
      setName("");
      setEmail("");
      setMessageField("");
    }
  };

  return (
    <section
      className="container contact h-auto p-8 bg-gradient-to-r from-purple-50 to-purple-200"
      id="contact"
    >
      <div className="container lg:flex lg:m-auto items-center justify-between bg-white rounded-3xl">
        <div className="container">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center mx-auto p-6 bg-white w-full md:w-3/4 lg:w-5/6 rounded-2xl"
          >
            <h3 className="lg:pl-10 font-raleway text-4xl pb-4 font-semibold text-purple-500">
              Let's talk
            </h3>
            <p className="font-serif text-center text-gray-500 pb-4 pl-10 ">
              Want to grab some coffee and ponder the meaning of life with me?
              Fill out this form to send me a message.
            </p>
            <label htmlFor="name" className="">
              Your Name:
            </label>
            <input
              type="text"
              placeholder="Thomas A Anderson"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4 p-2 w-4/5 bg-purple-50 rounded-xl focus-within:text-gray-600"
            />
            <label htmlFor="name" className="">
              Your Email:
            </label>
            <input
              type="email"
              placeholder="Neo@metacortex.net"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 p-2 w-4/5 bg-purple-50 rounded-xl focus-within:text-gray-600"
            />
            <label htmlFor="name" className="">
              Your Message:
            </label>
            <textarea
              placeholder="X! follow the white rabbit..."
              name="message"
              id="message-field"
              value={messageField}
              onChange={(e) => setMessageField(e.target.value)}
              className="h-36 p-3 w-4/5 bg-purple-50 rounded-xl focus-within:text-gray-600"
            ></textarea>
            <button
              type="submit"
              className="rounded-3xl w-4/5 p-3 mt-8 my-4 bg-purple-400 text-white text-xl font-raleway transition-all ease duration-400"
              id="submit-btn"
            >
              Send Message
            </button>
            <span
              id="validation-message"
              className={`h-10 px-6 ${
                validationMessage.status === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {validationMessage.message}
            </span>
          </form>
        </div>
        <div className="hidden container h-full lg:flex flex-col items-start justify-between space-y-24 xl:space-y-8">
          <div className="w-full mx-auto flex items-start justify-center rounded-xl">
            <Image
              src={NoteImage}
              alt="notepad"
              objectFit="contain"
              height="400"
              width="600"
              // layout="fill"
              quality="100"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMUrAcAAKcAkqLcIOsAAAAASUVORK5CYII="
            />
          </div>

          {/* <div className="meta-container flex flex-col items-center mx-auto">
            <span className="meta">
              <i className="fas fa-map-marker-alt"></i> Miami, Fl, USA
              <br />
            </span>
            <br />
            <span className="meta">xritch89@hotmail.com</span>
          </div> */}
          <div className="container w-3/6 flex items-center justify-around mx-auto">
            <a
              href="https://www.linkedin.com/in/xavier-ritch-254238145/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon linkedin">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="4x"
                  color="#0270ad"
                  className="hover:animate-bounce"
                />
              </div>
            </a>
            <a
              href="https://github.com/MrXavi3r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon github">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="4x"
                  className="hover:animate-bounce"
                />
              </div>
            </a>
            <a
              href="https://stackoverflow.com/users/12309575/xavi3r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon stack-o">
                <FontAwesomeIcon
                  icon={faStackOverflow}
                  size="4x"
                  color="#ee7c24"
                  className="hover:animate-bounce"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
