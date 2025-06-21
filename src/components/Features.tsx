import { motion } from "framer-motion";
import { ShieldCheck, Bot, MessageCircle, Send, Zap, ThumbsUp } from "lucide-react";


const features = [
    {
        title: "Safe Automation",
        description: "Mimics real user behavior to avoid bans and ensure safe delivery.",
        icon: ShieldCheck,
    },
    {
        title: "AI-Powered Personalization",
        description: "Crafts custom messages that feel personal and boost replies.",
        icon: Bot,
    },
    {
        title: "Smart Inbox Handling",
        description: "Automatically manages replies to keep leads engaged.",
        icon: MessageCircle,
    },
    {
        title: "Bulk Messaging",
        description:
        "Reach out to dozens or hundreds of accounts with a few clicks.",
        icon: Send,
    },
    {
        title: "Lightning Fast Setup",
        description: "Connect your Instagram and start sending in under 3 minutes.",
        icon: Zap,
    },
    {
        title: "Boosted Engagement",
        description: "More DMs. More replies. More conversions — automatically.",
        icon: ThumbsUp,
    },
];

export default function FeaturesGrid() {
    return (
        <section className="bg-white py-20" id="features">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                        What Makes <span className="text-primary">IGReach</span> Different?
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Supercharge your growth on Instagram with features built for safe and powerful outreach.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-muted/10 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition"
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                                    <Icon size={24} />
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}