import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin,  FiFacebook, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/tharindu-sandaruwan', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/tharindusandaruwan/', label: 'LinkedIn' },
    { icon: <FiFacebook />, href: 'https://www.facebook.com/tharindusandaruwan13', label: 'facebook' },
    { icon: <FiMail />, href: 'tharindusandaruwan011@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} My Portfolio. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label={link.label}
              >
                <span className="text-xl">{link.icon}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;