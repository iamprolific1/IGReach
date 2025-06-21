import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "Is IGReach safe to use with my Instagram account?",
        answer:
        "Absolutely. We use headless browser automation that mimics real user behavior, keeping you under Instagram’s radar with randomized actions and delays.",
    },
    {
        question: "Will my account get banned?",
        answer:
        "Nope. As long as you stick to our recommended daily DM limits, you’re good. We also dynamically rotate actions to avoid detection.",
    },
    {
        question: "How many DMs can I send daily?",
        answer:
        "The free plan allows up to 20 DMs/day. With Pro, you can safely send over 150 DMs per day based on your account’s trust score.",
    },
    {
        question: "Can I connect multiple Instagram accounts?",
        answer:
        "Yes. The Pro plan supports up to 3 accounts with independent campaigns and tracking.",
    },
    {
        question: "Do I need to keep my browser open?",
        answer:
        "No. Once your campaigns are live, they’ll run on our backend automation system — 24/7, even when you’re offline.",
    },
];

export default function FAQSection() {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <section id="faq" className="bg-white py-24 border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-lg mt-2">
                        Everything you need to know before getting started with IGReach.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between px-6 py-4 text-left text-text font-medium focus:outline-none transition hover:bg-gray-50"
                            >
                                {faq.question}
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                </motion.div>
                            </button>
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        key="content"
                                        intial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-4 text-gray-600 text-sm"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}