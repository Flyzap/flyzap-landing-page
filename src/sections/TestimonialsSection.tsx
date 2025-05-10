
import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Depois do FlyZap, dobramos os atendimentos com a metade do esforço. A automação nos permitiu crescer sem precisar contratar mais funcionários.",
      name: "Ana Cardoso",
      company: "Clínica Viver Bem",
      industry: "Saúde",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Implementamos o FlyZap há 3 meses e já vimos um aumento de 40% em nossos agendamentos. A IA captura clientes que antes desistiam por demora no atendimento.",
      name: "Ricardo Mendes",
      company: "Ótica Visão",
      industry: "Varejo",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "A naturalidade das respostas é impressionante. Nossos clientes não percebem que estão falando com um robot, o que mantém a experiência humana que valorizamos.",
      name: "Juliana Silva",
      company: "Estética JuBela",
      industry: "Beleza",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-flyzap-black-light py-20">
      <Container>
        <SectionHeading 
          title="O que nossos clientes dizem"
          subtitle="Empresas e profissionais que transformaram seu atendimento e aumentaram seus resultados com o FlyZap."
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              company={testimonial.company}
              industry={testimonial.industry}
              rating={testimonial.rating}
              imageUrl={testimonial.imageUrl}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
        
        {/* Testimonial metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { metric: '98%', label: 'Satisfação de clientes' },
            { metric: '45%', label: 'Aumento médio em vendas' },
            { metric: '70%', label: 'Redução no tempo de resposta' },
            { metric: '300+', label: 'Empresas atendidas' }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-flyzap-black rounded-xl border border-gray-800">
              <div className="text-3xl font-bold mb-2 gradient-text">{item.metric}</div>
              <div className="text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
