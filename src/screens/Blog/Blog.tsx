import React from "react";
import { Button } from "../../components/ui/button";
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";

export const Blog = (): JSX.Element => {
  const { t } = useLanguage();

  const handleContactClick = () => {
    window.location.href = "mailto:contact@ebservices.com?subject=Question sur l'article IA et traduction&body=Bonjour,%0D%0A%0D%0AJ'ai lu votre article sur l'IA et la traduction et j'aimerais en savoir plus.%0D%0A%0D%0ACordialement";
  };

  return (
    <Layout currentPath="/blog">

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-purple-50 to-blue-50 py-16 overflow-hidden">
        <div className="absolute top-10 right-10 w-16 h-16 bg-purple-400 rounded-full opacity-70" />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-orange-400 rounded-full opacity-60" />

        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            {t("blogPage.hero.title")}<span className="text-[#1090cb]">{t("blogPage.hero.titleHighlight")}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t("blogPage.hero.subtitle")}
          </p>
          <div className="text-gray-500 text-sm">
            {t("blogPage.hero.publishInfo")}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {t("blogPage.intro.lead")}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {t("blogPage.intro.paragraph1")}
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              {t("blogPage.intro.paragraph2")}
            </p>

            <h2 className="font-bold text-2xl text-gray-800 mb-6 mt-12">
              {t("blogPage.aiRole.title")}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {t("blogPage.aiRole.paragraph1")}
            </p>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
              <p className="text-green-800 font-medium">
                {t("blogPage.aiRole.highlightSuccess")}
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <p className="text-yellow-800 font-medium">
                {t("blogPage.aiRole.highlightWarning")}
              </p>
            </div>

            <h2 className="font-bold text-2xl text-gray-800 mb-6 mt-12">
              {t("blogPage.collaboration.title")}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {t("blogPage.collaboration.paragraph1")}
            </p>

            <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
              <li className="leading-relaxed">{t("blogPage.collaboration.step1")}</li>
              <li className="leading-relaxed">{t("blogPage.collaboration.step2")}</li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-[#1090cb] p-6 mb-8">
              <p className="text-blue-800 font-medium">
                {t("blogPage.collaboration.highlightInfo")}
              </p>
            </div>

            <h2 className="font-bold text-2xl text-gray-800 mb-6 mt-12">
              {t("blogPage.advantages.title")}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {t("blogPage.advantages.paragraph1")}
            </p>

            <ul className="list-disc list-inside space-y-3 mb-8 text-gray-700">
              <li className="leading-relaxed">{t("blogPage.advantages.benefit1")}</li>
              <li className="leading-relaxed">{t("blogPage.advantages.benefit2")}</li>
              <li className="leading-relaxed">{t("blogPage.advantages.benefit3")}</li>
              <li className="leading-relaxed">{t("blogPage.advantages.benefit4")}</li>
            </ul>

            <h2 className="font-bold text-2xl text-gray-800 mb-6 mt-12">
              {t("blogPage.limitations.title")}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {t("blogPage.limitations.paragraph1")}
            </p>

            <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700">
              <li className="leading-relaxed">{t("blogPage.limitations.limit1")}</li>
              <li className="leading-relaxed">{t("blogPage.limitations.limit2")}</li>
              <li className="leading-relaxed">{t("blogPage.limitations.limit3")}</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              {t("blogPage.limitations.paragraph2")}
            </p>

            <h2 className="font-bold text-2xl text-gray-800 mb-6 mt-12">
              {t("blogPage.future.title")}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {t("blogPage.future.paragraph1")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-purple-800 mb-3">{t("blogPage.future.aiLabel")}</h3>
                <p className="text-purple-700">{t("blogPage.future.aiDescription")}</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-green-800 mb-3">{t("blogPage.future.humanLabel")}</h3>
                <p className="text-green-700">{t("blogPage.future.humanDescription")}</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {t("blogPage.future.paragraph2")}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {t("blogPage.future.paragraph3")}
            </p>

            <ul className="list-none space-y-3 mb-8 text-gray-700">
              <li className="leading-relaxed flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                {t("blogPage.future.adaptation1")}
              </li>
              <li className="leading-relaxed flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                {t("blogPage.future.adaptation2")}
              </li>
              <li className="leading-relaxed flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                {t("blogPage.future.adaptation3")}
              </li>
            </ul>

            <h2 className="font-bold text-2xl text-gray-800 mb-6 mt-12">
              {t("blogPage.conclusion.title")}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {t("blogPage.conclusion.paragraph1")}
            </p>

            <div className="bg-[#1090cb] text-white p-6 rounded-lg mb-8">
              <p className="font-medium text-lg">
                {t("blogPage.conclusion.highlight")}
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gray-50 rounded-2xl text-center">
            <h3 className="font-bold text-2xl text-gray-800 mb-4">
              {t("blogPage.cta.title")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("blogPage.cta.description")}
            </p>
            <Button
              onClick={handleContactClick}
              className="bg-[#1090cb] hover:bg-[#0e7ba8] text-white px-8 py-3 rounded-lg font-normal text-base"
            >
              {t("blogPage.cta.button")}
            </Button>
          </div>
        </div>
      </article>

      {/* Footer */}
      </Layout>
  );
};