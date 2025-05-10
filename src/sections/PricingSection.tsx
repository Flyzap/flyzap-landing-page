
import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Check, X } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface PriceFeature {
  name: string;
  essencial: boolean | string;
  profissional: boolean | string;
  premium: boolean | string;
}

const PricingSection: React.FC = () => {
  const features: PriceFeature[] = [
    { 
      name: "Atendimento automático 24/7", 
      essencial: true, 
      profissional: true, 
      premium: true 
    },
    { 
      name: "Integração WhatsApp", 
      essencial: true, 
      profissional: true, 
      premium: true 
    },
    { 
      name: "Integração Instagram", 
      essencial: false, 
      profissional: true, 
      premium: true 
    },
    { 
      name: "Número de atendimentos mensais", 
      essencial: "Até 300", 
      profissional: "Até 1000", 
      premium: "Ilimitado" 
    },
    { 
      name: "Personalização de respostas", 
      essencial: "Básica", 
      profissional: "Avançada", 
      premium: "Total" 
    },
    { 
      name: "Integração com agenda", 
      essencial: false, 
      profissional: true, 
      premium: true 
    },
    { 
      name: "Relatórios e análises", 
      essencial: "Básicos", 
      profissional: "Completos", 
      premium: "Premium" 
    },
    { 
      name: "Suporte", 
      essencial: "Email", 
      profissional: "Email e Chat", 
      premium: "Prioritário" 
    },
  ];

  return (
    <section id="planos" className="py-20 bg-gradient-to-b from-flyzap-black-light to-flyzap-black">
      <Container>
        <SectionHeading 
          title="Planos e preços"
          subtitle="Escolha o plano ideal para o seu negócio"
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Essencial Plan */}
          <div className="bg-flyzap-black-light border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-flyzap-green/30 hover:shadow-lg hover:shadow-flyzap-green/10">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-xl font-semibold mb-2">Essencial</h3>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold">R$197</span>
                <span className="text-gray-400 mb-1">/mês</span>
              </div>
              <p className="mt-4 text-gray-400">Ideal para profissionais autônomos e pequenas clínicas</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {typeof feature.essencial === 'boolean' ? (
                      feature.essencial ? (
                        <Check className="text-flyzap-green shrink-0 mt-1" size={18} />
                      ) : (
                        <X className="text-red-500 shrink-0 mt-1" size={18} />
                      )
                    ) : (
                      <Check className="text-flyzap-green shrink-0 mt-1" size={18} />
                    )}
                    <span className="ml-2">
                      {feature.name}
                      {typeof feature.essencial !== 'boolean' && (
                        <span className="block text-sm text-gray-400">{feature.essencial}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Começar agora
                </Button>
              </div>
            </div>
          </div>
          
          {/* Profissional Plan */}
          <div className="bg-flyzap-black-light border-2 border-flyzap-green rounded-xl overflow-hidden relative transform scale-105 shadow-lg shadow-flyzap-green/20">
            <div className="absolute top-0 left-0 w-full bg-flyzap-green text-center py-1 text-flyzap-black font-medium">
              Mais Popular
            </div>
            <div className="p-6 border-b border-gray-800 pt-10">
              <h3 className="text-xl font-semibold mb-2">Profissional</h3>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold">R$397</span>
                <span className="text-gray-400 mb-1">/mês</span>
              </div>
              <p className="mt-4 text-gray-400">Perfeito para clínicas de médio porte em crescimento</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {typeof feature.profissional === 'boolean' ? (
                      feature.profissional ? (
                        <Check className="text-flyzap-green shrink-0 mt-1" size={18} />
                      ) : (
                        <X className="text-red-500 shrink-0 mt-1" size={18} />
                      )
                    ) : (
                      <Check className="text-flyzap-green shrink-0 mt-1" size={18} />
                    )}
                    <span className="ml-2">
                      {feature.name}
                      {typeof feature.profissional !== 'boolean' && (
                        <span className="block text-sm text-gray-400">{feature.profissional}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button 
                  className="w-full"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Começar agora
                </Button>
              </div>
            </div>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-flyzap-black-light border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-flyzap-green/30 hover:shadow-lg hover:shadow-flyzap-green/10">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold">R$697</span>
                <span className="text-gray-400 mb-1">/mês</span>
              </div>
              <p className="mt-4 text-gray-400">Para clínicas múltiplas unidades e alto volume de atendimento</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {typeof feature.premium === 'boolean' ? (
                      feature.premium ? (
                        <Check className="text-flyzap-green shrink-0 mt-1" size={18} />
                      ) : (
                        <X className="text-red-500 shrink-0 mt-1" size={18} />
                      )
                    ) : (
                      <Check className="text-flyzap-green shrink-0 mt-1" size={18} />
                    )}
                    <span className="ml-2">
                      {feature.name}
                      {typeof feature.premium !== 'boolean' && (
                        <span className="block text-sm text-gray-400">{feature.premium}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Começar agora
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-gray-400">
            Todos os planos incluem setup gratuito e 14 dias de garantia. 
            Precisa de um plano personalizado para sua empresa? 
            <a href="#contato" className="text-flyzap-green hover:underline ml-1">Entre em contato conosco</a>.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
