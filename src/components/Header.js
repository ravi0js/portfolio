import React, { useState } from "react";
import Modal from "react-modal";
import ProfilePic from "./assets/images/PROFILE-1.png";
import ProfileBackground from "./assets/images/Profile-Back-1.png";
import resumeFile from "./assets/Resume/MyResume.pdf";
import data from "./assets/data.json";
import "../components/assets/css/Header.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    borderRadius: "10px",
    zIndex: "1000"
  },
};

Modal.setAppElement("#root");

function Header() {
  const { name, bio } = data;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="">
      <section>
        <div
          className="bg-cover bg-center bg-no-repeat h-full"
          style={{ backgroundImage: `url(${ProfileBackground})` }}
        >
          <div className="main p-16 flex w-full gap-8">
            <div className="Intro bg-blue-900 rounded-3xl p-5 animatedSlideIn">
              <h1 className="text-blue-100 font-extrabold text-3xl underline animatedFadeIn">
                {name}
              </h1>
              <p className="Bio pt-4 text-wrap text-white animatedFadeIn">
                {bio}
              </p>
              <div className="mt-4">
                <button
                  onClick={openModal}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animatedZoomIn"
                >
                  View Resume
                </button>
              </div>
              <div className="SocialMedia">
                {/* Render social media icons or links here */}
              </div>
            </div>
            <div className="right-0 animatedZoomIn">
              <img
                src={ProfilePic}
                alt="Profile"
                className="w-80 rounded-full border border-gray-200 shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Resume Modal"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Resume</h2>
          <button onClick={closeModal} className="text-red-500">
            Close
          </button>
        </div>
        <iframe
          src={resumeFile}
          title="Resume"
          className="w-full h-full"
        ></iframe>
      </Modal>
    </div>
  );
}

export default Header;
