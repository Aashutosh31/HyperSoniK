import React,{useState} from "react";
import { motion,AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HiOutlineUser,HiMenu,HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Earphones", to: "/earphones" },
    { name: "Headphones", to: "/headphones" },
    { name: "Speakers", to: "/speakers" },
    { name: "Reviews", to: "/reviews" },
    { name: "Top Deals", to: "/deals" },
  ]

return (
  <div className="fixed top-0 left-0 w-full z-50">
    <nav className="bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* --- Brand Logo --- */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            HyperSoniK
          </h1>
        </Link>

        {/* --- Desktop Nav Links --- */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className="text-white/80 hover:text-white transition font-medium relative group"
            >
              {link.name}
              <span className="
                absolute left-0 -bottom-1 h-[2px] w-0 
                group-hover:w-full bg-gradient-to-r from-purple-500 to-blue-500 
                transition-all duration-300
              " />
            </Link>
          ))}
        </div>

        {/* --- Desktop Sign In Button --- */}
        <div className="hidden md:block">
          <button className="
            px-4 py-2 rounded-xl font-semibold
            bg-gradient-to-br from-purple-600 to-blue-600
            text-white shadow-lg flex items-center gap-2
            hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]
            transition-all
          ">
            <HiOutlineUser size={20} />
            Sign In
          </button>
        </div>

        {/* --- Mobile Menu Icon --- */}
        <div className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
        </div>
      </div>
    </nav>

    {/* --- Mobile Dropdown Menu --- */}
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="
            bg-black/80 backdrop-blur-xl border-b border-white/10
            md:hidden px-6 py-4 space-y-4
          "
        >
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="
                block text-white/90 text-lg font-medium
                border-b border-white/10 pb-2
              "
            >
              {link.name}
            </Link>
          ))}

          <button className="
            w-full py-3 rounded-xl font-semibold
            bg-gradient-to-br from-purple-600 to-blue-600 text-white
            flex items-center justify-center gap-2
          ">
            <HiOutlineUser size={20} />
            Sign In
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  );
};

export default Navbar;
