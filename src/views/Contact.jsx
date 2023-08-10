import React from 'react';

function Contact() {
    return (
        <div className="px-4 py-4 md:px-20 md:py-6 min-h-screen flex flex-col justify-start items-center">

            <div className="max-w-2xl mx-auto p-8 rounded-xl shadow-lg bg-gray-50 dark:bg-slate-900">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Hablemos 🚀</h1>
                <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
                    ¿Tienes un proyecto genial en mente? No dudes en contactarme.
                </p>

                <form action="#" method="POST">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-400">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="w-full p-3 border border-slate-400 rounded-md dark:bg-slate-800 dark:border-slate-600 dark:text-white transition duration-300 hover:border-blue-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-500 dark:focus:ring-1 dark:focus:ring-blue-600 outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="test@example.com"
                            required
                            className="w-full p-3 border border-slate-400 rounded-md dark:bg-slate-800 dark:border-slate-600 dark:text-white transition duration-300 hover:border-blue-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-500 dark:focus:ring-1 dark:focus:ring-blue-600 outline-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-400">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="¡Hola! Me gustaría..."
                            required
                            className="w-full p-3 border border-slate-400 rounded-md dark:bg-slate-800 dark:border-slate-600 dark:text-white transition duration-300 hover:border-blue-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-500 dark:focus:ring-1 dark:focus:ring-blue-600 outline-none"
                        ></textarea>
                    </div>

                    <button type="submit" className="py-2 px-6 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition duration-300 shadow-md transform hover:scale-105">
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
