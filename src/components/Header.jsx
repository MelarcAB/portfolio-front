import { EnvelopeIcon, BuildingOfficeIcon, BriefcaseIcon, UserCircleIcon } from '@heroicons/react/24/solid';

function Header({ portfolio }) {
    if (!portfolio) return null;

    return (
        <div className="bg-gray-800 p-6 md:p-12 rounded-xl shadow-lg flex flex-col space-y-6 md:space-y-0 md:flex-row items-center">

            <img src={portfolio.image} alt={portfolio.name} className="w-32 h-32 rounded-full shadow-md flex-shrink-0 mb-4 md:mb-0" />

            <div className="flex flex-col space-y-4 md:flex-grow md:ml-8">
                <h1 className="text-3xl font-bold text-white">
                    {portfolio.name}
                </h1>

                <div className="flex space-x-4 items-center">
                    <BriefcaseIcon className="h-6 w-6 text-blue-400" />
                    <p className="text-blue-400">{portfolio.job_title}</p>
                </div>

                <div className="flex space-x-4 items-center">
                    <BuildingOfficeIcon className="h-6 w-6 text-gray-400" />
                    <p className="text-gray-400">
                        {portfolio.current_company}
                        <a href={portfolio.current_company_website} target="_blank" rel="noopener noreferrer" className="ml-2 underline hover:no-underline">
                            Visitar sitio
                        </a>
                    </p>
                </div>

                <p className="text-gray-400 mt-2">{portfolio.description}</p>

                <a
                    href={`mailto:${portfolio.git_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-500 flex items-center mt-2"
                >
                    <EnvelopeIcon className="mr-2 h-6 w-6 text-blue-400" />
                    Ver mi perfil en GitHub
                </a>
            </div>
        </div>
    );
}

export default Header;
