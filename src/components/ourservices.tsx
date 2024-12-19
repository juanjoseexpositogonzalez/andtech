// src/components/OurServices.tsx
import React from 'react';
import Link from 'next/link'; // Navegación interna
import Image from 'next/image';

const services = [
    {
        id: 1,
        title: "Web & App Development",
        image: '/services/webappdevelopment.png',
    },
    {
        id: 2,
        title: "SEO & SEM",
        image: '/services/seosem.png',
    },
    {
        id: 3,
        title: "Digital Marketing",
        image: '/services/digitalmarketing.png',
    },
    {
        id: 4,
        title: "Social Media Management",
        image: '/services/socialmediamanagement.png',
    },
];


const OurServices: React.FC = () => {
    return (
        <section className="relative py-16 px-4">
            {/* Encabezado */}
            <div className="container mx-auto flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-black">Our services</h2>

                {/* Enlace con barra vertical */}
                <div className="flex items-center space-x-4">
                    <Link
                        href="/services"
                        className="text-sm text-gray-600 hover:text-purple-600 flex items-center"
                    >
                        All about our services
                        <span className="ml-1">↗</span>
                    </Link>
                    <div className="h-4 w-px bg-gray-300"></div>
                </div>
            </div>

            {/* Grid de Servicios */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition flex items-center justify-center"
                    >
                        <Image
                            src={service.image}
                            alt={service.title}
                            width={500}
                            height={250}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;