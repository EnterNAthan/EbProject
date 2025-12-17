import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const ServicesSection = (): JSX.Element => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-semibold text-gray-800 text-3xl lg:text-4xl leading-tight mb-6">
          {t("home.services.title")}
        </h2>

        <p className="max-w-2xl mx-auto font-normal text-gray-600 text-lg lg:text-xl leading-relaxed">
          {t("home.services.description")}
        </p>
      </div>
    </div>
  );
};
