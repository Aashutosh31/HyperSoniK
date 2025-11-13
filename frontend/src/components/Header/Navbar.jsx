import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          backdrop-blur-xl bg-black border-b border-white/10
          shadow-[0_0_20px_rgba(255,255,255,0.1)]
        "
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* --- BRAND LOGO --- */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="
                h-10 w-10 rounded-xl bg-gradient-to-br 
                from-purple-500 to-blue-600 shadow-lg
              "
            />
            <h1 className="
              text-2xl font-bold tracking-wide
              bg-gradient-to-r from-purple-400 to-blue-400 
              bg-clip-text text-transparent
            ">
              HyperSoniK
            </h1>
          </Link>

          {/* --- NAVIGATION LINKS --- */}
          <div className="hidden md:flex items-center gap-8">
            {["Earphones", "Headphones", "Speakers", "Reviews", "Top Deals"].map(
              (item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2 }}
                  className="relative group"
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-white/80 hover:text-white transition font-medium"
                  >
                    {item}
                  </Link>
                  <span className="
                    absolute left-0 -bottom-1 h-[2px] w-0 
                    group-hover:w-full bg-gradient-to-r 
                    from-purple-500 to-blue-500 transition-all
                    duration-300
                  " />
                </motion.div>
              )
            )}
          </div>

          {/* --- PROFILE / LOGIN BUTTON --- */}
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-4 py-2 rounded-xl font-semibold
              bg-gradient-to-br from-purple-600 to-blue-600
              text-white shadow-lg flex items-center gap-2
              hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]
              transition-all
            "
          >
            <HiOutlineUser size={20} />
            Sign In
          </motion.button>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
