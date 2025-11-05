import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { LanguageSelector } from "../../components/LanguageSelector";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { QualityAssuranceSection } from "./sections/QualityAssuranceSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { TranslationServicesSection } from "./sections/TranslationServicesSection/TranslationServicesSection";

export const Home = (): JSX.Element => {
  const featureCards = [
    {
      title: "Vos questions",
      description: "Lorem Ipsum is simply",
      bgColor: "bg-[#efe9ff]",
      icon: "/website-content-1.svg",
    },
    {
      title: "Espace de travail",
      description: "Lorem Ipsum is simply",
      bgColor: "bg-[#ecffd9]",
      icon: "/seo-tag-1.svg",
    },
    {
      title: "IA et traduction",
      description: "Lorem Ipsum is simply",
      bgColor: "bg-[#d9e6ff]",
      icon: "/immersive-1.svg",
    },
    {
      title: "Le tarif",
      description: "Lorem Ipsum is simply",
      bgColor: "bg-[#ffe4d9]",
      icon: "/coding--1--1.svg",
    },
  ];

  const companyLogos = [
    {
      src: "/beneoshop.png",
      alt: "Beneoshop",
    },
    {
      src: "/caspio.png",
      alt: "Caspio",
    },
    {
      src: "/hypergrid.png",
      alt: "Hyper grid",
    },
    {
      src: "/leotrippi.png",
      alt: "Leotrippi",
    },
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
                  item.href === "/" ? "text-[#1090cb] font-medium" : "text-black hover:text-[#1090cb]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Selector & Contact Button */}
          <div className="flex items-center space-x-4">
            <LanguageSelector 
              currentLanguage="fr"
              onLanguageChange={() => {}}
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
      <section className="relative w-full bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <HeroSection />
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                className="w-full max-w-[500px] h-auto object-cover"
                alt="Professional translator illustration"
                src="/chatgpt-image-12-juin-2025--22-48-40-removebg-preview-1.png"
              />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <CardContent className="p-4 flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 ${card.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    <img
                      className="w-8 h-8"
                      alt={card.title}
                      src={card.icon}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-black text-lg leading-tight mb-1">
                      {card.title}
                    </h3>
                    <p className="font-normal text-gray-500 text-sm leading-tight">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-medium text-black text-2xl mb-12">
            D&apos;autres m&apos;ont fait confiance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {companyLogos.map((logo, index) => (
              <img
                key={index}
                className="w-32 h-32 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 bg-gray-50">
        <ServicesSection />
      </section>

      {/* Translation Services Section */}
      <section className="w-full py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-100 to-transparent rounded-full opacity-50" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <TranslationServicesSection />
              <div className="mt-8">
                <Button className="bg-[#1090cb] hover:bg-[#0e7ba8] text-white px-8 py-3 rounded-lg text-base font-normal">
                  Demander un devis
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                className="w-full max-w-[400px] h-auto object-cover"
                alt="Translation process illustration"
                src="/chatgpt-image-12-juin-2025--22-42-33-removebg-preview-2.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="w-full py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-green-100 to-transparent rounded-full opacity-50" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                className="w-full max-w-[400px] h-auto object-cover"
                alt="Quality assurance illustration"
                src="/chatgpt-image-12-juin-2025--22-55-07-removebg-preview-1.png"
              />
            </div>
            <div>
              <QualityAssuranceSection />
              <div className="mt-8">
                <Button className="bg-[#1090cb] hover:bg-[#0e7ba8] text-white px-8 py-3 rounded-lg text-base font-normal">
                  Je Test
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-pink-100 to-transparent rounded-full opacity-50" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <TestimonialsSection />
              <div className="mt-8">
                <Button className="bg-[#1090cb] hover:bg-[#0e7ba8] text-white px-8 py-3 rounded-lg text-base font-normal">
                  Exemple ?
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                className="w-full max-w-[400px] h-auto object-cover"
                alt="Final review illustration"
                src="/chatgpt-image-12-juin-2025--22-57-47-removebg-preview-2.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-yellow-100 to-transparent rounded-full opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-pink-100 to-transparent rounded-full opacity-30" />
        <div className="max-w-6xl mx-auto px-4">
          <ContactSection />
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full bg-[#e8f4fa]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center py-8">
            <div className="w-32 h-32 relative">
              <div className="absolute w-24 h-24 top-4 left-4 bg-[#1090cb]" />
              <img
                className="w-32 h-32 absolute top-0 left-0 object-cover"
                alt="Logo"
                src="/chatgpt-image-12-juin-2025--23-04-46-removebg-preview-1-1.png"
              />
            </div>
          </div>
          <AboutUsSection />
        </div>
      </section>
    </div>
  );
};