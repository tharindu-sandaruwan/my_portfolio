import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', // User's email, can be used for Reply-To
    subject: '',
    message: '',
  });
  // isSubmitting and submitted states are less relevant here,
  // as the actual sending happens in the user's email client.
  // You might still want them for UI feedback before redirecting.

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You could briefly show a "Preparing your email..." message if desired
    // setIsSubmitting(true);

    const recipientEmail = "tharindusandaruwan011@gmail.com";
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Construct the mailto link
    // Adding formData.email to CC or Reply-To can be useful if your mail client supports it well
    // However, Reply-To is not reliably supported across all mailto implementations.
    // A common practice is to include the sender's email in the body.
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Optional: Reset form after a short delay, assuming they'll navigate away
    // setTimeout(() => {
    //   setFormData({ name: '', email: '', subject: '', message: '' });
    //   setIsSubmitting(false);
    //   // The "submitted" state is tricky here because you don't know if they actually sent it.
    // }, 500);
  };


  const contactInfo = [
    {
      icon: <FiMapPin className="w-5 h-5" />,
      title: "Location",
      info: "Colombo, SL",
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      title: "Phone",
      info: "+94 77 894 4327",
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      title: "Email",
      info: "tharindusandaruwan011@gmail.com",
    },
    {
      icon: <FiClock className="w-5 h-5" />,
      title: "Working Hours",
      info: "Mon - Fri: 9AM - 5PM",
    },
  ];

  return (
    <section ref={ref} id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="space-y-12"
        >
          <motion.div variants={fadeIn} className="text-center">
            <h2 className="section-title inline-block relative group">
              Contact Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500 dark:bg-primary-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div variants={fadeIn} className="lg:col-span-1 space-y-6">
              <h3 className="section-subtitle">
                Get In Touch
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don't hesitate to use the form.
              </p>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-primary-50 dark:bg-gray-800 rounded-md text-primary-600 dark:text-primary-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="lg:col-span-2">
              <div className="card p-6 md:p-8">
                {/* 
                  The "submitted" success message isn't really applicable here 
                  as you don't know if the user actually sent the email.
                  You might want to remove this part or change its message.
                */}
                {/* {submitted ? ( ... ) : ( ... ) } */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white resize-none"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-primary w-full"
                    // disabled={isSubmitting} // Might not need this in the same way
                  >
                    {/* {isSubmitting ? "Preparing..." : "Open Email Client"} */}
                    <span className="flex items-center justify-center">
                      Open in Email App <FiSend className="ml-2" />
                    </span>
                  </motion.button>
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400 pt-2">
                    This will open your default email application to send the message.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;