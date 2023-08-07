import { EnvelopeIcon, BuildingOfficeIcon, BriefcaseIcon, UserCircleIcon } from '@heroicons/react/24/solid';
function Header({ portfolio }) {
    if (!portfolio) return null;

    return (
        <div className="bg-opacity-60 bg-gradient-to-r from-gray-600 to-slate-800 p-6 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-6">

            <div className="flex justify-center md:w-1/3">
                <img src={portfolio.image} alt={portfolio.name} className="w-48 h-48 rounded-full border-4 border-blue-500 shadow-lg transform hover:scale-105 transition-transform" />
            </div>


            <div className="space-y-4 md:w-2/3">
                <h1 className="text-4xl font-extrabold text-white tracking-tight text-center md:text-left">
                    <UserCircleIcon className="inline-block h-10 w-10 mr-2 text-white align-middle" />
                    {portfolio.name}
                </h1>

                <div className="flex justify-center md:justify-start space-x-4 items-center">
                    <BriefcaseIcon className="h-6 w-6 text-blue-500" />
                    <p className="text-blue-500">{portfolio.job_title}</p>
                </div>

                <div className="flex justify-center md:justify-start space-x-4 items-center">
                    <BuildingOfficeIcon className="h-6 w-6 text-gray-400" />
                    <p className="text-gray-400">
                        {portfolio.current_company}
                        <a href={portfolio.current_company_website} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:underline">
                            Visitar sitio
                        </a>
                    </p>
                </div>

                <p className="text-gray-300 text-justify text-center md:text-left">{portfolio.description}</p>

                <div className="flex justify-center md:justify-start">
                    <a
                        href={`mailto:${portfolio.git_url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 mt-4 text-blue-500 hover:text-blue-600"
                    >
                        <EnvelopeIcon className="h-6 w-6" />
                        <span>Ver mi perfil en GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
