import React from 'react';
import Link from 'next/link'; // Navegación interna
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className="py-4 px-8 shadow flex items-center justify-between w-full">
            {/* Logo a la izquierda */}
            <div className="flex items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={120} height={40} />
                </Link>
            </div>

            {/* Navegación a la derecha: Menú, separadores verticales y botones */}
            <nav>
                <ul className="flex items-center space-x-6 text-black text-sm text-medium">
                    <li>
                        <Link href="/" className="hover:text-gray-500 font-bold">Home</Link>
                    </li>
                    <div className="h-6 w-px bg-gray-300" />

                    <li>
                        <Link href="/services" className="hover:text-gray-500 font-bold">Services</Link>
                    </li>
                    <div className="h-6 w-px bg-gray-300" />

                    <li>
                        <Link href="/method" className="hover:text-gray-500 font-bold">Method</Link>
                    </li>
                    <div className="h-6 w-px bg-gray-300" />

                    <li>
                        <Link href="news/" className="hover:text-gray-500 font-bold">News</Link>
                    </li>
                    <div className="h-6 w-px bg-gray-300" />

                    {/* Botones */}
                    <li>
                        <Link href="contact">
                            <button className="bg-purple-600 text-white px-6 py-2 font-bold rounded hover:bg-purple-600">
                                Contact us
                            </button>
                        </Link>
                    </li>
                    <li>
                        <button className="text-black px-4 hover:text-gray-500 font-bold transition">
                            Español
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;