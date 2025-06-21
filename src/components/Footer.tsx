import { motion } from "framer-motion";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const footerLinks = [
    {
        title: "Product",
        links: [
        { name: "Features", href: "#features" },
        { name: "How it Works", href: "#howitworks" },
        { name: "Pricing", href: "#pricing" },
        ],
    },
    {
        title: "Company",
        links: [
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        ],
    },
];

const socialIcons = [
    { icon: FaInstagram, href: "https://instagram.com" },
    { icon: FaXTwitter, href: "https://twitter.com" },
    { icon: FaFacebook, href: "https://facebook.com" },
];

export default function FooterSection() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 gap-10"
                >
                    {/* Brand */}
                    <div>
                        <h2 className="text-primary font-bold text-2xl">IGReach</h2>
                        <p className="text-gray-600 mt-4 text-sm">
                            The smart way to grow your Instagram — automate outreach, gain real leads, and protect your brands.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {socialIcons.map((item, index) => (
                                <Link 
                                    key={index}
                                    to={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-primary transition"
                                >
                                    <item.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerLinks.map((section, i) => (
                        <div key={i}>
                            <h4 className="text-sm font-semibold text-text mb-4">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link, j) => (
                                    <li
                                        key={j}
                                    >
                                        <Link
                                            to={link.href}
                                            className="text-gray-600 text-sm hover:text-primary transition"

                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>

                {/* Bottom Note */}
                <div className="pt-12 mt-12 border-t border-gray-200 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} IGReach. All rights reserved.
                </div>
            </div>
        </footer>
    );
}