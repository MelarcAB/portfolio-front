import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { GithubIcon, LinkedinIcon } from './Icons/CustomIcons';

const fadeIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.5,
            duration: 0.7
        }
    },
};

const slideIn = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.3
        }
    }
};

function Header({ portfolio }) {
    if (!portfolio) return null;

    return (
        <motion.div className="relative p-4 md:p-12 flex flex-col items-center justify-center space-y-4 transition-all ease-in-out duration-500 ">

            <motion.img
                src={portfolio.image}
                alt={portfolio.name}
                className="object-cover w-48 md:w-56 h-48 md:h-56 rounded-full border-4 border-indigo-500 hover:border-indigo-700 transition-all duration-300"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
            />

            <motion.div
                className="space-y-3 text-center"
                variants={slideIn}
                initial="hidden"
                animate="visible"
            >
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white">
                    {portfolio.name}
                </h1>
                <p className="text-indigo-500 dark:text-indigo-300">
                    {portfolio.job_title} en <a href={portfolio.current_company_website} target="_blank" rel="noopener noreferrer" className="underline">{portfolio.current_company}</a>
                </p>
                <p className="text-gray-700 dark:text-gray-300">{portfolio.description}</p>

                <div className="flex justify-center items-center space-x-3 mt-4">
                    <a href={portfolio.git_url} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-300 flex items-center">
                        <GithubIcon className="h-5 md:h-6 w-5 md:w-6 dark:text-gray-300 mr-2" />
                        GitHub
                    </a>
                    <a href={portfolio.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 dark:text-blue-300 flex items-center">
                        <LinkedinIcon className="h-5 md:h-6 w-5 md:w-6 dark:text-gray-300 mr-2" />
                        LinkedIn
                    </a>
                </div>

                <div className="flex justify-center items-center space-x-2 mt-2">
                    <MapPinIcon className="h-5 md:h-6 w-5 md:w-6 text-gray-700 dark:text-gray-300" />
                    <p className="text-gray-700 dark:text-gray-300">{portfolio.city}, {portfolio.country}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Header;
