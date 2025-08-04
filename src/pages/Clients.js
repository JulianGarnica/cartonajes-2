import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
'/cartonajes-1/img/artesanias.png',
  '/cartonajes-1/img/peldar.webp',
  '/cartonajes-1/img/cristar.jpg',
  '/cartonajes-1/img/discordoba.png',
  '/cartonajes-1/img/ebel.png',
  '/cartonajes-1/img/idlcb.jpg',
];

const Clients = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl font-bold text-center color-secondary mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestros Clientes
        </motion.h1>

        <motion.p
          className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          Estamos orgullosos de trabajar con una amplia gama de empresas, grandes y pequeñas, ayudándolas a destacar con soluciones de empaque personalizadas y de alta calidad.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="p-2 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={logo} alt={`Cliente ${index + 1}`} className="max-w-full h-auto" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Clients;