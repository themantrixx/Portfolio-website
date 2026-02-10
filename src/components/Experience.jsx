import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-gray-400">
                        My professional journey and contributions.
                    </p>
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-3 md:ml-0 md:pl-0 space-y-12">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Timeline Node */}
                            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-bg border-2 border-primary group-hover:bg-primary group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]" />

                            <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all card-glass">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h3>
                                        <div className="text-lg text-accent font-medium mt-1 flex items-center">
                                            <Briefcase size={16} className="mr-2" />
                                            {exp.company}
                                        </div>
                                    </div>
                                    <div className="flex items-center text-sm font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit mt-3 sm:mt-0 border border-white/5">
                                        <Calendar size={14} className="mr-2" />
                                        {exp.duration}
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
