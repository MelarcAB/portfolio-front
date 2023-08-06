import { BriefcaseIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid';

function AboutMe({ portfolio }) {
    if (!portfolio) return null;

    return (
        <section className="py-8 bg-gray-800 rounded-xl shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>

            <div className="flex items-center space-x-2 mb-4">
                <BriefcaseIcon className="h-6 w-6 text-blue-400" />
                <p className="text-gray-300">
                    Job:
                    <span className="font-semibold ml-1">{portfolio.job_title}</span>
                </p>
            </div>

            <div className="flex items-center space-x-2">
                <BuildingOfficeIcon className="h-6 w-6 text-gray-400" />
                <p className="text-gray-300">
                    at
                    <a href={portfolio.current_company_website} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-400 hover:text-blue-500 ml-1">
                        {portfolio.current_company}
                    </a>
                </p>
            </div>
        </section>
    );
}

export default AboutMe;
