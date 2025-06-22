import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-md p-8"
            >
                <h2 className="text-2xl font-bold text-center text-text mb-6">Login to <span className="text-primary">IGReach</span></h2>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-accent transition flex items-center justify-center gap-2"
                    >
                        {loading ? (
                        <>
                            <Loader2 className="animate-spin w-4 h-4" />
                            Logging in...
                        </>
                        ) : (
                        "Login"
                        )}
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600 mt-6">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-primary font-semibold hover:underline">
                        Sign up
                    </a>
                </p>

            </motion.div>
        </section>
    );
}