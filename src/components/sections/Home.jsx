import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll'; // This is react-scroll's Link
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';
// Import FaInstagram here
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import portfoliophoto from '../Images/dp.jpeg';

const Home = () => {
  const socialLinks = {
    github: 'https://github.com/tharindu-sandaruwan',
    linkedin: 'https://www.linkedin.com/in/tharindusandaruwan/',
    facebook: 'https://www.facebook.com/tharindusandaruwan13',
    instagram: 'https://www.instagram.com/tharindusandaruwan_/', 
  };

  return (
    // Add id="home" here
    <section
      id="home" // <<< --- ADD THIS ID
      className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white"
            >
              <span className="block">Tharindu Sandaruwan</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300"
            >
              <Typewriter
                options={{
                  strings: ['Full Stack Developer', 'UI/UX Designer', 'Web Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-600 dark:text-gray-400 max-w-lg"
            >
               Undergraduate Software Engineer at SLIIT specializing in
 Information Technology, with a passion for web and mobile development. Experienced in Agile methodologies, collaborative teamwork, and delivering innovative, efficient software solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex items-center space-x-5 pt-2"
            >
                   <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaLinkedin size={28} />
              </motion.a>

              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaFacebook size={28} />
              </motion.a>
              {/* Add Instagram Icon Here */}
              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaInstagram size={28} />
              </motion.a>
              <motion.a
                href={`mailto:${socialLinks.email}`} // Use mailto: for email links
                aria-label="Send an Email"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FiMail size={28} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link // This is react-scroll's Link
                to="projects" // This 'projects' id must exist on your projects section
                spy={true}
                smooth={true}
                offset={-70} // Adjust if you have a fixed header
                duration={700}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary"
                >
                  View My Work
                  <FiArrowRight className="ml-2" />
                </motion.button>
              </Link>

              <motion.a
                href="/resume.pdf" // Make sure resume.pdf is in your public folder
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline dark:text-white"
              >
                Download CV
                <FiDownload className="ml-2" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative z-10">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
              >
                <img
                  src={portfoliophoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[350px] max-h-[350px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full rounded-full border-2 border-dashed border-primary-500/30 dark:border-primary-400/30"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;