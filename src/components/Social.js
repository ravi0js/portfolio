import React from 'react';
import {
  FaHackerrank,
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
// import data from './assets/data.json'; // Importing data from data.json

const Social = () => {
  // const { linkedin, github, phone, email, whatsapp } = data[1]; // Destructuring social links from data
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/ravi-kumar-378a481a4/",
      icon: "FaLinkedinIn",
      bgColor: "bg-blue-700",
      hoverColor: "hover:bg-blue-800",
    },
    {
      href: "https://github.com/ravi0js",
      icon: "FaGithub",
      bgColor: "bg-gray-800",
      hoverColor: "hover:bg-gray-900",
    },
    {
      href: "tel:+918873194455",
      icon: "FaPhoneAlt",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
    },
    {
      href: "mailto:ravi194455@gmail.com",
      icon: "FaEnvelope",
      bgColor: "bg-red-600",
      hoverColor: "hover:bg-red-700",
    },
    {
      href: "https://wa.me/8873194455",
      icon: "FaWhatsapp",
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      href: "https://www.hackerrank.com/profile/ravi194455",
      icon: "FaHackerrank",
      bgColor: "bg-black",
      hoverColor: "hover:bg-blue-800",
    },
  ];
  const icons = {
    // FaFacebookF: <FaFacebookF size={24} />,
    // FaTwitter: <FaTwitter size={24} />,
    FaLinkedinIn: <FaLinkedinIn size={24} />,
    FaGithub: <FaGithub size={24} />,
    FaPhoneAlt: <FaPhoneAlt size={24} />,
    FaEnvelope: <FaEnvelope size={24} />,
    FaWhatsapp: <FaWhatsapp size={24} />,
    FaHackerrank: <FaHackerrank size={24} />
  };

  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col space-y-4 p-2 z-20">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white p-2 rounded-full ${link.bgColor} ${link.hoverColor} transition-all duration-300 ease-in-out transform hover:scale-110`}
        >
          {icons[link.icon]}
        </a>
      ))}
    </div>




  );
};

export default Social;




// const serviceID = 'service_ifxt112';
// const templateID = 'template_h4wnp0j';
// const publicKey = 'yRY04KccvDwUxLAEO';