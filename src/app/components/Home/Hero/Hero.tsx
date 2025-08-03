'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface SlideProps {
    id: string;
    image: string;
    subtitle: string;
    title: string;
    active: boolean;
}

const Slide: React.FC<SlideProps> = ({ id, image, subtitle, title, active }) => {
    return (
        <div 
            id={id} 
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${active ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
            {/* Background Image with Auto-Zoom Effect */}
            <div 
                className={`w-full h-full bg-cover bg-center absolute inset-0 transition-transform duration-10000 ${active ? 'scale-110' : 'scale-100'}`}
                style={{ backgroundImage: `url(${image})` }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 h-full relative flex items-center">
                <div className="max-w-2xl space-y-6 transform transition-all duration-700">
                    <div className="overflow-hidden">
                        <p className="font-semibold text-yellow-400 uppercase tracking-widest mb-2 inline-block relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-yellow-400 after:left-0 after:-bottom-1 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                            {subtitle}
                        </p>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                        {title.split(' ').map((word, i) => (
                            <span 
                                key={i} 
                                className="inline-block transition-transform duration-500 hover:scale-110 hover:text-yellow-400"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                {word}&nbsp;
                            </span>
                        ))}
                    </h1>

                    <div className="flex flex-wrap gap-4 mt-10">
                        <Link
                            href="/services"
                            className="relative overflow-hidden bg-yellow-400 text-black font-bold py-4 px-10 rounded-lg hover:bg-yellow-500 transition-all duration-300"
                        >
                            <span className="relative z-10">Get Started</span>
                            <span className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
                        </Link>
                        <Link
                            href="https://wa.me/8801919011101"
                            className="relative overflow-hidden border-2 border-white text-white font-bold py-4 px-10 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                        >
                            <span className="relative z-10">Contact Us</span>
                            <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Hero = () => {
    const slides = [
        {
            id: "slide1",
            image: "https://cdn.prod.website-files.com/5f4457266e6bc413f94c5229/6077139599d92f8a5d8b3e93_13f95248dea5407f780cc9011f1a2acce458b09c_office-manager-professional-development.jpeg",
            subtitle: "Digital Service Agency",
            title: "Innovative Digital Solutions",
        },
        {
            id: "slide2",
            image: "https://cdn.elearningindustry.com/wp-content/uploads/2018/10/20-free-courses-on-desing-and-development-you-should-know-about-e1539700035877.jpg",
            subtitle: "Creative Web Solutions",
            title: "Build Your Online Presence",
        },
        {
            id: "slide3",
            image: "https://cdn.prod.website-files.com/6484144ee6dda9d4b9ab7f57/667d613e6556a8e9caa122de_NestJS%20Training%201200x600.webp",
            subtitle: "Marketing & SEO",
            title: "Reach Your Target Audience",
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto slide functionality
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, slides.length]);

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false);
        setCurrentSlide(index);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToPrev = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <div className="carousel w-full relative h-screen overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <Slide
                    key={slide.id}
                    id={slide.id}
                    image={slide.image}
                    subtitle={slide.subtitle}
                    title={slide.title}
                    active={index === currentSlide}
                />
            ))}
            
            {/* Navigation Arrows */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                <button 
                    onClick={goToPrev}
                    className="btn btn-circle bg-black/30 hover:bg-black/60 border-none text-white transition-all duration-300 hover:scale-110"
                >
                    ❮
                </button>
                <button 
                    onClick={goToNext}
                    className="btn btn-circle bg-black/30 hover:bg-black/60 border-none text-white transition-all duration-300 hover:scale-110"
                >
                    ❯
                </button>
            </div>
            
            {/* Indicators */}
            <div className="absolute flex justify-center w-full gap-2 bottom-8 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-yellow-400 w-6' : 'bg-white/50 hover:bg-white'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;