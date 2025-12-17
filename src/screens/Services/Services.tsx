import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";

export const Services = (): JSX.Element => {
  const { t } = useLanguage();

  const serviceFeatures = [
    {
      titleKey: "servicesPage.features.expertise.title",
      descriptionKey: "servicesPage.features.expertise.description",
      icon: "🎯",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      titleKey: "servicesPage.features.languages.title",
      descriptionKey: "servicesPage.features.languages.description",
      icon: "🌐",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      titleKey: "servicesPage.features.deadlines.title",
      descriptionKey: "servicesPage.features.deadlines.description",
      icon: "⚡",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      titleKey: "servicesPage.features.confidentiality.title",
      descriptionKey: "servicesPage.features.confidentiality.description",
      icon: "🔒",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    }
  ];

  const services = [
    {
      titleKey: "servicesPage.offerings.medical.title",
      descriptionKey: "servicesPage.offerings.medical.description",
      buttonKey: "servicesPage.offerings.medical.button",
      icon: "🏥",
      image: "/Services/SecteurMedical.png",
      contactType: "santé"
    },
    {
      titleKey: "servicesPage.offerings.technical.title",
      descriptionKey: "servicesPage.offerings.technical.description",
      buttonKey: "servicesPage.offerings.technical.button",
      icon: "⚙️",
      image: "/Services/SecteurIndustrie.png",
      contactType: "industriel"
    },
    {
      titleKey: "servicesPage.offerings.transport.title",
      descriptionKey: "servicesPage.offerings.transport.description",
      buttonKey: "servicesPage.offerings.transport.button",
      icon: "🚛",
      image: "/Services/SecteurTransportLogistique.png",
      contactType: "transport"
    },
    {
      titleKey: "servicesPage.offerings.environment.title",
      descriptionKey: "servicesPage.offerings.environment.description",
      buttonKey: "servicesPage.offerings.environment.button",
      icon: "🌱",
      image: "/Services/SecteurEnvironement.png",
      contactType: "environnement"
    },
    {
      titleKey: "servicesPage.offerings.marketing.title",
      descriptionKey: "servicesPage.offerings.marketing.description",
      buttonKey: "servicesPage.offerings.marketing.button",
      icon: "🎨",
      image: "/Services/SecteurMarketing.png",
      contactType: "marketing"
    }
  ];
// ajout d'un commentaire
  const stats = [
    { number: "6", labelKey: "servicesPage.stats.happyClients" },
    { number: "11", labelKey: "servicesPage.stats.completedProjects" },
    { number: "30", labelKey: "servicesPage.stats.clients" },
    { number: "600k", labelKey: "servicesPage.stats.wordsTranslated" }
  ];

  const projects = [
    {
      titleKey: "servicesPage.projects.technical.title",
      descriptionKey: "servicesPage.projects.technical.description",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      titleKey: "servicesPage.projects.patents.title",
      descriptionKey: "servicesPage.projects.patents.description",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      titleKey: "servicesPage.projects.localization.title",
      descriptionKey: "servicesPage.projects.localization.description",
      image: "https://images.pexels.com/photos/205316/pexels-photo-205316.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

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
    <Layout currentPath="/services">

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-50 to-purple-50 py-16 overflow-hidden">
        <div className="absolute top-10 right-10 w-16 h-16 bg-orange-400 rounded-full opacity-70" />
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-purple-400 rounded-full opacity-60" />
        
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            {t("servicesPage.hero.title")}<span className="text-[#1090cb]">{t("servicesPage.hero.titleHighlight")}</span>
          </h1>

          <div className="max-w-4xl mx-auto space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              {t("servicesPage.hero.description1")}
            </p>
            <p>
              {t("servicesPage.hero.description2")}
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
                        {t(feature.titleKey)}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t(feature.descriptionKey)}
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
                    {t(service.titleKey)}
                  </h2>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {t(service.descriptionKey)}
                </p>

                <Button
                  onClick={() => handleServiceContact(service.contactType)}
                  className="bg-[#1090cb] hover:bg-[#0e7ba8] text-white px-8 py-3 rounded-lg font-normal text-base"
                >
                  {t(service.buttonKey)}
                </Button>
              </div>

              <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <img
                  className="w-full max-w-[400px] h-auto object-cover"
                  alt={t(service.titleKey)}
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
                  {t(stat.labelKey)}
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
            {t("servicesPage.projects.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={t(project.titleKey)}
                    src={project.image}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(project.descriptionKey)}
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
            {t("servicesPage.newsletter.title")}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t("servicesPage.newsletter.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t("servicesPage.newsletter.placeholder")}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1090cb] focus:border-transparent"
            />
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-normal">
              {t("servicesPage.newsletter.button")}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
    </Layout>
  );
};