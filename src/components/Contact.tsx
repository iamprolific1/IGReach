import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
            >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Get in Touch
            </h2>
            <p className="mt-4 text-gray-600 text-base">
                Have questions? Reach out and let’s talk about how IGReach can help
                your business grow.
            </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
            >
                <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1" />
                <div>
                    <h4 className="text-base font-semibold text-text">Email</h4>
                    <p className="text-gray-600 text-sm">support@igreach.ai</p>
                </div>
                </div>

                <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1" />
                <div>
                    <h4 className="text-base font-semibold text-text">Phone</h4>
                    <p className="text-gray-600 text-sm">+234 812 345 6789</p>
                </div>
                </div>

                <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1" />
                <div>
                    <h4 className="text-base font-semibold text-text">
                    Location
                    </h4>
                    <p className="text-gray-600 text-sm">Lagos, Nigeria</p>
                </div>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
                onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => e.preventDefault()}
            >
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-800">
                    Name
                </label>
                <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                />
                </div>

                <div>
                <label className="block mb-2 text-sm font-medium text-gray-800">
                    Email
                </label>
                <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@example.com"
                />
                </div>

                <div>
                <label className="block mb-2 text-sm font-medium text-gray-800">
                    Message
                </label>
                <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us how we can help you"
                />
                </div>

                <button
                type="submit"
                className="bg-primary hover:bg-accent text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                Send Message
                </button>
            </motion.form>
            </div>
        </div>
        </section>
    );
}
