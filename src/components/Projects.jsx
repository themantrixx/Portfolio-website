import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background Gradient Support */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of my recent work and experiments.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 group flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
                        >
                            <div className="hologram-container relative overflow-hidden h-48 sm:h-56 border-b border-white/5 group">
                                <div className="animate-scanline"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="hologram-image w-full h-full object-cover transform transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px] z-30">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        // Mobile: visible and in place. Desktop: hidden/translated until hover
                                        className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-black transition-colors transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 duration-300"
                                        title="View Live"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        // Mobile: visible and in place. Desktop: hidden/translated until hover
                                        className="p-3 bg-black text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                                        title="View Code"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-white/5 text-xs font-medium rounded-full text-gray-300 border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
