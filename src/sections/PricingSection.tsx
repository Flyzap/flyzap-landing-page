import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Check } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-flyzap-black py-20 lg:py-24 xl:py-28">
      <Container>
        <SectionHeading 
          title="Preços acessíveis para todos os negócios"
          subtitle="Escolha o plano que melhor se adapta às necessidades do seu negócio e comece a automatizar seu atendimento hoje mesmo."
          centered
        />
        
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="relative p-4 sm:p-6 md:p-8 bg-flyzap-black-light rounded-2xl border border-gray-800 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-flyzap-green/5 to-transparent"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="text-center lg:text-left">
                <h3 className="heading-md mb-2">FlyZap Premium</h3>
                <p className="text-responsive text-gray-400 mb-6">Automatização completa para seu atendimento</p>
                
                <div className="mb-6">
                  <div className="text-3xl sm:text-4xl font-bold">
                    <span className="text-white">R$ 390</span>
                    <span className="text-gray-500 text-lg sm:text-xl">/mês</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Cobrado mensalmente, sem contrato de longo prazo</p>
                </div>
                
                <Button className="w-full sm:w-auto sm:min-w-[200px] mb-4 button-responsive">Começar agora</Button>
                <p className="text-center text-xs sm:text-sm text-gray-400">Garantia de 7 dias. Sem risco.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-flyzap-green">Tudo incluso:</h4>
                <ul className="space-y-3">
                  {[
                    'Atendimento 24/7 automatizado',
                    'Integração com WhatsApp, Instagram e Site',
                    'IA que responde como humano',
                    'Agendamentos automáticos',
                    'Painel administrativo completo',
                    'Relatórios e métricas detalhadas',
                    'Suporte técnico dedicado',
                    'Configuração inicial assistida'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-flyzap-green flex-shrink-0 mr-3 mt-1" size={16} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Comparison table with improved mobile responsiveness */}
          <div className="mt-12 md:mt-16">
            <h3 className="heading-sm mb-6 text-center">Comparativo: Antes x Depois do FlyZap</h3>
            
            {/* Mobile: Card layout */}
            <div className="block md:hidden space-y-4">
              {[
                {
                  aspect: 'Disponibilidade',
                  before: 'Limitada ao horário comercial',
                  after: 'Atendimento 24/7, todos os dias'
                },
                {
                  aspect: 'Tempo de resposta',
                  before: '30 minutos a várias horas',
                  after: 'Instantâneo (menos de 5 segundos)'
                },
                {
                  aspect: 'Capacidade de atendimento',
                  before: 'Limitada à equipe disponível',
                  after: 'Ilimitada, sem fila de espera'
                },
                {
                  aspect: 'Qualidade de atendimento',
                  before: 'Variável, depende do operador',
                  after: 'Consistente e personalizada'
                },
                {
                  aspect: 'Custo mensal',
                  before: 'R$ 2.000+ (salário + encargos)',
                  after: 'R$ 390/mês (plano completo)'
                }
              ].map((item, index) => (
                <div key={index} className="bg-flyzap-black-light rounded-lg border border-gray-800 p-4">
                  <h4 className="font-semibold text-flyzap-green mb-3">{item.aspect}</h4>
                  <div className="space-y-2">
                    <div className="bg-red-500/10 rounded p-3 border-l-2 border-red-500">
                      <p className="text-xs text-gray-400 mb-1">Antes:</p>
                      <p className="text-sm">{item.before}</p>
                    </div>
                    <div className="bg-flyzap-green/10 rounded p-3 border-l-2 border-flyzap-green">
                      <p className="text-xs text-flyzap-green mb-1">Depois:</p>
                      <p className="text-sm font-medium">{item.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Table layout */}
            <div className="hidden md:block">
              <ScrollArea className="w-full rounded-xl border border-gray-800 bg-flyzap-black-light">
                <div className="min-w-[600px]">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="p-4 text-left border-b border-gray-800 bg-flyzap-black-light w-1/3"></th>
                        <th className="p-4 text-left border-b border-gray-800 bg-flyzap-black-light text-gray-400 w-1/3">Antes (Atendimento Tradicional)</th>
                        <th className="p-4 text-left border-b border-gray-800 bg-flyzap-black-light text-flyzap-green w-1/3">Depois (Com FlyZap)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          aspect: 'Disponibilidade',
                          before: 'Limitada ao horário comercial',
                          after: 'Atendimento 24/7, todos os dias'
                        },
                        {
                          aspect: 'Tempo de resposta',
                          before: '30 minutos a várias horas',
                          after: 'Instantâneo (menos de 5 segundos)'
                        },
                        {
                          aspect: 'Capacidade de atendimento',
                          before: 'Limitada à equipe disponível',
                          after: 'Ilimitada, sem fila de espera'
                        },
                        {
                          aspect: 'Qualidade de atendimento',
                          before: 'Variável, depende do operador',
                          after: 'Consistente e personalizada'
                        },
                        {
                          aspect: 'Custo mensal',
                          before: 'R$ 2.000+ (salário + encargos)',
                          after: 'R$ 390/mês (plano completo)'
                        }
                      ].map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-flyzap-black-light/30' : ''}>
                          <td className="p-4 border-b border-gray-800 font-medium">{row.aspect}</td>
                          <td className="p-4 border-b border-gray-800 text-gray-400">{row.before}</td>
                          <td className="p-4 border-b border-gray-800 text-white">{row.after}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
