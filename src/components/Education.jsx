import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Academic <span className="text-gradient">Records</span>
                    </h2>
                    <p className="text-gray-400">
                        My educational background and achievements.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {portfolioData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-surface/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all card-glass group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 text-gray-500 group-hover:scale-110 transition-transform duration-500">
                                <GraduationCap size={120} />
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 relative z-10">
                                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-white/5 rounded-2xl p-4 border border-white/10 flex items-center justify-center">
                                    <img
                                        src={edu.logo}
                                        alt={`${edu.school} Logo`}
                                        className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                                    />
                                </div>

                                <div className="text-center md:text-left flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{edu.degree}</h3>
                                    <h4 className="text-xl text-gray-400 mb-4">{edu.school}</h4>

                                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                                        <span className="bg-white/5 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-white/5">
                                            {edu.duration}
                                        </span>
                                    </div>

                                    <p className="text-gray-300 font-medium">
                                        {edu.details}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
