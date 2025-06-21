
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Send, Activity } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
    return (
        <section className="relative bg-background pt-28 pb-20 overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute -top-60 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px] z-10" />
        

        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-16">
            {/* Text Content */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
            >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Automate Your Instagram DMs. <br />
                <span className="text-primary">
                    <Typewriter
                        words={['Find Leads.', 'Grow Faster.', 'Close More Sales.', 'Scale with Ease.']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </span>
            </h1>

            <p className="mt-6 text-md md:text-lg tracking-wide text-gray-600">
                IGReach helps you safely send personalized DMs to your ideal
                customers on autopilot. No stress. No bans. Just results.
            </p>

            {/* Feature Highlights */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-6 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-primary" />
                Safe Automation
                </div>
                <div className="flex items-center gap-2">
                <Send size={18} className="text-primary" />
                Personalized DMs
                </div>
                <div className="flex items-center gap-2">
                <Activity size={18} className="text-primary" />
                Measurable Results
                </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
                <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/signup"
                className="w-full md:w-auto bg-primary text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-accent transition flex items-center justify-center gap-2"
                >
                Get Started Free <ArrowRight size={18} />
                </motion.a>

                <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#howitworks"
                className="w-full md:w-auto text-center text-primary font-semibold px-6 py-3 rounded-xl text-base border border-primary hover:bg-accent hover:text-white hover:border-accent transition"
                >
                How It Works
                </motion.a>
            </div>
            </motion.div>

            {/* Hero Image or Preview */}
            <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="w-full max-w-md md:max-w-lg"
            >
            <div className="aspect-video bg-white shadow-xl rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 text-sm">
                <span>Insert demo UI, animation or screenshot here.</span>
            </div>
            </motion.div>
        </div>
        </section>
    );
}
