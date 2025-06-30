"use client";

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaUsers, FaBookOpen, FaFlask } from 'react-icons/fa';

import nurseryImage from '@/assets/class.jpg';
import primaryImage from '@/assets/student.jpg';
import secondaryImage from '@/assets/students2.jpg';

interface SchoolFeature {
    title: string;
    description: string;
    imageSrc: StaticImageData;
    alt: string;
    icon: React.ReactNode;
    stats: { number: string; label: string }[];
    color: string;
}

const features: SchoolFeature[] = [
    {
        title: 'Nursery School',
        description:
            'Our Nursery program provides a safe and nurturing environment for early learners, focusing on social, emotional, and fundamental motor skills development through play-based activities and creative learning.',
        imageSrc: nurseryImage,
        alt: 'Nursery students at play',
        icon: <FaUsers className="text-2xl" />,
        stats: [
            { number: '3-5', label: 'Age Range' },
            { number: '15:1', label: 'Student Ratio' },
            { number: '100%', label: 'Play-Based' }
        ],
        color: 'from-pink-500 to-rose-500'
    },
    {
        title: 'Primary School',
        description:
            'At Hallmark Academy Primary, we build strong foundations in literacy, numeracy, and critical thinking with hands-on projects, collaborative learning experiences, and innovative teaching methods.',
        imageSrc: primaryImage,
        alt: 'Primary classroom interaction',
        icon: <FaBookOpen className="text-2xl" />,
        stats: [
            { number: '6-11', label: 'Age Range' },
            { number: '20:1', label: 'Student Ratio' },
            { number: '12+', label: 'Subjects' }
        ],
        color: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Secondary School',
        description:
            'Our Secondary curriculum prepares students for complex problem-solving and leadership, offering advanced coursework, STEM programs, and comprehensive extracurricular activities for holistic growth.',
        imageSrc: secondaryImage,
        alt: 'Secondary school students in science lab',
        icon: <FaFlask className="text-2xl" />,
        stats: [
            { number: '12-18', label: 'Age Range' },
            { number: '25:1', label: 'Student Ratio' },
            { number: '15+', label: 'Subjects' }
        ],
        color: 'from-purple-500 to-indigo-500'
    },
];

const Features: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-blue-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-10 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2 
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                            Educational
                        </span>{" "}
                        <span className="text-gray-800">Excellence</span>
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Explore our comprehensive educational programs designed to nurture young minds 
                        and prepare students for a bright future across all learning stages.
                    </motion.p>
                </motion.div>

                {/* Features Grid */}
                <div className="space-y-16">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                                idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                            }`}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Image Section */}
                            <motion.div
                                className={`relative ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative w-full h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl group">
                                    <Image
                                        src={feature.imageSrc}
                                        alt={feature.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        priority={idx === 0}
                                    />
                                    {/* Gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                                    
                                    {/* Floating stats */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                                            <div className="grid grid-cols-3 gap-4 text-center">
                                                {feature.stats.map((stat, statIdx) => (
                                                    <div key={statIdx}>
                                                        <div className="text-lg font-bold text-gray-800">{stat.number}</div>
                                                        <div className="text-xs text-gray-600">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content Section */}
                            <motion.div
                                className={`space-y-6 ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                {/* Icon and Title */}
                                <div className="flex items-center gap-4 mb-6">
                                    <motion.div
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white shadow-lg`}
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
                                        {feature.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Features List */}
                                <div className="space-y-3">
                                    {[
                                        'Qualified and experienced teachers',
                                        'Modern learning facilities',
                                        'Comprehensive curriculum',
                                        'Individual attention and support'
                                    ].map((item, itemIdx) => (
                                        <motion.div
                                            key={itemIdx}
                                            className="flex items-center gap-3"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.5 + itemIdx * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`} />
                                            <span className="text-gray-700">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    className={`group flex items-center gap-3 bg-gradient-to-r ${feature.color} text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Learn More
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                            Ready to Explore Our Programs?
                        </h3>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Schedule a campus tour and see firsthand how we're shaping the leaders of tomorrow.
                        </p>
                        <motion.button
                            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Schedule Campus Tour
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;