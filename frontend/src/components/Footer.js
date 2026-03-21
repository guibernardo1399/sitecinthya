import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = '5591998401830';

  return (
    <footer className="bg-[#1A1D23] text-gray-300" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo.jpg" 
                alt="Cinthya Nascimento Advocacia" 
                className="h-12 w-12 rounded-full object-cover border-2 border-gray-600"
              />
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Cinthya Nascimento</h3>
                <p className="text-[#5B9A8B] text-sm">Advocacia</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Escritório focado em oferecer atendimento estratégico, humanizado e eficiente em diversas áreas do direito, com atuação em todo o Brasil.
            </p>
            <p className="text-sm text-gray-500">
              OAB/PA nº 38.939
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#5B9A8B] transition-colors" data-testid="footer-link-inicio">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/areas" className="hover:text-[#5B9A8B] transition-colors" data-testid="footer-link-areas">
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-[#5B9A8B] transition-colors" data-testid="footer-link-sobre">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-[#5B9A8B] transition-colors" data-testid="footer-link-contato">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-[#5B9A8B] mt-0.5 flex-shrink-0" />
                <a href={`https://wa.me/${whatsappNumber}`} className="hover:text-[#5B9A8B] transition-colors" data-testid="footer-phone">
                  (91) 99840-1830
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-[#5B9A8B] mt-0.5 flex-shrink-0" />
                <a href="mailto:cinthyanascimentoadv@gmail.com" className="hover:text-[#5B9A8B] transition-colors" data-testid="footer-email">
                  cinthyanascimentoadv@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#5B9A8B] mt-0.5 flex-shrink-0" />
                <span>Atendimento em todo o Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Cinthya Nascimento Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;