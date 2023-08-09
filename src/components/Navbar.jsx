import React from 'react'
import { Link } from 'react-router-dom'


const NavElements = [
    {
        name: 'Proyectos',
        path: '/proyectos'
    },
    {
        name: 'Experiencia',
        path: '/experiencia'
    },
    {
        name: 'Contacto',
        path: '/contacto'
    }
]

function Navbar() {

    return (
        <nav className="m-12 p-12">
            <ul className="flex justify-center space-x-10 text-xl md:text-2xl font-mono">

                {NavElements.map((element, index) => (
                    <li key={index}>
                        <Link

                            to={element.path}
                            className="text-black dark:text-white hover:text-blue-500 transition-colors">
                            {element.name}
                        </Link>
                    </li>
                ))
                }

            </ul>
        </nav>
    );
}

export default Navbar