import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Award, Heart, Target, MessageCircle, Shield } from 'lucide-react';

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
          
          {/* Mission Section - PRIMEIRO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1A1D23] to-[#2C3440] text-white p-12 rounded-2xl shadow-2xl mb-20 border border-[#5B9A8B]/20"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield size={40} className="text-[#5B9A8B]" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Compromisso Profissional</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-100 text-center mb-6">
                O escritório é <span className="text-[#5B9A8B] font-semibold">comprometido</span> a prestar todos os serviços jurídicos aqui descritos com o <span className="font-semibold">mais elevado padrão de diligência, ética e profissionalismo</span>, observando integralmente as normas da Ordem dos Advogados do Brasil e os princípios fundamentais que regem a advocacia.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-100 text-center">
                A atuação será pautada por <span className="text-[#5B9A8B] font-semibold">transparência, responsabilidade e empenho absoluto</span> na busca da solução mais adequada e vantajosa para os seus interesses.
              </p>
            </div>
          </motion.div>

          {/* Profile Section - DEPOIS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/images/cinthya-new.jpeg" 
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
              <p className="text-lg text-[#5B9A8B] font-semibold mb-6">OAB/PA nº 38.939</p>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Formada em Direito pelo CESUPA (Centro Universitário do Estado do Pará), a Dra. Cinthya Nascimento é uma advogada com sólida formação jurídica e paixão pelo Direito.
                </p>
                <p>
                  Natural de Belém/PA, Cinthya é mãe, mulher e filha que encontrou na advocacia sua verdadeira vocação. Com atuação em <span className="font-semibold text-[#1A1D23]">múltiplas áreas do Direito</span> — Criminal, Penal Militar, Cível, Previdenciário, Trabalhista, Tributário e Direito Público — oferece atendimento completo e especializado para cada necessidade jurídica.
                </p>
                <p>
                  Extremamente competitiva e determinada, sua filosofia profissional é clara: <span className="font-semibold italic">não entra para perder</span>. Dedica sua carreira à defesa incansável dos direitos de seus clientes com seriedade, técnica e humanização.
                </p>
                <p>
                  O compromisso com a ética, transparência e excelência profissional são pilares fundamentais de sua atuação, garantindo que cada cliente receba atendimento personalizado e estratégico.
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
