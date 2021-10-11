/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/Link";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import NoteImage from "/public/assets/notepad.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageField, setMessageField] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    const messageTimeout = setTimeout(() => {
      setValidationMessage("");
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validation = document.getElementById("validation-message");

    if (name === "" || messageField === "" || email === "") {
      validation.style.color = "red";
      setValidationMessage("Oops! looks like you missed some input fields");
    } else if (!email.includes("@") || !email.includes(".")) {
      validation.style.color = "red";
      setValidationMessage("your email seems a bit... sketchy");
    } else {
      postMessage();
      validation.style.color = "green";
      setName("");
      setEmail("");
      setMessageField("");
      setValidationMessage("Thanks! I will reply ASAP");
    }
  };

  return (
    <section
      className="container contact h-auto p-8 bg-gradient-to-r from-purple-50 to-purple-200"
      id="contact"
    >
      <div className="container lg:flex lg:w-4/5 lg:m-auto items-center justify-between bg-white rounded-3xl">
        <div className="container">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center mx-auto p-6 bg-white w-full md:w-3/4"
          >
            <h3 className="font-raleway text-4xl pb-4 font-semibold text-purple-500">
              Let's talk
            </h3>
            <p className="font-serif text-gray-500 pb-4 px-6">
              Want to grab some coffee and ponder the meaning of life with me?
              Fill out this form and i'll get back to you.
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
            <label htmlFor="name">Your Message:</label>
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
            <span id="validation-message" className="h-10 px-6">
              {validationMessage}
            </span>
          </form>
        </div>
        <div className="hidden container h-full lg:flex flex-col items-start justify-between space-y-16">
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
              blurDataURL="data:image/jpeg;base64,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"
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
                <FontAwesomeIcon icon={faLinkedin} size="4x" color="#0270ad" />
              </div>
            </a>
            <a
              href="https://github.com/MrXavi3r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon github">
                <FontAwesomeIcon icon={faGithub} size="4x" />
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
