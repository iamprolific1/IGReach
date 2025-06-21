import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        title: "Starter",
        price: "₦0",
        description: "Perfect for testing the waters.",
        features: [
            "Connect 1 Instagram account",
            "Send up to 20 DMs/day",
            "Basic campaign analytics",
        ],
        cta: "Get Started Free",
        isPopular: false,
    },
    {
        title: "Pro",
        price: "₦12,000/mo",
        description: "Scale your outreach with full power.",
        features: [
            "Up to 3 Instagram accounts",
            "Send 150+ DMs/day",
            "Advanced targeting & scheduling",
            "Priority support",
        ],
        cta: "Upgrade to Pro",
        isPopular: true,
    },
];

export default function PricingSection() {
    return (
        <section id="pricing" className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-4">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                        Simple, Honest Pricing
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Start for free, upgrade when you're ready to scale.
                    </p>
                </motion.div>

                {/* Pricing Plan Grids */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className={`rounded-2xl border ${
                                plan.isPopular ? "border-primary shadow-lg" : "border-gray-200"
                            } p-8 bg-white relative`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 right-0 -mt-4 mr-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-semibold text-text mb-2">
                                {plan.title}
                            </h3>
                            <p className="text-3xl font-bold text-text mb-2">
                                {plan.price}
                            </p>
                            <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>
                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-2 text-gray-700 text-sm"
                                    >
                                        <Check className="text-primary w-4 h-4" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                            href="/signup"
                            className={`block w-full text-center py-3 px-4 rounded-xl font-semibold text-sm transition ${
                                plan.isPopular 
                                ? "bg-primary text-white hover:bg-primary/90"
                                : "border border-primary text-primary hover:bg-primary hover:text-white"
                            }`}
                            >
                                {plan.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}