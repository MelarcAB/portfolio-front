import { EnvelopeIcon, BuildingOfficeIcon, BriefcaseIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Switcher } from "../components/Switcher";

function Header({ portfolio }) {
    if (!portfolio) return null;

    return (
        <div className="relative p-4 md:p-12 flex flex-col-reverse md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 transition-all ease-in-out duration-500 dark:bg-gray-900">

            <div className="space-y-4 md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center md:text-left text-gray-800 dark:text-white">
                    <UserCircleIcon className="inline-block h-8 md:h-10 w-8 md:w-10 mr-2 align-middle text-indigo-500 dark:text-indigo-300" />
                    {portfolio.name}
                </h1>

                <div className="flex justify-center md:justify-start space-x-2 md:space-x-4 items-center">
                    <BriefcaseIcon className="h-5 md:h-6 w-5 md:w-6 text-indigo-500 dark:text-indigo-300" />
                    <p className="text-indigo-500 dark:text-indigo-300">{portfolio.job_title}</p>
                </div>

                <div className="flex justify-center md:justify-start space-x-2 md:space-x-4 items-center">
                    <BuildingOfficeIcon className="h-5 md:h-6 w-5 md:w-6 text-gray-700 dark:text-gray-300" />
                    <p className="text-gray-700 dark:text-gray-300">
                        {portfolio.current_company}
                        <a href={portfolio.current_company_website} target="_blank" rel="noopener noreferrer" className="ml-2 text-indigo-500 hover:underline dark:text-indigo-300">
                            Visitar sitio
                        </a>
                    </p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-justify text-center md:text-left">{portfolio.description}</p>

                <div className="flex justify-center md:justify-start mt-4">
                    <a
                        href={`mailto:${portfolio.git_url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-indigo-500 hover:text-indigo-600 dark:text-indigo-300"
                    >
                        <EnvelopeIcon className="h-6 w-6" />
                        <span>Ver mi perfil en GitHub</span>
                    </a>
                </div>
            </div>

            <div className="flex justify-center md:w-1/3 items-center space-y-4 md:space-y-0">
                <img src={portfolio.image} alt={portfolio.name} className="object-cover w-48 md:w-56 h-48 md:h-56 rounded-full border-4 border-indigo-500 hover:border-indigo-700 transition-all duration-300" />
            </div>

            <div className="absolute top-4 md:top-6 right-4 md:right-6 z-10">
                <Switcher />
            </div>
        </div>
    );
}

export default Header;
