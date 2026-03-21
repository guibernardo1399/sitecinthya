import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Gavel, FileText, Users, Scale, Building, Landmark, MessageCircle } from 'lucide-react';

const AreasDeAtuacao = () => {
  const whatsappNumber = '5591998401830';

  const areas = [
    {
      title: 'Direito Criminal',
      icon: Shield,
      description: 'Defesa completa em processos criminais, desde a investigação até o julgamento final.',
      services: [
        'Defesa em inquéritos policiais',
        'Acompanhamento em audiências',
        'Recursos e habeas corpus',
        'Defesa em processos de trânsito',
        'Crimes contra patrimônio e pessoa',
      ],
      urgent: true,
    },
    {
      title: 'Direito Penal Militar',
      icon: Gavel,
      description: 'Especialização em processos de justiça militar, defesa de militares e ciívis em audiências militares.',
      services: [
        'Defesa em processos militares',
        'Recursos em tribunais militares',
        'Acompanhamento disciplinar',
        'Habeas corpus militar',
        'Assessoria preventiva',
      ],
      urgent: true,
    },
    {
      title: 'Direito Cível',
      icon: FileText,
      description: 'Resolução de conflitos entre pessoas e empresas, garantindo seus direitos patrimoniais e pessoais.',
      services: [
        'Ações de cobrança',
        'Contratos e obrigações',
        'Indenizações por danos',
        'Questões condominiais',
        'Responsabilidade civil',
      ],
    },
    {
      title: 'Direito Previdenciário',
      icon: Users,
      description: 'Conquiste seus benefícios junto ao INSS: aposentadorias, pensões e auxílios.',
      services: [
        'Aposentadoria por idade e tempo',
        'Aposentadoria especial',
        'Pensão por morte',
        'Auxílio-doença e acidente',
        'Revisão de benefícios',
      ],
    },
    {
      title: 'Direito Trabalhista',
      icon: Scale,
      description: 'Defesa dos direitos do trabalhador e assessoria jurídica para empresas em questões trabalhistas.',
      services: [
        'Ações trabalhistas',
        'Rescisão de contrato',
        'Verbas rescisórias',
        'Horas extras e adicionais',
        'Assédio moral e discriminação',
      ],
    },
    {
      title: 'Direito Tributário',
      icon: Building,
      description: 'Orientação e defesa em questões fiscais e tributárias para pessoas físicas e jurídicas.',
      services: [
        'Parcelamento de dívidas fiscais',
        'Impugnação de autos de infração',
        'Revisão de tributos',
        'Planejamento tributário',
        'Defesas administrativas',
      ],
    },
    {
      title: 'Direito Público',
      icon: Landmark,
      description: 'Atuação em causas que envolvem a relação entre cidadãos e o poder público.',
      services: [
        'Mandados de segurança',
        'Ações contra o Estado',
        'Concursos públicos',
        'Licitações e contratos administrativos',
        'Responsabilidade do Estado',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="areas-page">
      {/* Header */}
      <section className="bg-[#0F172A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Áreas de Atuação</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Atendimento especializado em diversas áreas do direito, sempre com foco em estratégia, humanização e eficiência.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
                  data-testid={`area-detail-card-${index}`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-lg flex-shrink-0 ${
                      area.urgent ? 'bg-red-50' : 'bg-[#C5A059]/10'
                    }`}>
                      <Icon size={32} className={area.urgent ? 'text-red-600' : 'text-[#C5A059]'} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#0F172A] mb-2 tracking-tight">{area.title}</h2>
                      {area.urgent && (
                        <span className="inline-block bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-semibold">ATENDIMENTO URGENTE</span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">{area.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-[#0F172A] uppercase tracking-wide mb-3">O que fazemos:</h3>
                    <ul className="space-y-2">
                      {area.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <span className="text-[#C5A059] mt-1 flex-shrink-0">•</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Olá! Preciso de ajuda com ${area.title}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`area-whatsapp-button-${index}`}
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#20BD5A] transition-all hover:scale-105 shadow-md"
                  >
                    <MessageCircle size={18} />
                    <span>Tirar Dúvida no WhatsApp</span>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Não encontrou sua área?</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Entre em contato conosco. Podemos ajudá-lo em outras questões jurídicas.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de tirar uma dúvida sobre outra área jurídica.`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="areas-cta-button"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#20BD5A] transition-all hover:scale-105 shadow-lg"
          >
            <MessageCircle size={20} />
            <span>Falar com Especialista</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AreasDeAtuacao;