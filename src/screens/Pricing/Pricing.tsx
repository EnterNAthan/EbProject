import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { LanguageSelector } from "../../components/LanguageSelector";

export const Pricing = (): JSX.Element => {
  const [currentLanguage, setCurrentLanguage] = useState("fr");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "À propos", href: "/about" },
    { label: "Tarifs", href: "/pricing" },
  ];

  const pricingSteps = [
    {
      step: "01",
      title: "Analyse de votre demande",
      description: "Envoyez-nous vos documents et précisez vos besoins. Nous analysons le volume, la complexité et les délais souhaités.",
      icon: "📋",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      step: "02", 
      title: "Devis personnalisé sous 24h",
      description: "Recevez un devis détaillé avec tarifs transparents, délais de livraison et modalités de paiement.",
      icon: "💰",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      step: "03",
      title: "Traduction et révision",
      description: "Nos experts linguistiques traduisent vos documents avec précision, puis relisent et corrigent chaque texte.",
      icon: "✍️",
      bgColor: "bg-green-50", 
      iconColor: "text-green-600"
    },
    {
      step: "04",
      title: "Livraison et suivi",
      description: "Réception de vos traductions finalisées dans les délais convenus, avec possibilité de révisions mineures.",
      icon: "🚀",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  const faqItems = [
    {
      question: "Comment calculez-vous vos tarifs de traduction ?",
      answer: "Nos tarifs sont calculés au mot source, avec des prix variables selon la combinaison linguistique, la spécialisation technique et les délais. Nous proposons des tarifs dégressifs pour les gros volumes et des tarifs préférentiels pour nos clients réguliers."
    },
    {
      question: "Quels sont vos délais de livraison ?",
      answer: "Les délais dépendent du volume et de la complexité du projet. En moyenne, nous traduisons 2000 à 3000 mots par jour. Pour les projets urgents, nous proposons un service express avec supplément tarifaire."
    },
    {
      question: "Proposez-vous des révisions après livraison ?",
      answer: "Oui, nous offrons des révisions mineures gratuites dans les 7 jours suivant la livraison. Pour des modifications importantes ou des changements de brief, un devis complémentaire sera établi."
    },
    {
      question: "Travaillez-vous avec des traducteurs natifs ?",
      answer: "Absolument. Tous nos traducteurs sont des locuteurs natifs de la langue cible et spécialisés dans leur domaine d'expertise. Cela garantit la qualité linguistique et culturelle de nos traductions."
    },
    {
      question: "Comment garantissez-vous la confidentialité ?",
      answer: "Nous signons des accords de confidentialité (NDA) pour tous nos projets. Vos documents sont stockés de manière sécurisée et supprimés après archivage selon nos conditions générales."
    },
    {
      question: "Acceptez-vous tous types de formats de fichiers ?",
      answer: "Nous travaillons avec la plupart des formats : Word, PDF, Excel, PowerPoint, InDesign, HTML, XML, etc. Pour les formats spéciaux, nous vous confirmons la faisabilité lors de l'analyse de votre demande."
    },
    {
      question: "Proposez-vous des services de relecture uniquement ?",
      answer: "Oui, nous proposons des services de relecture et révision pour des textes déjà traduits. Ce service est facturé à un tarif réduit par rapport à une traduction complète."
    },
    {
      question: "Comment se déroule le paiement ?",
      answer: "Pour les nouveaux clients, nous demandons un acompte de 50% à la commande. Le solde est payable à la livraison. Nos clients réguliers bénéficient de conditions de paiement à 30 jours."
    }
  ];

  const handleContactClick = () => {
    window.location.href = "mailto:contact@ebservices.com?subject=Demande de devis personnalisé&body=Bonjour,%0D%0A%0D%0AJe souhaiterais obtenir un devis pour mes besoins de traduction.%0D%0A%0D%0ACordialement";
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
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
      <section className="relative w-full bg-gradient-to-br from-green-50 to-blue-50 py-16 overflow-hidden">
        <div className="absolute top-10 right-10 w-16 h-16 bg-green-400 rounded-full opacity-70" />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-400 rounded-full opacity-60" />
        
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            Nos <span className="text-[#1090cb]">Tarifs</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Des tarifs transparents et adaptés à vos besoins de traduction
          </p>
          <div className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            <p>Chaque projet est unique. Nous établissons des devis personnalisés</p>
            <p>en fonction de vos spécifications et de vos délais.</p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-gray-800 mb-4">
              Comment nous procédons
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Un processus simple et transparent pour obtenir vos traductions professionnelles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingSteps.map((step, index) => (
              <Card key={index} className="border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <span className={`text-2xl ${step.iconColor}`}>{step.icon}</span>
                    </div>
                    <div className="text-[#1090cb] font-bold text-lg mb-2">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-gray-800 mb-4">
              Facteurs influençant nos tarifs
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Plusieurs éléments sont pris en compte pour établir votre devis personnalisé
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 rounded-2xl">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Volume de texte
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tarification au mot source avec dégressivité pour les gros volumes
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-2xl">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Combinaison linguistique
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tarifs variables selon les langues source et cible
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-2xl">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Spécialisation technique
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Supplément pour les domaines très spécialisés
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-2xl">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Délais de livraison
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Supplément express pour les projets urgents
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-2xl">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Format de fichier
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Supplément pour les formats complexes nécessitant une mise en forme
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-2xl">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Services additionnels
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Relecture, révision, mise en page selon vos besoins
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-[#1090cb]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-bold text-3xl text-white mb-6">
            Prêt à obtenir votre devis personnalisé ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Envoyez-nous vos documents et recevez une estimation sous 24h
          </p>
          <Button 
            onClick={handleContactClick}
            className="bg-white hover:bg-gray-100 text-[#1090cb] px-12 py-4 rounded-lg font-semibold text-lg"
          >
            Demander un devis gratuit
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-gray-800 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-gray-600 text-lg">
              Trouvez les réponses aux questions les plus courantes sur nos tarifs et services
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg text-gray-800 pr-4">
                      {item.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
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