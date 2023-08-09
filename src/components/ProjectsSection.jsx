import { motion } from "framer-motion"

function ProjectsSection({ projects }) {
    return (
        <section className="py-8 mt-8 dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-8 text-center text-black dark:text-white">Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map(project => (
                    <motion.div
                        key={project.slug}
                        whileHover={{ scale: 1.05, y: -10 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex space-x-4 bg-white bg-opacity-10 dark:bg-opacity-10 backdrop-blur-md dark:bg-gray-700 rounded-xl p-4">

                        {/* Project Image */}
                        <div className="w-24 h-24 overflow-hidden rounded-full shadow-lg">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Project Info */}
                        <div>
                            <h3 className="text-xl font-bold text-black dark:text-white">{project.name}</h3>
                            <p className="text-gray-500 dark:text-gray-300 my-2">{project.description}</p>
                            <a
                                href={project.demo_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 dark:text-blue-300 hover:text-blue-500 hover:underline"
                            >
                                View Demo
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
