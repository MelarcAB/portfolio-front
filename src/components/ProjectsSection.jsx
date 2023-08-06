function ProjectsSection({ projects }) {
    return (
        <section className="py-8 bg-gray-800 rounded-xl shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-bold mb-8 text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(project => (
                    <div
                        key={project.slug}
                        className="border border-gray-700 rounded-lg p-4 transition transform hover:shadow-xl hover:scale-105">

                        <img
                            src={project.image}
                            alt={project.name}
                            className="mb-4 rounded w-full h-48 object-cover shadow-md hover:shadow-lg"
                        />

                        <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                        <p className="text-gray-400 mb-3">{project.description}</p>
                        <a
                            href={project.demo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-500 hover:underline transition"
                        >
                            View Demo
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
