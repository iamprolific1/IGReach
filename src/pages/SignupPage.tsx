import { motion } from "framer-motion";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function SignupPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
    
        if (password !== confirm) {
          return setError("Passwords do not match.");
        }
    
        setLoading(true);
        // try {
        //   const res = await fetch("/api/auth/signup", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ email, password }),
        //   });
    
        //   const data = await res.json();
    
        //   if (!res.ok) throw new Error(data.message || "Signup failed.");
    
        // } catch (err: any) {
        //   setError(err.message || "Something went wrong.");
        // } finally {
        //   setLoading(false);
        // }
      };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-md p-8"
            >
                <h2 className="text-2xl font-bold text-center text-text mb-6">Create an <span className="text-primary">IGReach</span> Account</h2>

                {error && (
                    <div className="bg-red-100 text-red-700 text-sm p-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSignup} className="space-y-5">
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
                            placeholder="Create a strong password"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            required
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Re-enter password"
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
                            Creating Account...
                        </>
                        ) : (
                        "Create Account"
                        )}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <a href="/login" className="text-primary font-semibold hover:underline">
                        Login
                    </a>
                </p>
            </motion.div>
        </section>
    );
}