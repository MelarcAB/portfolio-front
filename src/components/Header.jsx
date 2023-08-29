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
            className="p-8 md:p-16 relative flex flex-col items-center mb-8"
        >
            {/* Avatar Image */}
            <div className="w-60 h-60 overflow-hidden rounded-full border-4 border-indigo-500 mb-6">
                <motion.img
                    src={portfolio.image}
                    alt={`${portfolio.name}'s profile`}
                    className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
                />
            </div>

            {/* User Info */}
            <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4"
            >
                {portfolio.name}
            </motion.h1>

            <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg md:text-xl text-indigo-500 dark:text-indigo-400 mb-4"
            >
                {portfolio.job_title} en{' '}
                <a href={portfolio.current_company_website} target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-600">
                    {portfolio.current_company}
                </a>
            </motion.p>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
                {portfolio.description}
            </p>

            {/* GitHub and LinkedIn as labels */}
            <div className="flex space-x-4 justify-center">
                <motion.a
                    href={portfolio.git_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center space-x-2 inline-block px-4 py-2 text-sm font-semibold text-black bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                >
                    <GithubIcon className="w-4 h-4" aria-hidden="true" />
                    <span>GitHub</span>
                </motion.a>

                <motion.a
                    href={portfolio.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex items-center space-x-2 inline-block px-4 py-2 text-sm font-semibold text-black bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                >
                    <LinkedinIcon className="w-4 h-4" aria-hidden="true" />
                    <span>LinkedIn</span>
                </motion.a>
            </div>
        </motion.div>
    );

}

export default CircleHeader;
