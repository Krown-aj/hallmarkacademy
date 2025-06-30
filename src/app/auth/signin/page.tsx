"use client";

import { useState, useRef } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Toast } from "primereact/toast";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/ui/footer/footer";
import Loader from "@/components/ui/Loader/Loader";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const toast = useRef<Toast>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                toast.current?.show({
                    severity: "error",
                    summary: "Sign-in failed",
                    detail: "Invalid email or password",
                    life: 5000,
                });
            } else {
                const session = await getSession();
                if (session?.user?.role) {
                    router.push(`/${session.user.role}`);
                }
            }
        } catch (error) {
            toast.current?.show({
                severity: "error",
                summary: "Error",
                detail: "An unexpected error occurred",
                life: 5000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <article className="w-full min-h-screen flex flex-col bg-neutral-900 text-neutral-200">
            <Toast ref={toast} />
            {loading && <Loader visible={loading} onHide={() => setLoading(false)} />}

            <section className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
                <div className="bg-white rounded-md shadow-2xl flex gap-3 w-[70%] sm:w-[70%] lg:w-[45%] max-w-6xl mx-auto">
                    {/* LEFT PANEL */}
                    <div className="hidden sm:flex flex-col bg-gradient-to-br from-cyan-600 to-blue-800 text-white py-4">
                        <Link href="/" className="flex items-center justify-center">
                            <h1 className="text-xl font-bold flex flex-col items-center justify-center gap-2">
                                <Image
                                    src="/assets/logo.png"
                                    alt="logo"
                                    width={80}
                                    height={80}
                                />
                                Welcome Back
                            </h1>
                        </Link>
                        <p className="text-sm text-white/90 text-center pb-2">
                            To Hallmark Academy Lafia.
                        </p>
                        <hr className="border-gray-300 w-full" />
                        <p className="text-sm text-white text-justify py-2 px-3">
                            Dive into your world of learning—check today's assignments, track
                            your progress, and connect with teachers and classmates. Please
                            enter your credentials below to continue your journey.
                        </p>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="flex flex-col gap-0 sm:gap-3 py-12 px-6 sm:px-8 w-full">
                        <h2 className="text-gray-500 text-center font-bold text-lg sm:text-xl mb-3">
                            Sign in to your account
                        </h2>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-base text-gray-400 font-semibold">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-500 transition"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="text-base text-gray-400 font-semibold">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-500 transition"
                                    placeholder="********"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-2 mt-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition disabled:opacity-50"
                            >
                                {loading ? "Signing In..." : "Sign In"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </article>
    );
};

export default SignIn;