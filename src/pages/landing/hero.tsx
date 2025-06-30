"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { FaPlay, FaGraduationCap, FaUsers, FaTrophy, FaArrowRight, FaStar } from "react-icons/fa";

import heroImage from "@/assets/students2.jpg";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
                {/* Animated geometric shapes */}
                <motion.div
                    className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
                    {/* Left Content - Enhanced */}
                    <motion.div
                        className="lg:col-span-6 space-y-8 text-white"
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <FaStar className="text-yellow-400" />
                            <span>Award-Winning Educational Excellence</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
                                Shape Your{" "}
                                <span className="relative">
                                    <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                                        Future
                                    </span>
                                    <motion.div
                                        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 1.2, duration: 0.8 }}
                                    />
                                </span>
                                <br />
                                at Hallmark Academy
                            </h1>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.p
                            className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            Where innovation meets education. Empowering students with world-class learning experiences, 
                            cutting-edge technology, and personalized attention for academic excellence.
                        </motion.p>

                        {/* Stats Row */}
                        <motion.div
                            className="grid grid-cols-3 gap-6 py-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            {[
                                { icon: FaGraduationCap, number: "500+", label: "Students", color: "text-yellow-400" },
                                { icon: FaUsers, number: "50+", label: "Expert Teachers", color: "text-cyan-400" },
                                { icon: FaTrophy, number: "15+", label: "Awards Won", color: "text-orange-400" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center group"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className={`flex items-center justify-center mb-2 ${stat.color}`}>
                                        <stat.icon className="text-3xl group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                    <div className="text-2xl lg:text-3xl font-bold">{stat.number}</div>
                                    <div className="text-sm text-blue-200">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            <Link href="/auth/signin">
                                <motion.button
                                    className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold rounded-full shadow-2xl transition-all duration-300"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get Started Today
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                </motion.button>
                            </Link>
                            <motion.button
                                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-semibold rounded-full transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaPlay className="group-hover:scale-110 transition-transform duration-300" />
                                Watch Our Story
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Image Section - Completely Redesigned */}
                    <motion.div
                        className="lg:col-span-6 relative"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    >
                        {/* Main Image Container with Creative Layout */}
                        <div className="relative">
                            {/* Primary Image */}
                            <motion.div
                                className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src={heroImage}
                                    alt="Hallmark Academy students"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Gradient Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent" />
                                
                                {/* Floating Elements on Image */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <motion.div
                                        className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.5, duration: 0.6 }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-2xl font-bold text-gray-800">98%</div>
                                                <div className="text-sm text-gray-600">Success Rate</div>
                                            </div>
                                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                                <FaTrophy className="text-white text-xl" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Floating Achievement Cards */}
                            <motion.div
                                className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                        <FaGraduationCap className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-800">Excellence</div>
                                        <div className="text-sm text-gray-600">Award Winner</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20"
                                animate={{
                                    y: [0, 10, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                                        <FaUsers className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-800">Community</div>
                                        <div className="text-sm text-gray-600">500+ Families</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <motion.div
                                className="absolute top-1/4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.8, 1, 0.8],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute top-1/2 -right-6 w-6 h-6 bg-cyan-400 rounded-full opacity-70"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-medium">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <motion.div
                            className="w-1 h-3 bg-white rounded-full mt-2"
                            animate={{
                                y: [0, 12, 0],
                                opacity: [1, 0.3, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;