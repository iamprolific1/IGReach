import { motion } from "framer-motion";
import Lottie from "lottie-react";
import InstagramAnimation from "../assets/instagram_animation.json";
import CampaignAnimation from "../assets/campaign_animation.json";
import SendDMAnimation from "../assets/send_DM_animation.json";
import PerformanceTrackingAnimation from "../assets/performance_tracking_animation.json";

const steps = [
    {
        title: "Connect Your Instagram",
        description: "Securely link your Instagram account to IGReach in seconds.",
        animation: InstagramAnimation,
    },
    {
        title: "Create Your Campaign",
        description:
        "Write your message and define your target audience with ease.",
        animation: CampaignAnimation,
    },
    {
        title: "Launch & Send DMs",
        description:
        "IGReach sends personalized messages that feel human — automatically.",
        animation: SendDMAnimation,
    },
    {
        title: "Track Performance",
        description:
        "See who opened, replied, and converted right from your dashboard.",
        animation: PerformanceTrackingAnimation,
    },
];

export default function HowItWorksSection() {
    return (
        <section id="howItWorks" className="bg-white py-20 px-6 md:px-16 relative overflow-hidden text-text">
            <div className="max-w-6xl mx-auto text-center relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-text mb-6"
                >
                    How It Works
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="tracking-wide text-gray-600 text-md md:text-lg mb-6"
                >
                    From setup to outreach, IGReach makes it easy to connect and convert.
                </motion.p>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-black/5 backdrop-blur-sm border border-black/10 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg hover:shadow-primary/20 transition hover:-translate-y-2"
                        > 
                            {/* Steps Number */}
                            <span className="absolute top-2 left-2 text-[60px] font-bold text-black/10 z-0">
                                {`0${index + 1}`}
                            </span>

                            {/* Animation */}
                            <div className="w-24 h-24 mb-4 z-10">
                                <Lottie animationData={step.animation} loop />
                            </div>

                            <h3 className="text-[16px] font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
