import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { GithubIcon, LinkedinIcon } from './Icons/CustomIcons';
function CircleHeader({ portfolio }) {
    if (!portfolio) return null;

    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="p-8 md:p-16 relative flex flex-col items-center bg-white dark:bg-gray-800 border rounded-3xl shadow-xl mb-8"
        >

            <div className="w-60 h-60 overflow-hidden rounded-full border-4 border-indigo-500 mb-4 shadow-lg">
                <motion.img
                    src={portfolio.image}
                    alt={portfolio.name}
                    className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
                />
            </div>

            <div className="text-center mb-5">
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-2"
                >
                    {portfolio.name}
                </motion.h1>

                <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-xl text-indigo-500 dark:text-indigo-400"
                >
                    {portfolio.job_title} en
                    <a href={portfolio.current_company_website} target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-600">
                        {portfolio.current_company}
                    </a>
                </motion.p>
            </div>

            <div className="text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-5">{portfolio.description}</p>

                <div className="flex space-x-5 justify-center mb-4">
                    <a href={portfolio.git_url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                        <GithubIcon className="h-6 w-6" />
                        <span>GitHub</span>
                    </a>
                    <a href={portfolio.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                        <LinkedinIcon className="h-6 w-6" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default CircleHeader;
