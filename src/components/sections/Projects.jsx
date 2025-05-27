import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes payment processing, user authentication, and admin dashboard.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    demoLink: "#",
    codeLink: "#",
    category: "web",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my work and skills. Built with React and styled with Tailwind CSS.",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoLink: "#",
    codeLink: "#",
    category: "web",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A task management application with drag-and-drop functionality, user authentication, and real-time updates.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Firebase", "Tailwind CSS"],
    demoLink: "#",
    codeLink: "#",
    category: "app",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather and forecasts for multiple locations using the OpenWeatherMap API.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["JavaScript", "API", "CSS"],
    demoLink: "#",
    codeLink: "#",
    category: "app",
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A full-stack blog platform with user authentication, comment system, and markdown support.",
    image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Node.js", "MongoDB"],
    demoLink: "#",
    codeLink: "#",
    category: "web",
  },
  {
    id: 6,
    title: "Recipe Finder App",
    description: "A mobile-responsive recipe finder application that allows users to search for recipes by ingredients, diet, and cuisine type.",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "API", "Styled Components"],
    demoLink: "#",
    codeLink: "#",
    category: "app",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'app', label: 'App Development' },
  ];

  return (
    <section ref={ref} id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
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
              My Projects
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500 dark:bg-primary-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
              Explore my recent work and projects that showcase my skills and expertise.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="flex justify-center space-x-2 md:space-x-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category.id
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white text-gray-900 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white text-gray-900 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;