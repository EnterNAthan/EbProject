import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { LanguageSelector } from "../../components/LanguageSelector";

export const Services = (): JSX.Element => {
  const [currentLanguage, setCurrentLanguage] = React.useState("fr");

  const serviceFeatures = [
    {
      title: "Expertise sectorielle",
      description: "Des traductions précises et adaptées à votre domaine d'activité : industrie, santé, énergie, environnement, etc.",
      icon: "🎯",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      title: "Langues proposées",
      description: "Français, anglais, allemand (autres langues sur demande) pour élargir votre audience internationale.",
      icon: "🌐",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      title: "Respect des délais",
      description: "Des délais maîtrisés et un suivi personnalisé pour chaque projet, sans compromis sur la qualité.",
      icon: "⚡",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Confidentialité garantie",
      description: "Sécurité et discrétion assurées pour tous vos documents, de la prise en charge à la livraison.",
      icon: "🔒",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    }
  ];

  const services = [
    {
      title: "Traduction médicale & santé",
      description: "Faites traduire vos documents médicaux, rapports, notices et dossiers santé par un professionnel qui garantit la précision terminologique, la confidentialité et l'adaptation aux normes du secteur.",
      buttonText: "Demander un devis santé",
      icon: "🏥",
      image: "/chatgpt-image-12-juin-2025--22-48-40-removebg-preview-1.png"
    },
    {
      title: "Traduction technique & industrielle",
      description: "Des traductions techniques sur mesure pour la métallurgie, l'Oil & Gas, la fabrication de machines industrielles et l'énergie, réalisées dans le respect des exigences sectorielles et de la rigueur technique.",
      buttonText: "Traduire mes documents industriels",
      icon: "⚙️",
      image: "/chatgpt-image-12-juin-2025--22-55-07-removebg-preview-1.png"
    },
    {
      title: "Traduction transport & logistique",
      description: "Confiez la traduction de vos supports techniques, fiches produits et manuels liés à l'aéronautique, l'automobile ou le ferroviaire à un expert attentif aux enjeux métiers de la mobilité.",
      buttonText: "Démarrer mon projet transport",
      icon: "🚛",
      image: "/chatgpt-image-12-juin-2025--22-42-33-removebg-preview-2.png"
    },
    {
      title: "Traduction environnement & développement durable",
      description: "Traduction professionnelle pour vos projets en gestion des déchets, économie circulaire, ou développement durable, avec une approche respectueuse des valeurs et des normes environnementales.",
      buttonText: "Valoriser vos initiatives vertes",
      icon: "🌱",
      image: "/chatgpt-image-12-juin-2025--22-57-47-removebg-preview-2.png"
    },
    {
      title: "Traduction marketing & industries créatives",
      description: "Boostez l'impact de vos campagnes marketing, créations audiovisuelles ou contenus digitaux grâce à des traductions sensibles aux codes culturels, adaptées à votre public cible.",
      buttonText: "Dynamiser mon marketing international",
      icon: "🎨",
      image: "/chatgpt-image-12-juin-2025--22-48-40-removebg-preview-1.png"
    }
  ];

  const stats = [
    { number: "6", label: "Happy Clients" },
    { number: "11", label: "Completed Projects" },
    { number: "30", label: "Clients" },
    { number: "600k", label: "Mots Traduits" }
  ];

  const projects = [
    {
      title: "Titre d'un projet 1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Titre d'un projet 2",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Titre d'un projet 3",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
      image: "https://images.pexels.com/photos/205316/pexels-photo-205316.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "À propos", href: "/about" },
    { label: "Tarifs", href: "/pricing" },
  ];

  const handleContactClick = () => {
    window.location.href = "mailto:contact@ebservices.com?subject=Demande de contact général&body=Bonjour,%0D%0A%0D%0AJe souhaiterais vous contacter concernant vos services de traduction.%0D%0A%0D%0ACordialement";
  };

  const handleServiceContact = (service: string) => {
    const subjects = {
      "santé": "Demande de devis santé",
      "industriel": "Traduire mes documents industriels", 
      "transport": "Démarrer mon projet transport",
      "environnement": "Valoriser vos initiatives vertes",
      "marketing": "Dynamiser mon marketing international"
    };
    
    const subject = subjects[service as keyof typeof subjects] || "Demande de devis";
    window.location.href = `mailto:contact@ebservices.com?subject=${encodeURIComponent(subject)}&body=Bonjour,%0D%0A%0D%0AJe souhaiterais obtenir un devis pour vos services de traduction ${service}.%0D%0A%0D%0ACordialement`;
  };

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Header Navigation */}
      <header className="relative w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="block">
              <div className="w-[142px] h-[136px] relative">
                <div className="absolute w-[126px] h-[106px] top-0 left-0 bg-[#1090cb]" />
                <img
                  className="w-[142px] h-[136px] absolute top-0 left-0 object-cover"
                  alt="Logo"
                  src="/chatgpt-image-12-juin-2025--23-04-46-removebg-preview-1-1.png"
                />
              </div>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`transition-colors duration-200 font-normal text-base ${
                  item.active 
                    ? "text-[#1090cb] font-medium" 
                    : "text-black hover:text-[#1090cb]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Selector & Contact Button */}
          <div className="flex items-center space-x-4">
            <LanguageSelector 
              currentLanguage={currentLanguage}
              onLanguageChange={setCurrentLanguage}
            />
            <Button 
              onClick={handleContactClick}
              className="bg-[#1090cb] hover:bg-[#0e7ba8] text-white px-6 py-2 rounded-md text-sm font-normal"
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-50 to-purple-50 py-16 overflow-hidden">
        <div className="absolute top-10 right-10 w-16 h-16 bg-orange-400 rounded-full opacity-70" />
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-purple-400 rounded-full opacity-60" />
        
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            Nos <span className="text-[#1090cb]">Services</span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              EB Services accompagne les entreprises de tous horizons avec des prestations personnalisées en anglais, allemand, italien et français (autres langues sur demande).
            </p>
            <p>
              Des traductions fidèles à vos besoins, livrées dans les délais et en toute confidentialité.
            </p>
          </div>
        </div>
      </section>

      {/* Service Features Grid */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceFeatures.map((feature, index) => (
              <Card key={index} className="border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <span className={`text-2xl ${feature.iconColor}`}>{feature.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl text-gray-800 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section key={index} className={`w-full py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl">{service.icon}</span>
                  <h2 className="font-bold text-2xl lg:text-3xl text-gray-800">
                    {service.title}
                  </h2>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <Button 
                  onClick={() => handleServiceContact(
                    index === 0 ? "santé" : 
                    index === 1 ? "industriel" : 
                    index === 2 ? "transport" : 
                    index === 3 ? "environnement" : 
                    "marketing"
                  )}
                  className="bg-[#1090cb] hover:bg-[#0e7ba8] text-white px-8 py-3 rounded-lg font-normal text-base"
                >
                  {service.buttonText}
                </Button>
              </div>
              
              <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <img
                  className="w-full max-w-[400px] h-auto object-cover"
                  alt={service.title}
                  src={service.image}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Stats Section */}
      <section className="w-full py-16 bg-[#1090cb] relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full" />
        
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="font-bold text-4xl lg:text-5xl mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-bold text-3xl text-gray-800 text-center mb-12">
            Nos derniers projets
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={project.title}
                    src={project.image}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-transparent rounded-full opacity-50" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="font-bold text-3xl text-gray-800 mb-4">
            Newsletter
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Parlons peu traduisons plus
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1090cb] focus:border-transparent"
            />
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-normal">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#e8f4fa] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 relative">
              <div className="absolute w-24 h-24 top-4 left-4 bg-[#1090cb]" />
              <img
                className="w-32 h-32 absolute top-0 left-0 object-cover"
                alt="Logo"
                src="/chatgpt-image-12-juin-2025--23-04-46-removebg-preview-1-1.png"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <p className="text-gray-600 text-base">@Lorem</p>
            </div>

            <div>
              <h3 className="font-medium text-black text-lg mb-4">About us</h3>
              <nav className="space-y-2">
                {["Lorem", "Portfolio", "Careers", "Contact us"].map((link, index) => (
                  <div key={index} className="text-gray-600 hover:text-[#1090cb] cursor-pointer transition-colors">
                    {link}
                  </div>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="font-medium text-black text-lg mb-4">Contact us</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <p className="text-gray-600 text-base">+908 89097 890</p>
            </div>

            <div className="flex justify-end">
              <img
                className="w-52 h-16 object-contain"
                alt="Group"
                src="/group-12.png"
              />
            </div>
          </div>

          <div className="border-t border-gray-300 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              Copyright ® 2021 Lorem All rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};