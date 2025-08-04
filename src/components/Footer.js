import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      className="background-secondary text-white py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 color-primary">Cartonajes Troquelados S.A.S.</h3>
          <p className="text-gray-300">
            Expertos en soluciones de empaque innovadoras y sostenibles.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 color-primary">Mapa del Sitio</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Inicio</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">Acerca de Nosotros</Link></li>
            <li><Link to="/facilities" className="text-gray-300 hover:text-white transition-colors duration-300">Instalaciones</Link></li>
            <li><Link to="/clients" className="text-gray-300 hover:text-white transition-colors duration-300">Nuestros Clientes</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contáctenos</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 color-primary">Contacto</h3>
          <p className="text-gray-300">
            Dirección: Calle Ficticia 123, Ciudad Imaginaria, País de Nunca Jamás
          </p>
          <p className="text-gray-300">
            Teléfono: +123 456 7890
          </p>
          <p className="text-gray-300">
            Email: info@cartonajes.com
          </p>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8 pt-8 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Cartonajes Troquelados S.A.S. Todos los derechos reservados.
      </div>
    </motion.footer>
  );
};

export default Footer;