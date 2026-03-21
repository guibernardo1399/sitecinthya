import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Home from '@/pages/Home';
import AreasDeAtuacao from '@/pages/AreasDeAtuacao';
import Sobre from '@/pages/Sobre';
import Contato from '@/pages/Contato';
import '@/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/areas" element={<AreasDeAtuacao />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;
