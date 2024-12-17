// src/components/herosection.tsx
import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
    return (
        <section className="bg-[#E6E7FB] px-8 py-16 flex items-center justify-center">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center">
                {/* Texto del hero */}
                <div className="flex-1 text-left">
                    <h1 className="text-5xl font-bold text-purple-600 leading-tight">
                        Empowering <br />
                        <span className="text-black">your digital world</span>
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                        Ayúdanos a impulsar tu empresa medainte desarrollo digital e innovación.
                        Transformamos tu visión en realidad con tecnología y creatividad.
                    </p>
                    <div className="mt-6">
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-purple-700 transition">
                            Tell us about your project
                            <span className="ml-2"></span>
                        </button>
                    </div>
                </div>

                {/* Imagen */}
                <div className="flex-1 mt-8 md:mt-0 md:ml-8">
                    <Image 
                        src="/hero.png"
                        alt="Digital world"
                        width={500}
                        height={500}
                        className="rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
