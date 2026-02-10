import React, { useState } from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus('loading');
        setResult('');

        const formData = new FormData(event.target);

        // PUBLIC ACCESS KEY (Safe to expose on client-side)
        formData.append("access_key", "7e05741c-06ee-49f7-a518-e05b9987b7cb");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                setStatus('success');
                event.target.reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.log("Error", data);
                setResult(data.message);
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setResult("An error occurred. Please try again later.");
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            Let's <span className="text-gradient">Connect</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="p-4 rounded-xl bg-surface border border-white/5 group-hover:border-primary/20 transition-colors">
                                    <Mail className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                                    <a href="mailto:shreemant.sahu04@gmail.com" className="text-gray-400 hover:text-primary transition-colors text-lg">
                                        shreemant.sahu04@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 rounded-xl bg-surface border border-white/5 group-hover:border-primary/20 transition-colors">
                                    <MapPin className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
                                    <p className="text-gray-400 text-lg">
                                        Bhubaneswar, India <br /> <span className="text-sm opacity-60">(Open to Remote)</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6 mt-16">
                            {portfolioData.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-xl bg-surface border border-white/5 text-gray-400 hover:text-white hover:bg-white/5 hover:scale-110 transition-all duration-300"
                                    aria-label={item.name}
                                >
                                    <item.icon size={22} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-surface p-8 md:p-10 rounded-3xl border border-white/5 card-glass relative"
                    >
                        {/* Form Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] -z-10" />

                        <form onSubmit={onSubmit} className="space-y-6">
                            {/* Hidden Access Key Input removed to avoid conflict with JS append */}

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-white placeholder-gray-600"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-gradient-to-r from-primary to-accent text-bg font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <>Sending <Loader2 className="animate-spin" size={20} /></>
                                ) : status === 'success' ? (
                                    <>Sent Successfully <CheckCircle size={20} /></>
                                ) : status === 'error' ? (
                                    <>Failed to Send <AlertCircle size={20} /></>
                                ) : (
                                    <>Send Message <Send size={20} /></>
                                )}
                            </button>

                            {status === 'error' && (
                                <p className="text-red-400 text-sm text-center mt-2">{result}</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
