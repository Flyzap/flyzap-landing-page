
import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import IntegrationIcon from '../components/IntegrationIcon';

const IntegrationsSection: React.FC = () => {
  const integrations = [
    {
      name: 'WhatsApp',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png'
    },
    {
      name: 'Instagram',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/150px-Instagram_icon.png'
    },
    {
      name: 'Google',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png'
    },
    {
      name: 'Salesforce',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/150px-Salesforce.com_logo.svg.png'
    },
    {
      name: 'Hubspot',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/HubSpot_Logo.svg/150px-HubSpot_Logo.svg.png'
    },
    {
      name: 'SAP',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/150px-SAP_2011_logo.svg.png'
    },
    {
      name: 'Shopify',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/150px-Shopify_logo_2018.svg.png'
    },
    {
      name: 'Zoom',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Zoom_Logo_2022.svg/150px-Zoom_Logo_2022.svg.png'
    }
  ];

  return (
    <section id="integrations" className="section-padding bg-flyzap-black-light py-20">
      <Container>
        <SectionHeading 
          title="Funciona com as ferramentas que você já usa"
          subtitle="O FlyZap se integra com diversos sistemas e plataformas para oferecer uma experiência de automação completa e sem interrupções."
          centered
        />
        
        <div className="mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6">
            {integrations.map((integration, index) => (
              <IntegrationIcon
                key={index}
                name={integration.name}
                iconUrl={integration.iconUrl}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-flyzap-black rounded-xl border border-gray-800 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Não encontrou a integração que precisa?</h3>
          <p className="text-gray-400 mb-6">Nossa API aberta permite integrar o FlyZap com praticamente qualquer sistema. Nossa equipe pode ajudar a criar integrações personalizadas para seu negócio.</p>
          <a href="#" className="text-flyzap-green hover:text-flyzap-green-light hover:underline">Fale com nossa equipe de integrações</a>
        </div>
      </Container>
    </section>
  );
};

export default IntegrationsSection;
