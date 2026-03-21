import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scale, Shield, Users, Clock, FileText, Gavel, MessageCircle } from 'lucide-react';

const Home = () => {
  const whatsappNumber = '5591998401830';
  const whatsappMessage = 'Olá! Gostaria de falar com um advogado agora.';

  const practiceAreas = [
    {
      title: 'Direito Criminal',
      description: 'Defesa em processos criminais com estratégias sólidas e atendimento urgente.',
      icon: Shield,
      colSpan: 'md:col-span-8',
      urgent: true,
    },
    {
      title: 'Direito Penal Militar',
      description: 'Especialização em casos de justiça militar e defesa de militares.',
      icon: Gavel,
      colSpan: 'md:col-span-4',
      urgent: true,
    },
    {
      title: 'Direito Cível',
      description: 'Soluções para conflitos entre pessoas e empresas.',
      icon: FileText,
      colSpan: 'md:col-span-4',
    },
    {
      title: 'Direito Previdenciário',
      description: 'Aposentadorias, pensões e benefícios do INSS.',
      icon: Users,
      colSpan: 'md:col-span-4',
    },
    {
      title: 'Direito Trabalhista',
      description: 'Defesa dos direitos do trabalhador e assessoria empresarial.',
      icon: Scale,
      colSpan: 'md:col-span-4',
    },
  ];

  const differentials = [
    {
      icon: MapPin,
      title: 'Atendimento Nacional',
      description: 'Atuação em todo o Brasil, online ou presencial',
    },
    {
      icon: Clock,
      title: 'Resposta Rápida',
      description: 'Atendimento ágil para situações urgentes',
    },
    {
      icon: Shield,
      title: 'Sigilo Profissional',
      description: 'Ética, confidencialidade e segurança total',
    },
  ];

  const howItWorks = [
    { step: '1', title: 'Contato', description: 'Entre em contato via WhatsApp ou formulário' },
    { step: '2', title: 'Análise', description: 'Analisamos seu caso com atenção e cuidado' },
    { step: '3', title: 'Estratégia', description: 'Definimos a melhor forma de resolver sua questão' },
    { step: '4', title: 'Ação', description: 'Atuamos com eficiência para defender seus direitos' },
  ];

  return (
    <div className="min-h-screen" data-testid="home-page">
      {/* Hero Section */}
      <section 
        className="relative min-h-[85vh] flex items-center bg-cover bg-center" 
        style={{ backgroundImage: `url('https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg')` }}
        data-testid="hero-section"
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Defesa Jurídica Especializada e Urgente
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Atendimento humanizado, estratégico e eficiente em todo o Brasil. Estamos prontos para defender seus direitos.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-button"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#20BD5A] transition-all hover:scale-105 active:scale-95 shadow-2xl btn-primary"
            >
              <MessageCircle size={24} />
              <span>Falar com Especialista Agora</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-[#F8F9FA]" data-testid="practice-areas-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-3">EXPERTISE JURÍDICA</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">Áreas de Atuação</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">Cobertura completa em diversas áreas do direito para atender suas necessidades</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${area.colSpan} bg-white p-8 rounded-lg border border-gray-200 practice-area-card cursor-pointer`}
                  data-testid={`practice-area-card-${index}`}
                >
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${
                    area.urgent ? 'bg-red-50' : 'bg-[#C5A059]/10'
                  }`}>
                    <Icon size={28} className={area.urgent ? 'text-red-600' : 'text-[#C5A059]'} />
                  </div>
                  {area.urgent && (
                    <span className="inline-block bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-semibold mb-3">URGENTE</span>
                  )}
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-tight">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{area.description}</p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Olá! Preciso de ajuda com ${area.title}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#25D366] font-semibold hover:gap-3 transition-all"
                    data-testid={`practice-area-whatsapp-${index}`}
                  >
                    Tirar dúvida <MessageCircle size={16} />
                  </a>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/areas"
              data-testid="view-all-areas-button"
              className="inline-block bg-[#0F172A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1E293B] transition-all hover:scale-105 shadow-lg"
            >
              Ver Todas as Áreas
            </Link>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-white" data-testid="differentials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-3">DIFERENCIAIS</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">Por Que Escolher Nosso Escritório</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8"
                  data-testid={`differential-card-${index}`}
                >
                  <div className="inline-flex p-4 bg-[#C5A059]/10 rounded-full mb-6">
                    <Icon size={32} className="text-[#C5A059]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-[#F8F9FA]" data-testid="about-teaser-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/7651571/pexels-photo-7651571.jpeg" 
                alt="Cinthya Nascimento"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                data-testid="about-image"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-3">SOBRE O ESCRITÓRIO</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6 tracking-tight">Comprometimento com a Justiça</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                O escritório Cinthya Nascimento Advocacia é focado em oferecer atendimento estratégico, humanizado e eficiente em diversas áreas do direito.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Com atuação em todo o Brasil, trabalhamos para garantir que seus direitos sejam defendidos com seriedade, ética e dedicação.
              </p>
              <Link
                to="/sobre"
                data-testid="about-learn-more-button"
                className="inline-block bg-[#0F172A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1E293B] transition-all hover:scale-105 shadow-lg"
              >
                Conheça Nossa História
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white" data-testid="how-it-works-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-3">PROCESSO</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">Como Funciona</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
                data-testid={`how-it-works-step-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C5A059] text-white text-2xl font-bold rounded-full mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0F172A] text-white" data-testid="final-cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Precisa de Ajuda Jurídica Agora?</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Não espere sua situação se agravar. Fale com nosso escritório e receba orientação especializada imediatamente.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="final-cta-whatsapp-button"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-[#20BD5A] transition-all hover:scale-105 active:scale-95 shadow-2xl btn-primary"
            >
              <MessageCircle size={24} />
              <span>Falar no WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Missing MapPin import
import { MapPin } from 'lucide-react';

export default Home;