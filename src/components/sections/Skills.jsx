import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiLayers, FiLayout, FiTool } from 'react-icons/fi';

const skillsData = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <FiLayout />,
    skills: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
    ],
    color: 'primary',
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: <FiCode />,
    skills: [
      { name: 'Java', level: 80 },
      { name: 'Springboot', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'MongoDB', level: 78 },
      { name: 'SQL', level: 70 },
    ],
    color: 'secondary',
  },
  // {
  //   id: 'design',
  //   title: 'Design',
  //   icon: <FiLayers />,
  //   skills: [
  //     { name: 'Figma', level: 88 },
  //     { name: 'Adobe XD', level: 85 },
  //     { name: 'UI/UX', level: 90 },
  //     { name: 'Responsive Design', level: 92 },
  //     { name: 'Graphic Design', level: 75 },
  //   ],
  //   color: 'accent',
  // },
  {
    id: 'tools',
    title: 'Tools & Others',
    icon: <FiTool />,
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'Webpack/Vite', level: 80 },
      { name: 'Testing (Jacoco,SonarQube)', level: 75 },
      // { name: 'CI/CD', level: 72 },
    ],
    color: 'Tertiary ',
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} id="skills" className="py-16 md:py-24 bg-white dark:bg-gray-900">
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
              My Skills
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500 dark:bg-primary-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
              A comprehensive showcase of my technical expertise and professional capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="card p-6 hover:shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-md text-white bg-${category.color}-500`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-2.5 rounded-full bg-${category.color}-500`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;