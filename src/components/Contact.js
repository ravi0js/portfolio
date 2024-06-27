import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import educationData from './assets/education.json'; // Import the JSON data

const Contact = () => {
  const [errors, setErrors] = useState({});
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const serviceID = "service_fylb2yx";
    const templateID = "template_1wnp15j";
    const publicKey = "sLD9ebDDnBEccLuT2";

    emailjs.sendForm(serviceID, templateID, form, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Form submitted successfully!', {
          position: 'top-center'
        });
        form.reset(); // Reset form fields
        setErrors({});
      }, (err) => {
        console.log('FAILED...', err);
        toast.error('Failed to send message. Please try again later.', {
          position: 'top-center'
        });
      });
  };

  return (
    <section className="bg-blue-50 dark:bg-slate-800" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-2 lg:py-10">
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="mt-4">
              <h2 className="my-4 text-2xl font-bold text-center dark:text-white">Education</h2>
              {educationData.map((edu, index) => (
                <div key={index} className="mt-4">
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-sm">{edu.duration}</p>
                  <p className="text-sm">{edu.institution}</p>
                  <p className="text-sm">{edu.grade}</p>
                  <hr />
                </div>
              ))}
            </div>
            <div className="card h-fit max-w-9xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-white">Are you Ready to connect? </h2>
              <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider">Name</label>
                    <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider">Email</label>
                    <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <label htmlFor="message" className="pb-1 text-xs uppercase tracking-wider">Message</label>
                  <textarea id="message" name="message" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
