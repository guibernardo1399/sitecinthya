import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Award, Heart, Target, MessageCircle } from 'lucide-react';

const Sobre = () => {
  const whatsappNumber = '5591998401830';

  const values = [
    {
      icon: Scale,
      title: 'Ética e Transparência',
      description: 'Trabalhamos com total transparência, mantendo nossos clientes sempre informados sobre cada etapa do processo.',
    },
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Entendemos que cada caso é único e envolve pessoas reais com necessidades específicas.',
    },
    {
      icon: Target,
      title: 'Estratégia e Eficiência',
      description: 'Buscamos sempre as melhores estratégias jurídicas para alcançar resultados efetivos.',
    },
    {
      icon: Award,
      title: 'Excelência Profissional',
      description: 'Atuação técnica de alto nível, sempre atualizada com as mudanças legislativas e jurisprudência.',
    },
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="sobre-page">
      {/* Hero Section */}
      <section className="bg-[#1A1D23] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Sobre Nós</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprometimento com a justiça e defesa dos seus direitos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/images/cinthya-profile.jpg" 
                alt="Dra. Cinthya Nascimento"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
                data-testid="lawyer-photo"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[#5B9A8B] font-semibold mb-3">ADVOGADA</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1D23] mb-4 tracking-tight">Dra. Cinthya Nascimento</h2>
              <p className="text-lg text-[#5B9A8B] font-semibold mb-6">OAB/PA nº 38.939 | 27 anos</p>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Formada em Direito pelo CESUPA (Centro Universitário do Estado do Pará), a Dra. Cinthya Nascimento é apaixonada por Direito Processual Penal e atua como advogada criminalista.
                </p>
                <p>
                  Com 27 anos e natural de Belém/PA, Cinthya é mãe, mulher e filha que encontrou no Direito Criminal sua vocação. Extremamente competitiva, sua filosofia profissional é clara: não entra para perder.
                </p>
                <p>
                  Dedica sua carreira à defesa dos direitos de seus clientes com seriedade, técnica e humanização, oferecendo atendimento personalizado e estratégico em diversas áreas do direito, com especial foco em Direito Criminal e Penal Militar.
                </p>
                <p>
                  O compromisso com a ética, transparência e excelência profissional são pilares fundamentais do escritório Cinthya Nascimento Advocacia.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 text-gray-600">
                <span className="font-semibold">Instagram:</span>
                <a 
                  href="https://instagram.com/cnadvocacia__" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#5B9A8B] hover:underline"
                >
                  @cnadvocacia__
                </a>
              </div>
            </motion.div>
          </div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-12 rounded-lg shadow-lg mb-16"
          >
            <h2 className="text-3xl font-bold text-[#1A1D23] mb-6 text-center tracking-tight">Nossa Missão</h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
              Oferecer serviços jurídicos de excelência, com atendimento humanizado, estratégico e eficiente, garantindo a defesa dos direitos e interesses de nossos clientes em todo o Brasil.
            </p>
          </motion.div>

          {/* Info Graphic Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <img 
              src="/images/cinthya-info.jpg" 
              alt="Quem é Cinthya?"
              className="rounded-lg shadow-2xl w-full max-w-3xl mx-auto h-auto object-cover"
            />
          </motion.div>

          {/* Values */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[#5B9A8B] font-semibold mb-3">NOSSOS VALORES</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1D23] tracking-tight">O Que Nos Guia</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm"
                    data-testid={`value-card-${index}`}
                  >
                    <div className="inline-flex p-3 bg-[#5B9A8B]/10 rounded-lg mb-4">
                      <Icon size={28} className="text-[#5B9A8B]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1D23] mb-3 tracking-tight">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A1D23] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">Vamos Conversar?</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Entre em contato e descubra como podemos ajudá-lo a resolver sua questão jurídica.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de conhecer mais sobre o escritório.`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="sobre-cta-button"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#20BD5A] transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle size={20} />
              <span>Falar no WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;