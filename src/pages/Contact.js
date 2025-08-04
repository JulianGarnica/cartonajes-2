import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario, por ejemplo, a una API
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

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
          Contáctenos
        </motion.h1>

        <motion.div
          className="max-w-2xl mx-auto background-primary p-8 rounded-lg shadow-lg text-white"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-lg text-center mb-8">
            ¿Tienes alguna pregunta o necesitas una cotización? ¡Envíanos un mensaje!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full background-secondary text-white py-3 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Mensaje
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;