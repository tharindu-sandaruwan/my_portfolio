import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import skillnet from '../Images/Skillnet.jpg'; // Make sure this path is correct

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform (Melkart Web App)",
    description: "A full-featured e-commerce platform built with SpringBoot,React,Mysql,Docker.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "SpringBoot", "Mysql", "Docker"],
    demoLink: "#",
    codeLink: "https://github.com/viduthranaweera2001/melkart-dev-api",
    category: "web", // This is a web project
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my work and skills. Built with React and styled with Tailwind CSS.",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoLink: "#",
    codeLink: "https://github.com/tharindu-sandaruwan/my_portfolio",
    category: "web", // This is a web project
  },
  {
    id: 3,
    title: "Agency Website",
    description: "A agency websites. Built with Springboot, Mysql, Docker,React.",
    image: "https://themewagon.com/wp-content/uploads/2022/09/screencapture-technext-github-io-tour-2022-09-22-11_14_20.png",
    tags: ["Springboot", "Mysql", "Docker", "React"], // Added React here as per description
    demoLink: "#",
    codeLink: "https://github.com/viduthranaweera2001/agency-web-api",
    category: "web", // This is a web project
  },
  {
    id: 4,
    title: "SkillNet",
    description: "A e-larning platform(Frontend). Built with React,TailwindCss,Vite",
    image: skillnet,
    tags: ["React", "Tailwind CSS", "Vite"],
    demoLink: "#",
    codeLink: "https://github.com/Mohamed-Inthisham/skillnet-frontend",
    category: "web", // This is a web project
  },
  // --- NEW APP PROJECT EXAMPLE ---
  // {
  //   id: 5, // Make sure IDs are unique
  //   title: "Mobile Task Manager",
  //   description: "A cross-platform mobile app for managing daily tasks. Built with React Native and Firebase.",
  //   image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800", // Example app image
  //   tags: ["React Native", "Firebase", "Expo"],
  //   demoLink: "#", // Link to app store or demo video
  //   codeLink: "https://github.com/yourusername/mobile-task-app", // Your GitHub link
  //   category: "app", // This is an app project
  // },
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

  // Minor fix for title underline animation: add 'group' to the h2
  return (
    <section ref={ref} id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="section-container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added section-container for consistent padding */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="space-y-12"
        >
          <motion.div variants={fadeIn} className="text-center">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white inline-block relative group"> {/* Added group and basic styling */}
              My Projects
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500 dark:bg-primary-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span> {/* Added origin-left */}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
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
              key={filter} // This key is important for AnimatePresence to detect changes
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id} // Ensure project.id is unique
                    variants={fadeIn}
                    // For staggered animation within the filtered list,
                    // you might need to wrap the map in another motion.div
                    // if the parent motion.div (with key={filter}) re-mounts entirely.
                    // However, with AnimatePresence and key on this div, it should be fine.
                    initial="hidden" // Apply variants directly for enter animation
                    animate="visible"
                    exit="hidden"    // Apply variants for exit animation
                    custom={index}  // If you use variants with dynamic delay
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden group" // Added some basic card styling
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
                          aria-label={`Demo for ${project.title}`}
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white text-gray-900 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
                          aria-label={`Code for ${project.title}`}
                        >
                          <FiGithub className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 text-sm"> {/* Adjusted text size */}
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
                ))
              ) : (
                // Optional: Message when a filter results in no projects
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-10 text-gray-500 dark:text-gray-400"
                >
                  <p>No projects found in this category yet.</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;