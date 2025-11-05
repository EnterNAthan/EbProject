import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const cardData = [
  {
    title: "Savoir-faire",
    content:
      "Traductions sur-mesure, adaptées à chaque domaine et toujours vers la langue maternelle.\nExpertise, rigueur et formation continue pour garantir qualité et précision.\nConfidentialité et respect des délais assurés pour chaque mission.",
    bgColor: "bg-[#f4f4f4]",
    titleColor: "text-[#252525]",
    textColor: "text-[#545454]",
    buttonBg: "bg-[#1090cb]",
    buttonText: "text-white",
  },
  {
    title: "Engagements Qualité",
    content:
      "EB Services s'assure toujours de réunir les conditions nécessaires pour réaliser un travail de qualité. Je m'engage à travailler selon les normes les plus élevées.",
    bgColor: "bg-[#1090cb]",
    titleColor: "text-white",
    textColor: "text-white",
    buttonBg: "bg-white",
    buttonText: "text-[#1090cb]",
  },
];

export const ContactSection = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className={`${card.bgColor} rounded-2xl border-0 shadow-lg hover:shadow-xl transition-shadow duration-300`}
          >
            <CardContent className="p-8 lg:p-12 h-full flex flex-col justify-between min-h-[400px]">
              <div className="space-y-6">
                <h2 className={`font-semibold ${card.titleColor} text-2xl lg:text-3xl text-center leading-tight`}>
                {card.title}
                </h2>

                <p className={`font-normal ${card.textColor} text-base lg:text-lg text-center leading-relaxed whitespace-pre-line`}>
                  {card.content}
                </p>
              </div>

              <div className="flex justify-center mt-8">
                <Button
                  className={`${card.buttonBg} ${card.buttonText} rounded-lg font-medium text-base px-8 py-3 hover:opacity-90 transition-opacity duration-200`}
                >
                  View More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
