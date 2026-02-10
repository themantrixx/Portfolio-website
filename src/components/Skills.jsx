import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Technologies and tools I work with to build digital products.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.skills.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-colors group card-glass"
                        >
                            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                                <span className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                                {category.category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all group/item cursor-default">
                                        {skill.iconClass && <i className={`${skill.iconClass} text-xl opacity-70 group-hover/item:opacity-100 group-hover/item:text-primary transition-all`}></i>}
                                        <span className="text-gray-300 font-medium text-sm group-hover/item:text-white transition-colors">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
