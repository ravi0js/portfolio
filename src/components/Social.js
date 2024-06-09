import React from 'react';
import { FaLinkedinIn, FaGithub, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
// import data from './assets/data.json'; // Importing data from data.json

const Social = () => {
  // const { linkedin, github, phone, email, whatsapp } = data[1]; // Destructuring social links from data
  const socialLinks = [
    // {
    //   "href": "https://facebook.com",
    //   "icon": "FaFacebookF",
    //   "bgColor": "bg-blue-600",
    //   "hoverColor": "hover:bg-blue-700"
    // },
    // {
    //   "href": "https://twitter.com",
    //   "icon": "FaTwitter",
    //   "bgColor": "bg-blue-400",
    //   "hoverColor": "hover:bg-blue-500"
    // },
    {
      "href": "https://linkedin.com",
      "icon": "FaLinkedinIn",
      "bgColor": "bg-blue-700",
      "hoverColor": "hover:bg-blue-800"
    },
    {
      "href": "https://github.com",
      "icon": "FaGithub",
      "bgColor": "bg-gray-800",
      "hoverColor": "hover:bg-gray-900"
    },
    {
      "href": "tel:+1234567890",
      "icon": "FaPhoneAlt",
      "bgColor": "bg-green-600",
      "hoverColor": "hover:bg-green-700"
    },
    {
      "href": "mailto:example@example.com",
      "icon": "FaEnvelope",
      "bgColor": "bg-red-600",
      "hoverColor": "hover:bg-red-700"
    },
    {
      "href": "https://wa.me/1234567890",
      "icon": "FaWhatsapp",
      "bgColor": "bg-green-500",
      "hoverColor": "hover:bg-green-600"
    }
  ];
  const icons = {
    // FaFacebookF: <FaFacebookF size={24} />,
    // FaTwitter: <FaTwitter size={24} />,
    FaLinkedinIn: <FaLinkedinIn size={24} />,
    FaGithub: <FaGithub size={24} />,
    FaPhoneAlt: <FaPhoneAlt size={24} />,
    FaEnvelope: <FaEnvelope size={24} />,
    FaWhatsapp: <FaWhatsapp size={24} />,
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