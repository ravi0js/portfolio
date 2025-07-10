import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaDribbble } from 'react-icons/fa'
import emailjs from 'emailjs-com'


const iconMap = {
  github: <FaGithub className="w-6 h-6" />,
  twitter: <FaTwitter className="w-6 h-6" />,
  linkedin: <FaLinkedin className="w-6 h-6" />,
  dribbble: <FaDribbble className="w-6 h-6" />
}

const Contact = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs.send(
      'service_8wtgk5h',
      'template_1wnp15j',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      'sLD9ebDDnBEccLuT2'
    ).then(
      () => {
        setSubmitMessage('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
        setIsSubmitting(false)
        setTimeout(() => setSubmitMessage(''), 5000)
      },
      (error) => {
        setSubmitMessage('Something went wrong. Please try again.')
        setIsSubmitting(false)
        console.error(error)
        setTimeout(() => setSubmitMessage(''), 5000)
      }
    )
  }
  return (
    <section className="min-h-screen py-20 flex items-center bg-gray-800 bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-200">Contact Information</h3>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 hover:text-pink-400"
                >
                  <div className="p-3 bg-gray-700 rounded-lg text-pink-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-400">Email</h4>
                    <p className="text-gray-300">{profile.email}</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${profile.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 hover:text-pink-400"
                >
                  <div className="p-3 bg-gray-700 rounded-lg text-pink-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-400">Phone</h4>
                    <p className="text-gray-300">{profile.phone}</p>
                  </div>
                </a>
      {/* WhatsApp */}
<a
  href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-start space-x-4 hover:text-pink-400"
>
  <div className="p-3 bg-gray-700 rounded-lg text-pink-400">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 23 23"
      stroke="currentColor"
    >
      {/* Enlarged outer circle */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 12a10 10 0 10-10 10 9.95 9.95 0 006-2l3 1-1-3a9.95 9.95 0 002-6z" />
      {/* Phone wave inside */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.72 13.06c-.3-.15-1.78-.88-2.06-.98s-.48-.15-.68.15-.78.98-.96 1.18-.36.23-.66.08a6.5 6.5 0 01-1.9-1.17 7.31 7.31 0 01-1.35-1.65c-.14-.23 0-.5.1-.64.11-.14.24-.3.36-.45.11-.15.15-.26.23-.43s.03-.33-.01-.48c-.04-.15-.68-1.63-.94-2.23-.25-.6-.5-.52-.68-.53s-.38-.01-.6-.01a1.17 1.17 0 00-.85.4c-.3.33-1.14 1.12-1.14 2.74s1.17 3.18 1.33 3.4c.16.22 2.3 3.5 5.59 4.91 2.28.98 3.15 1.07 3.87.9.59-.13 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35z"
      />
    </svg>
  </div>
  <div>
    <h4 className="text-gray-400">WhatsApp</h4>
    <p className="text-gray-300">{profile.phone}</p>
  </div>
</a>

                {/* Location */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 hover:text-pink-400"
                >
                  <div className="p-3 bg-gray-700 rounded-lg text-pink-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-400">Location</h4>
                    <p className="text-gray-300">{profile.location}</p>
                  </div>
                </a>

               
              </div>

              {/* Follow Me section */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-200">Follow Me</h4>
                <div className="flex space-x-4">
                  {profile.socialLinks.map((social) => (
                    iconMap[social.name] && (
                      <motion.a
                        key={social.name}
                        whileHover={{ y: -5 }}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-700 rounded-lg text-gray-300 hover:text-pink-400 transition-colors"
                      >
                        {iconMap[social.name]}
                      </motion.a>
                    )
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-200"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-200"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-200"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </motion.button>

              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-900 bg-opacity-30 text-green-400 rounded-lg text-center"
                >
                  {submitMessage}
                </motion.div>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
