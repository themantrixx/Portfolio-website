import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download } from 'lucide-react';

const Hero = () => {
    const { name, role, tagline, about, social } = portfolioData;

    return (
        <section id="hero" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
            {/* Mesh Grid Background is global, but we can add a local spot glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-surface border border-primary/30 text-primary font-mono text-sm">
                            <span className="animate-pulse mr-2">●</span> Available for hire
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            Hi, I'm <span className="text-gradient hover:opacity-80 transition-opacity">{name}</span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl text-muted font-medium mb-6">
                            {role}
                        </h2>

                        <p className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed">
                            {tagline} <br />
                            <span className="text-sm opacity-75 mt-2 block">{about}</span>
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Link
                                to="projects"
                                smooth={true}
                                className="bg-primary text-black px-8 py-3.5 rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 cursor-pointer"
                            >
                                View Projects
                            </Link>
                            <a
                                href="/resume.pdf"
                                className="flex items-center px-8 py-3.5 rounded-lg border border-gray-700 hover:border-gray-500 hover:bg-surface/50 transition-all bg-black/20 backdrop-blur-sm"
                            >
                                <Download size={20} className="mr-2" /> Resume
                            </a>
                        </div>

                        <div className="flex gap-6">
                            {social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary transition-colors transform hover:-translate-y-1"
                                    aria-label={item.name}
                                >
                                    <item.icon size={26} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block lg:block mx-auto"
                    >
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            {/* Decorative Circles */}
                            <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin-slow" />
                            <div className="absolute inset-4 border border-accent/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />

                            {/* Image Container with Glow */}
                            <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl shadow-primary/20 border-2 border-primary/50 group">
                                <img
                                    src={portfolioData.avatar}
                                    alt={name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 bg-surface border border-gray-800 p-4 rounded-xl shadow-xl flex items-center gap-3"
                            >
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="font-mono text-xs font-bold">Full Stack</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 bg-surface border border-gray-800 p-4 rounded-xl shadow-xl flex items-center gap-3"
                            >
                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                <span className="font-mono text-xs font-bold">Developer</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
