import React from 'react';
import { postContactForm } from '../api/api';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ReplayIcon from '@mui/icons-material/Replay';
import SendIcon from '@mui/icons-material/Send';
/**
 * componente para la vista de contacto
 * toasts de react-toastify para mostrar mensajes de error y éxito
 */
function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [emailSentTo, setEmailSentTo] = useState('');

    useEffect(() => {
        const storedIsSubmitted = localStorage.getItem('isSubmitted');
        const storedEmailSentTo = localStorage.getItem('emailSentTo');

        if (storedIsSubmitted) {
            setIsSubmitted(JSON.parse(storedIsSubmitted));
        }
        if (storedEmailSentTo) {
            setEmailSentTo(storedEmailSentTo);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('isSubmitted', JSON.stringify(isSubmitted));
        localStorage.setItem('emailSentTo', emailSentTo);

    }, [isSubmitted, emailSentTo]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const toastId = toast("Enviando...", { autoClose: false });

        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
        };

        try {
            const result = await postContactForm(data);
            setEmailSentTo(data.email);
            console.log(result);
            console.log(data);
            toast.dismiss(toastId);
            toast.success("Mensaje enviado");
            setIsSubmitted(true);

        } catch (error) {
            toast.dismiss(toastId);
            toast.error('Error al enviar el mensaje.');
        }
    };
    const resetForm = () => {
        setIsSubmitted(false);
        setEmailSentTo('');
        localStorage.removeItem('isSubmitted');
        localStorage.removeItem('emailSentTo');
    };
    return (
        <div className="px-4 py-4 md:px-20 md:py-6 min-h-screen flex flex-col justify-start items-center">

            <div className="max-w-2xl mx-auto p-8 rounded-xl shadow-lg bg-gray-50 dark:bg-slate-900">

                {isSubmitted ? (
                    <>
                        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Mensaje Enviado 🎉</h1>
                        <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
                            Gracias por contactar. Serás respondido en el email {emailSentTo}.
                        </p>
                        <button
                            onClick={resetForm}
                            className="flex justify-center items-center space-x-2 px-5 py-3 text-md font-bold text-black bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                        >
                            <ReplayIcon fontSize="small" className="text-gray-900" />
                            <span>Enviar otro mensaje</span>
                        </button>

                    </>
                ) : (
                    <>
                        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Contacto</h1>
                        <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
                            Conéctate conmigo a través del formulario.
                        </p>

                        <form onSubmit={handleSubmit}>
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

                            <button
                                type="submit"
                                className="flex justify-center items-center space-x-2 px-5 py-3 text-md font-bold text-black bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                            >
                                <SendIcon fontSize="small" className="text-gray-900" />
                                <span>Enviar Mensaje</span>
                            </button>

                        </form>
                    </>

                )}

            </div>

        </div>

    );
}

export default Contact;
