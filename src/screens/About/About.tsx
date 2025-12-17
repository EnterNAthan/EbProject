import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";

export const About = (): JSX.Element => {
  const { t } = useLanguage();

  const clientTypes = [
    {
      titleKey: "aboutPage.clients.types.largeCompanies",
      icon: "🏢",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      titleKey: "aboutPage.clients.types.sme",
      icon: "🏪",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      titleKey: "aboutPage.clients.types.individuals",
      icon: "👤",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      titleKey: "aboutPage.clients.types.industrial",
      icon: "⚙️",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    }
  ];

  const handleContactClick = () => {
    window.location.href = "mailto:contact@ebservices.com?subject=Demande d'information - À propos&body=Bonjour,%0D%0A%0D%0AJe souhaiterais en savoir plus sur vos services.%0D%0A%0D%0ACordialement";
  };

  return (
    <Layout currentPath="/about">

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-green-50 to-blue-50 py-16 overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 bg-green-400 rounded-full opacity-60" />
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#1090cb] font-medium text-lg mb-4 block">{t("aboutPage.hero.badge")}</span>
              <h1 className="font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
                {t("aboutPage.hero.title")}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t("aboutPage.hero.description1")}
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                {t("aboutPage.hero.description2")}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                className="w-full h-48 object-cover rounded-2xl"
                alt="Team working"
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
              />
              <img
                className="w-full h-48 object-cover rounded-2xl mt-8"
                alt="Office meeting"
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
              />
              <img
                className="w-full h-48 object-cover rounded-2xl -mt-8"
                alt="Team collaboration"
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
              />
              <img
                className="w-full h-48 object-cover rounded-2xl"
                alt="Business meeting"
                src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-bold text-3xl lg:text-4xl text-[#1090cb] text-center mb-8">
            {t("aboutPage.content.title")}
          </h2>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              {t("aboutPage.content.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-3xl text-gray-800 mb-6">
                {t("aboutPage.clients.title")}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t("aboutPage.clients.description")}
              </p>
              <Button
                onClick={handleContactClick}
                className="bg-[#1090cb] hover:bg-[#0e7ba8] text-white px-8 py-3 rounded-lg font-normal"
              >
                {t("aboutPage.clients.button")}
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {clientTypes.map((type, index) => (
                <Card key={index} className="border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${type.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <span className={`text-2xl ${type.iconColor}`}>{type.icon}</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {t(type.titleKey)}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-yellow-100 to-transparent rounded-full opacity-50" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-400 rounded-full opacity-30" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="font-bold text-3xl text-gray-800 mb-4">
            {t("aboutPage.newsletter.title")}
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8">
            <input
              type="email"
              placeholder={t("aboutPage.newsletter.placeholder")}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1090cb] focus:border-transparent"
            />
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-normal">
              {t("aboutPage.newsletter.button")}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      </Layout>
  );
};