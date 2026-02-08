import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const HeroSection = (): JSX.Element => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const headingParts = [
    { text: t("home.hero.title1"), color: "text-black" },
    { text: t("home.hero.title1Highlight"), color: "text-[#1090cb]" },
    { text: "\n" + t("home.hero.title2"), color: "text-black" },
    { text: t("home.hero.title2Highlight"), color: "text-[#1090cb]" },
    { text: "\n" + t("home.hero.title3"), color: "text-black" },
    { text: t("home.hero.title3Highlight"), color: "text-[#1090cb]" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="font-semibold text-4xl lg:text-5xl leading-tight whitespace-pre-line">
        {headingParts.map((part, index) => (
          <span key={index} className={part.color}>
            {part.text}
          </span>
        ))}
      </h1>

      <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
        {t("home.hero.description")}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <Button
          variant="outline"
          className="bg-white border-2 border-[#1090cb] text-[#1090cb] hover:bg-[#1090cb] hover:text-white px-8 py-3 rounded-lg font-medium text-base transition-colors duration-200"
          onClick={() => navigate("/services")}
        >
          {t("home.hero.discover")}
        </Button>

        <Button
          className="bg-[#1090cb] hover:bg-[#0e7ba8] text-white px-8 py-3 rounded-lg font-normal text-base transition-colors duration-200"
          onClick={() => navigate("/contact")}
        >
          {t("home.hero.contactMe")}
        </Button>
      </div>
    </div>
  );
};
