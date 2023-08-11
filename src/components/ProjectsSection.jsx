import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ProjectCard({ project }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const popAnimation = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    };

    if (inView) {
        controls.start("visible");
    }


    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={popAnimation}
            key={project.slug}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            whileFocus={{ scale: 1.03, transition: { duration: 0.3 } }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg relative"
        >
            {/* Project Image in Circle */}
            <div className="w-56 h-56 mx-auto relative mb-5 overflow-hidden rounded-full shadow-md">
                <motion.img
                    src={project.image}
                    alt={project.name}
                    className="absolute top-50 left-50 transform -translate-x-50% -translate-y-50% w-full h-auto"
                />
            </div>

            {/* Project Info */}
            <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold mb-2 dark:text-white">
                    <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="hover:underline">{project.name}</a>
                </h3>
                <p className="text-sm text-gray-500 mb-4 dark:text-gray-300">{project.description}</p>

                {/* Project Labels */}
                <div className="flex flex-wrap justify-center mb-4">
                    {project.labels.map((label) => (
                        <span
                            key={label.name}
                            className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-full m-1 hover:bg-indigo-600 transition-colors"
                        >
                            {label.name}
                        </span>
                    ))}
                </div>

                {/* Project Buttons */}
                <div className="flex space-x-4 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
                    >
                        <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                            Ver Demo
                        </a>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="py-2 px-4 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
                    >
                        <a href={project.git_url} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}



function ProjectsSection({ projects }) {
    return (
        <section className="py-10 mt-10">
            {/*... Header unchanged ...*/}

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-24 px-4 sm:px-0"
            >
                {projects.map(project => <ProjectCard project={project} key={project.slug} />)}
            </motion.div>
        </section>
    );
}

export default ProjectsSection;
