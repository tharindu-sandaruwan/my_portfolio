import { motion } from 'framer-motion';

const Loader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      }
    }
  };

  const dotVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5
      }
    },
    exit: {
      y: 20,
      opacity: 0
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="text-3xl md:text-4xl font-heading font-bold text-primary-600 dark:text-primary-400 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Welcome to Tharindu's Portfolio
      </motion.div>
      
      <div className="flex space-x-2">
        {[0, 1, 2].map((_, i) => (
          <motion.div
            key={i}
            variants={dotVariants}
            className="w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full"
            style={{
              transition: {
                delay: i * 0.2,
              },
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Loader;