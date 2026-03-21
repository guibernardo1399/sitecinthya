import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contato = () => {
  const whatsappNumber = '5591998401830';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      toast.error('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(91) 99840-1830',
      link: `https://wa.me/${whatsappNumber}`,
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'cinthyanascimentoadv@gmail.com',
      link: 'mailto:cinthyanascimentoadv@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Atendimento',
      value: 'Em todo o Brasil',
      link: null,
    },
    {
      icon: Clock,
      title: 'Horário',
      value: 'Segunda a Sexta, 9h - 18h',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="contato-page">
      {/* Hero Section */}
      <section className="bg-[#1A1D23] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Entre em Contato</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para ouvir seu caso e oferecer a melhor solução jurídica
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* WhatsApp Priority Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#25D366] text-white p-8 rounded-lg shadow-lg mb-12 text-center"
          >
            <MessageCircle size={48} className="mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">Atendimento Rápido via WhatsApp</h2>
            <p className="text-lg mb-6 opacity-90">Para casos urgentes, entre em contato diretamente pelo WhatsApp</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Olá! Preciso de orientação jurídica.`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="priority-whatsapp-button"
              className="inline-flex items-center gap-2 bg-white text-[#25D366] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle size={20} />
              <span>Falar Agora no WhatsApp</span>
            </a>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#1A1D23] mb-8 tracking-tight">Informações de Contato</h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-3 bg-[#5B9A8B]/10 rounded-lg flex-shrink-0">
                        <Icon size={24} className="text-[#5B9A8B]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{item.title}</h3>
                        <p className="text-lg text-[#1A1D23] font-medium">{item.value}</p>
                      </div>
                    </div>
                  );

                  return item.link ? (
                    <a
                      key={index}
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      data-testid={`contact-info-${index}`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index} data-testid={`contact-info-${index}`}>
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-[#1A1D23] mb-2 tracking-tight">OAB/PA nº 38.939</h3>
                <p className="text-gray-600">Dra. Cinthya Nascimento - Advogada inscrita na Ordem dos Advogados do Brasil, seção Pará</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold text-[#1A1D23] mb-2 tracking-tight">Envie sua Mensagem</h2>
                <p className="text-gray-600 mb-8">Preencha o formulário e entraremos em contato em breve</p>

                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div>
                    <Label htmlFor="name" className="text-[#1A1D23] font-semibold">Nome Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="mt-2 border-gray-300 focus:border-[#5B9A8B] focus:ring-[#5B9A8B]"
                      data-testid="contact-name-input"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-[#1A1D23] font-semibold">Telefone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="mt-2 border-gray-300 focus:border-[#5B9A8B] focus:ring-[#5B9A8B]"
                      data-testid="contact-phone-input"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[#1A1D23] font-semibold">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="mt-2 border-gray-300 focus:border-[#5B9A8B] focus:ring-[#5B9A8B]"
                      data-testid="contact-email-input"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#1A1D23] font-semibold">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos sobre seu caso ou dúvida jurídica..."
                      rows={6}
                      className="mt-2 border-gray-300 focus:border-[#5B9A8B] focus:ring-[#5B9A8B]"
                      data-testid="contact-message-textarea"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#1A1D23] hover:bg-[#2C3440] text-white py-6 text-lg font-semibold rounded-full transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="contact-submit-button"
                  >
                    {loading ? (
                      <span>Enviando...</span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send size={20} />
                        Enviar Mensagem
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;