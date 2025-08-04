import React from 'react';
import { motion } from 'framer-motion';

const Facilities = () => {
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
          Nuestras Instalaciones
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              src="https://www.youtube.com/embed/6_p2W9uQ3MI?autoplay=1&controls=0&nosound&mute=1"
              title="Vídeo presentación instalaciones"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          className="background-primary p-8 rounded-lg shadow-lg text-white mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-semibold mb-4">Ubicación Principal</h2>
          <p className="text-lg leading-relaxed mb-6">
            Visítanos en nuestra moderna planta de producción, equipada con la última tecnología para garantizar la máxima calidad en cada producto.
          </p>
          <p className="text-xl font-bold">
            Dirección: Cl. 8A # 36 - 08, Zipaquirá, Cundinamarca
          </p>
        </motion.div>

        <motion.div
          className="w-full h-96 rounded-lg shadow-lg overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1121.1379676764761!2d-73.98029206340617!3d5.029871939150215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9975ac2e9727%3A0x437fb6dc29dd7ea9!2sCartonajes%20Troquelados%20S.A.S!5e1!3m2!1ses!2sco!4v1754272754147!5m2!1ses!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Facilities;