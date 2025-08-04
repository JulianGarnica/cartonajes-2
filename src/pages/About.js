import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
          Acerca de Nosotros
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="background-primary p-8 rounded-lg shadow-lg text-white"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-semibold mb-4">Nuestra Misión</h2>
            <p className="text-lg leading-relaxed">
              Ser líderes en la fabricación y comercialización de soluciones de empaque de cartón troquelado, superando las expectativas de nuestros clientes a través de la innovación, calidad y un servicio excepcional. Nos comprometemos con la sostenibilidad y el desarrollo de nuestro equipo.
            </p>
          </motion.div>

          <motion.div
            className="background-secondary p-8 rounded-lg shadow-lg text-white"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Nuestra Visión</h2>
            <p className="text-lg leading-relaxed">
              Consolidarnos como la empresa referente en la industria del cartón troquelado a nivel nacional e internacional, reconocida por nuestra excelencia operativa, compromiso ambiental y la capacidad de transformar ideas en empaques funcionales y estéticos.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-xl text-gray-700 leading-relaxed">
            En Cartonajes Troquelados S.A.S., cada caja cuenta una historia de dedicación y precisión.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;