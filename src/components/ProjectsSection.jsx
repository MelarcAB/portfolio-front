function ProjectsSection({ projects }) {
    return (
        <section className="py-10 mt-10">
            <h2 className="text-2xl font-bold mb-10 text-center text-black dark:text-white">Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {projects.map(project => (
                    <div
                        key={project.slug}
                        className="flex flex-col space-y-6 bg-white bg-opacity-10 dark:bg-opacity-0 backdrop-blur-md rounded-xl p-6">

                        {/* Project Image */}
                        <div className="w-full h-52 overflow-hidden rounded shadow-lg">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="object-cover w-full h-full transform hover:scale-105 transition-transform"
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
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
