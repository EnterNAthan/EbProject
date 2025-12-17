import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";

export const Pricing = (): JSX.Element => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pricingSteps = [
    {
      stepKey: "pricingPage.process.steps.analysis.step",
      titleKey: "pricingPage.process.steps.analysis.title",
      descriptionKey: "pricingPage.process.steps.analysis.description",
      icon: "📋",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      stepKey: "pricingPage.process.steps.quote.step",
      titleKey: "pricingPage.process.steps.quote.title",
      descriptionKey: "pricingPage.process.steps.quote.description",
      icon: "💰",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      stepKey: "pricingPage.process.steps.translation.step",
      titleKey: "pricingPage.process.steps.translation.title",
      descriptionKey: "pricingPage.process.steps.translation.description",
      icon: "✍️",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      stepKey: "pricingPage.process.steps.delivery.step",
      titleKey: "pricingPage.process.steps.delivery.title",
      descriptionKey: "pricingPage.process.steps.delivery.description",
      icon: "🚀",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  const pricingFactors = [
    {
      titleKey: "pricingPage.factors.volume.title",
      descriptionKey: "pricingPage.factors.volume.description",
      icon: "📊",
      bgColor: "bg-purple-100"
    },
    {
      titleKey: "pricingPage.factors.languages.title",
      descriptionKey: "pricingPage.factors.languages.description",
      icon: "🌍",
      bgColor: "bg-blue-100"
    },
    {
      titleKey: "pricingPage.factors.specialization.title",
      descriptionKey: "pricingPage.factors.specialization.description",
      icon: "⚙️",
      bgColor: "bg-green-100"
    },
    {
      titleKey: "pricingPage.factors.deadline.title",
      descriptionKey: "pricingPage.factors.deadline.description",
      icon: "⏰",
      bgColor: "bg-orange-100"
    },
    {
      titleKey: "pricingPage.factors.format.title",
      descriptionKey: "pricingPage.factors.format.description",
      icon: "📄",
      bgColor: "bg-pink-100"
    },
    {
      titleKey: "pricingPage.factors.services.title",
      descriptionKey: "pricingPage.factors.services.description",
      icon: "🔄",
      bgColor: "bg-red-100"
    }
  ];

  const faqItems = [
    {
      questionKey: "pricingPage.faq.items.pricing.question",
      answerKey: "pricingPage.faq.items.pricing.answer"
    },
    {
      questionKey: "pricingPage.faq.items.deadlines.question",
      answerKey: "pricingPage.faq.items.deadlines.answer"
    },
    {
      questionKey: "pricingPage.faq.items.revisions.question",
      answerKey: "pricingPage.faq.items.revisions.answer"
    },
    {
      questionKey: "pricingPage.faq.items.native.question",
      answerKey: "pricingPage.faq.items.native.answer"
    },
    {
      questionKey: "pricingPage.faq.items.confidentiality.question",
      answerKey: "pricingPage.faq.items.confidentiality.answer"
    },
    {
      questionKey: "pricingPage.faq.items.formats.question",
      answerKey: "pricingPage.faq.items.formats.answer"
    },
    {
      questionKey: "pricingPage.faq.items.proofreading.question",
      answerKey: "pricingPage.faq.items.proofreading.answer"
    },
    {
      questionKey: "pricingPage.faq.items.payment.question",
      answerKey: "pricingPage.faq.items.payment.answer"
    }
  ];

  const handleContactClick = () => {
    window.location.href = "mailto:contact@ebservices.com?subject=Demande de devis personnalisé&body=Bonjour,%0D%0A%0D%0AJe souhaiterais obtenir un devis pour mes besoins de traduction.%0D%0A%0D%0ACordialement";
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Layout currentPath="/pricing">

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-green-50 to-blue-50 py-16 overflow-hidden">
        <div className="absolute top-10 right-10 w-16 h-16 bg-green-400 rounded-full opacity-70" />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-400 rounded-full opacity-60" />

        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            {t("pricingPage.hero.title")}<span className="text-[#1090cb]">{t("pricingPage.hero.titleHighlight")}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t("pricingPage.hero.subtitle")}
          </p>
          <div className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            <p>{t("pricingPage.hero.description1")}</p>
            <p>{t("pricingPage.hero.description2")}</p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-gray-800 mb-4">
              {t("pricingPage.process.title")}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t("pricingPage.process.subtitle")}
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
                      {t(step.stepKey)}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(step.descriptionKey)}
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
              {t("pricingPage.factors.title")}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t("pricingPage.factors.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingFactors.map((factor, index) => (
              <Card key={index} className="bg-white border border-gray-200 rounded-2xl">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${factor.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <span className="text-2xl">{factor.icon}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    {t(factor.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(factor.descriptionKey)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-[#1090cb]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-bold text-3xl text-white mb-6">
            {t("pricingPage.cta.title")}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t("pricingPage.cta.subtitle")}
          </p>
          <Button
            onClick={handleContactClick}
            className="bg-white hover:bg-gray-100 text-[#1090cb] px-12 py-4 rounded-lg font-semibold text-lg"
          >
            {t("pricingPage.cta.button")}
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-gray-800 mb-4">
              {t("pricingPage.faq.title")}
            </h2>
            <p className="text-gray-600 text-lg">
              {t("pricingPage.faq.subtitle")}
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
                      {t(item.questionKey)}
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
                      {t(item.answerKey)}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      </Layout>
  );
};