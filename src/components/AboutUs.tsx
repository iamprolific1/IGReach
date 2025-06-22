import { motion } from "framer-motion";
import { Users, Rocket, ShieldCheck } from "lucide-react";

const coreValues = [
    {
        title: "Creator-First",
        icon: Users,
        description:
        "We’re obsessed with helping creators and small businesses grow their audience without burning out or wasting time.",
    },
    {
        title: "Automation with Integrity",
        icon: ShieldCheck,
        description:
        "We automate like humans. No shady scraping, spammy bots, or gray-hat tactics. Just clean, safe outreach.",
    },
    {
        title: "Built for Speed",
        icon: Rocket,
        description:
        "We move fast so you can move faster. IGReach is constantly evolving to give you cutting-edge tools that actually deliver.",
    },
];

export default function AboutUs() {
    return (
        <section className="bg-white py-20" id="about">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl text-text font-bold">
                        About IGReach
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                        We're building tools that help digital hustlers scale meaningful conversations - without burnout, bans, or B.S.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                                <value.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-text mb-2">
                                {value.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
