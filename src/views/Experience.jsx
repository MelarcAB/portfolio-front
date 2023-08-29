import React from 'react';
import Timeline from '../components/Timeline';
function Experience() {

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
                    Experiencia
                </h1>
                <Timeline />

            </div>
        </div>
    );

}

export default Experience;