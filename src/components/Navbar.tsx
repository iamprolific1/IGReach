import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];
export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    return (
        <motion.header
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut"}}
            className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm"
        >
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <a href="/" className="text-xl font-bold text-primary">
                    IGReach
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <a 
                        href={item.href}
                        key={item.label}
                        className="text-gray-700 tracking-wide hover:text-primary transition"
                        >
                            {item.label}
                        </a>
                    ))}

                {/* CTAs */}
                    <div className="hidden md:flex items-center space-x-4">
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={()=> setIsDark(!isDark)}
                            className="p-2 rounded-full border border-white/40 bg-black/5 hover:border-primary transition-colors cursor-pointer"
                        >
                            <AnimatePresence mode="wait">
                                {isDark ? (
                                    <motion.div key="moon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        <Sun className="w-5 h-5 text-yellow-400" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="sun" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        <Moon className="w-5 h-5 text-text" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                        <a 
                            href="/login"
                            className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-accent transition"
                        >
                            Get Started
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center gap-3">
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        onClick={()=> setIsDark(!isDark)}
                        className="p-2 rounded-full border border-white/40 bg-black/5 hover:border-primary transition-colors cursor-pointer"
                    >
                        <AnimatePresence mode="wait">
                            {isDark ? (
                                <motion.div key="moon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <Sun className="w-5 h-5 text-yellow-400" />
                                </motion.div>
                            ) : (
                                <motion.div key="sun" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <Moon className="w-5 h-5 text-text" />
                                </motion.div>
                            )}
                            </AnimatePresence>
                        </motion.button>
                        <button className="text-gray-700 flex items-center gap-3" onClick={()=> setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                </div>


            </div>
                {/* Mobile Nav */}
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        className="md:hidden bg-white border-t border-gray-200 px-4 pb-4"
                    >
                        <div className="flex flex-col space-y-3 mt-2">
                            {navItems.map((item) => (
                                <a 
                                    href={item.href}
                                    key={item.label}
                                    className="text-gray-700 hover:text-primary transition tracking-wide"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <hr className="border-zinc-200 my-2" />

                            <a 
                            href="/login"
                            className="bg-primary text-white px-4 py-2 rounded-xl text-center hover:bg-accent transition"
                            >
                                Get Started
                            </a>
                        </div>

                    </motion.div>
                )}
        </motion.header>
    );
}
