
import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Depois que implementamos o FlyZap, aumentamos em 35% os agendamentos e reduzimos o número de faltas em 40%. O bot também responde dúvidas comuns que antes tomavam muito tempo da nossa recepção.",
      name: "Dra. Ana Cardoso",
      company: "Clínica Viver Bem",
      industry: "Dermatologia",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Incrível como o bot consegue responder de forma tão natural. Nossos pacientes nem percebem que estão falando com uma IA. Agora consigo focar mais no atendimento clínico e menos em tarefas administrativas.",
      name: "Dr. Ricardo Mendes",
      company: "Centro Odontológico Sorria",
      industry: "Odontologia",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "A facilidade de configuração e a integração com meu sistema de agendamento foram perfeitas. O suporte da equipe FlyZap é excelente e estão sempre disponíveis para ajudar com qualquer dúvida.",
      name: "Dra. Juliana Silva",
      company: "Estética JuBela",
      industry: "Estética",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section id="depoimentos" className="section-padding bg-flyzap-black py-20">
      <Container>
        <SectionHeading 
          title="O que nossos clientes dizem"
          subtitle="Veja como o FlyZap está transformando o atendimento de profissionais e clínicas de saúde"
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
      </Container>
    </section>
  );
};

export default TestimonialsSection;
