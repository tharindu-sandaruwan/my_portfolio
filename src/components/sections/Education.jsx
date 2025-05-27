import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen, FiAward } from 'react-icons/fi';

const educationData = [
  {
    id: 1,
    degree: "BSc. (Hons) in Information Technology",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    duration: "2021 - 2025",
    description: " Specializing in Information Technology with a focus on modern web technologies and user experience design.",
    icon: <FiAward />,
  },
  {
    id: 2,
    degree: "G.C.E. Advanced Level",
    institution: "TAXILA CENTRAL COLLAGE-HORANA ",
    duration: "2017 -2019",
    description: "",
    icon: <FiBookOpen />,
  },
  {
    id: 3,
    degree: "Dean’s List Certification (3rd Year 2nd Semester)",
    institution: "SLIIT",
    duration: "2023",
    description: "",
    icon: <FiAward />,
  }
];

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} id="education" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
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
              Education
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500 dark:bg-primary-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
              My academic journey and qualifications that have shaped my professional path.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary-500 dark:bg-primary-600 text-white flex items-center justify-center z-10">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="card p-6 hover:border-primary-500 transition-all duration-300 hover:shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.degree}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {item.institution}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {item.duration}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;