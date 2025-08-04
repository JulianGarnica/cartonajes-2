import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // ¡Aquí estaba el detalle!
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-md"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold color-secondary">
          Cartonajes Troquelados
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-lg font-medium text-gray-700 hover:color-primary transition-colors duration-300">Inicio</Link>
          <Link to="/about" className="text-lg font-medium text-gray-700 hover:color-primary transition-colors duration-300">Acerca de Nosotros</Link>
          <Link to="/facilities" className="text-lg font-medium text-gray-700 hover:color-primary transition-colors duration-300">Instalaciones</Link>
          <Link to="/clients" className="text-lg font-medium text-gray-700 hover:color-primary transition-colors duration-300">Nuestros Clientes</Link>
          <Link to="/contact" className="text-lg font-medium text-gray-700 hover:color-primary transition-colors duration-300">Contáctenos</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link to="/" className="text-lg font-medium text-gray-700 hover:color-primary transition-colors duration-300" onClick={() => setIsOpen(false)}>Inicio</Link>
              <Link to="/about" className="text-lg font-medium text-gray-700 hover:color-primary transition-colors duration-300" onClick={() => setIsOpen(false)}>Acerca de Nosotros</Link>
              <Link to="/facilities" className="text-lg font-medium text-gray-700 hover:color-primary transition-colors duration-300" onClick={() => setIsOpen(false)}>Instalaciones</Link>
              <Link to="/clients" className="text-lg font-medium text-gray-700 hover:color-primary transition-colors duration-300" onClick={() => setIsOpen(false)}>Nuestros Clientes</Link>
              <Link to="/contact" className="text-lg font-medium text-gray-700 hover:color-primary transition-colors duration-300" onClick={() => setIsOpen(false)}>Contáctenos</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;