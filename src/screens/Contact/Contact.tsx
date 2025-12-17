import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";

export const Contact = (): JSX.Element => {
  const { t } = useLanguage();

  const handleContactClick = () => {
    window.location.href = "mailto:contact@ebservices.com?subject=Demande de contact général&body=Bonjour,%0D%0A%0D%0AJe souhaiterais vous contacter concernant vos services de traduction.%0D%0A%0D%0ACordialement";
  };

  return (
    <Layout currentPath="/contact">

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-50 to-purple-50 py-24 overflow-hidden">
        <div className="absolute top-10 right-10 w-16 h-16 bg-orange-400 rounded-full opacity-70" />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-purple-400 rounded-full opacity-60" />
        
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">👋</span>
            </div>
          </div>
          
          <h1 className="font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            {t("contactPage.hero.title")}
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t("contactPage.hero.subtitle")}
          </p>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            <p className="font-medium text-xl text-gray-800 mb-4">
              {t("contactPage.hero.whyEmailTitle")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">💬</span>
                  <h3 className="font-semibold text-gray-800">{t("contactPage.reasons.conversation.title")}</h3>
                </div>
                <p className="text-gray-600">
                  {t("contactPage.reasons.conversation.description")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">📎</span>
                  <h3 className="font-semibold text-gray-800">{t("contactPage.reasons.documents.title")}</h3>
                </div>
                <p className="text-gray-600">
                  {t("contactPage.reasons.documents.description")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">⏰</span>
                  <h3 className="font-semibold text-gray-800">{t("contactPage.reasons.response.title")}</h3>
                </div>
                <p className="text-gray-600">
                  {t("contactPage.reasons.response.description")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🔒</span>
                  <h3 className="font-semibold text-gray-800">{t("contactPage.reasons.confidentiality.title")}</h3>
                </div>
                <p className="text-gray-600">
                  {t("contactPage.reasons.confidentiality.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <Card className="border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-3">{t("contactPage.info.email")}</h3>
                <p className="text-gray-600">contact@ebservices.com</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-3">{t("contactPage.info.phone")}</h3>
                <p className="text-gray-600">+94 4444 5555 6</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-[#e8f4fa]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-bold text-3xl text-gray-800 mb-6">
            {t("contactPage.cta.title")}<span className="text-[#1090cb]">{t("contactPage.cta.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t("contactPage.cta.subtitle")}
          </p>

          <Button
            onClick={handleContactClick}
            className="bg-[#1090cb] hover:bg-[#0e7ba8] text-white px-12 py-4 rounded-lg font-normal text-lg"
          >
            {t("contactPage.cta.button")}
          </Button>
        </div>
      </section>

      {/* Footer */}
      </Layout>
  );
};