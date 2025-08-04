import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/cartonajes-1/img/imagen-1.jpg',
  '/cartonajes-1/img/imagen-2.jpg',
  '/cartonajes-1/img/imagen-3.jpg'
];

const logo = '/cartonajes-1/img/logo-blanco.png';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia de imagen cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slider Image ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white text-center leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex justify-center items-center ">
                  <img src={logo} alt={`Logo cartonajesTroquelados`} className="max-h-20 max-w-full object-contain justify-center items-center logo-entrada" />
                </div>
          <br />
          <span className="text-3xl md:text-5xl font-normal color-primary">Innovación en Empaques</span>
        </motion.h1>
      </div>
    </div>
  );
};

export default Home;