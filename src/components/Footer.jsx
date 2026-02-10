import React from 'react';
import { portfolioData } from '../data';

const Footer = () => {
    return (
        <footer className="py-8 bg-black/20 border-t border-white/5 relative z-10 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm text-center md:text-left font-sans">
                    <span className="text-primary font-medium">© {new Date().getFullYear()}</span> {portfolioData.name}. <span className="text-gray-600">All rights reserved.</span>
                </p>
                <p className="text-gray-500 text-sm flex items-center gap-1 font-sans">
                    Built with <span className="text-primary font-medium">React</span> & <span className="text-accent font-medium">Tailwind</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
