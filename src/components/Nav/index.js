import React from 'react';

function Nav({setPage, Contact, About, Resume, Projects}) {
    return (
        <header class="sticky top-0 w-full px-2 py-4 bg-gradient-to-br from-indigo-500 to-indigo-800 sm:px-4 shadow-xl">
        <div class="flex items-center grid justify-items-end mx-auto max-w-7xl">
            <div class="flex items-center space-x-1">
            <ul class="space-x-2 md:inline-flex">
                <li className="px-4 py-2 text-dark italic hover:cursor-pointer">
                    <a href="#about" onClick={() => setPage(<About/>)}>About Me</a>
                </li>
                <li className="px-4 py-2 text-dark italic hover:cursor-pointer">
                    <a href="#projects"onClick={() => setPage(<Projects/>)}> Projects </a>
                </li>
                <li className="px-4 py-2 text-dark italic hover:cursor-pointer">
                    <a href="#resume" onClick={() => setPage(<Resume/>)}> Resume </a>
                </li>
                <li className="px-4 py-2 text-dark italic hover:cursor-pointer">
                    <a href="#contact" onClick={() => setPage(<Contact/>)}> Contact Me! </a>
                </li>
            </ul>
            </div>
        </div>
        </header>
    )
}

export default Nav