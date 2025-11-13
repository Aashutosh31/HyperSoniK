import React from "react";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';

const bars = new Array(24).fill(0);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#070716] to-black pt-24">
      
      {/* --- SUBTLE GLOW ORBS --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.18, scale: 1 }}
        transition={{ duration: 1.8 }}
        className="absolute top-20 left-20 h-72 w-72 rounded-full bg-purple-700 blur-[150px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.8 }}
        className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-700 blur-[150px]"
      />

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 text-center px-4">
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-5xl md:text-7xl font-extrabold tracking-wide 
            bg-gradient-to-r from-purple-400 to-blue-400 
            text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(128,0,255,0.4)]
          "
        >
          Hear the Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          HyperSoniK brings you the finest sound tech — curated, rated, and engineered for perfection.
        </motion.p>

        {/* --- CTA BUTTONS --- */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex items-center justify-center gap-6"
        >
          <Link to="/products">
          <button className="
            px-6 py-3 rounded-xl font-semibold text-lg
            bg-gradient-to-br from-purple-600 to-blue-600
            shadow-lg text-white
            hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]
            hover:scale-105 transition-all
          ">
            Explore Products
          </button>
          </Link>

          <button className="
            px-6 py-3 rounded-xl font-semibold text-lg
            border border-purple-500 text-purple-300
            hover:bg-purple-600 hover:text-white hover:shadow-xl
            transition-all
          ">
            See Reviews
          </button>
        </motion.div>

        {/* --- AUDIO BAR VISUALIZER --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex justify-center items-end gap-[6px]"
        >
          {bars.map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 10 }}
              animate={{
                height: [10, 40, 15, 60, 25, 45, 10][i % 7],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                delay: i * 0.05,
                repeatType: "reverse",
              }}
              className="w-[5px] bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"
            />
          ))}
        </motion.div>

      </div>

    </section>
  );
};

export default HeroSection;
