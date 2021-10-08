/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/Link";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import NoteImage from "../../public/assets/10720.jpg";

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
      <div className="container">
        <div className="container">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center rounded-2xl p-6 bg-white w-full"
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
        <div className="right hidden container">
          <Image
            src={NoteImage}
            alt="notepad"
            width="100"
            height="100"
            objectFit="cover"
          />
          <div className="meta-container">
            <span className="meta">
              <i className="fas fa-map-marker-alt"></i> Miami, Fl, USA
              <br />
            </span>
            <br />
            <span className="meta">
              <i className="fas fa-envelope"></i> xritch89@hotmail.com
            </span>
          </div>
          <div className="icon-container">
            <a
              href="https://www.linkedin.com/in/xavier-ritch-254238145/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon linkedin">
                <i className="fab fa-linkedin"></i>
              </div>
            </a>
            <a
              href="https://github.com/MrXavi3r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon github">
                <i className="fab fa-github"></i>
              </div>
            </a>
            <a
              href="https://stackoverflow.com/users/12309575/xavi3r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon stack-o">
                <i className="fab fa-stack-overflow"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
