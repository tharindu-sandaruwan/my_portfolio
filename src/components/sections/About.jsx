import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiCalendar, FiMapPin, FiMail } from 'react-icons/fi';
import aboutMe from '../Images/aboutme.jpg'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
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
            <h2 className="section-title inline-block relative">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500 dark:bg-primary-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
              Get to know more about me, my background, and what drives me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={fadeIn} className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-105 duration-300">
                <img 
                  src={aboutMe}
                  alt="About Me" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-primary-500 dark:bg-primary-600 rounded-lg z-0"></div>
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-secondary-500 dark:bg-secondary-600 rounded-lg z-0"></div>
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-6">
              <h3 className="section-subtitle">
                My Journey
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300">
                I am a passionate web developer with a strong focus on creating beautiful, functional, and user-centered digital experiences. With a background in both design and development, I bring a unique perspective to every project.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300">
                My approach to design is minimalistic yet impactful, focusing on clean aesthetics and intuitive user experiences. I believe in the power of simplicity and strive to create websites that are not only visually appealing but also highly functional and accessible.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <FiUser className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</p>
                    <p className="font-medium">Tharindu Sandaruwan</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <FiCalendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Experience</p>
                    <p className="font-medium">2 Years</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <FiMapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium">Colombo, SL</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <FiMail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium">tharindusandaruwan011@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;