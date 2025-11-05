import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const QualityAssuranceSection = (): JSX.Element => {
  const bulletPoints = [
    "Vous validez chaque étape du projet en toute confiance.",
    "Nos experts linguistiques assurent précision et rigueur.",
    "Traduction conforme à vos exigences et délais.",
    "Vos contenus sont localisés dans la langue cible choisie.",
    "Un suivi personnalisé jusqu'à la livraison finale.",
  ];

  return (
    <div className="w-full">
      <Card className="border-0 shadow-none bg-transparent">
        <CardContent className="p-0 space-y-6">
                <div className="flex items-start gap-4">
                  <img
                    className="w-[26px] h-[26px] flex-shrink-0 mt-4"
                    alt="Happy"
                    src="/happy-1.svg"
                  />

                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <div className="w-[58px] h-[58px] bg-[#1090cb] rounded-[29px] flex-shrink-0" />

                      <div className="space-y-1">
                        <h3 className="font-medium text-black text-lg leading-tight">
                          Lorem Ipsum is simply dummy text
                        </h3>
                        <p className="font-normal text-gray-500 text-sm leading-tight">
                          Lorem Ipsum is simply dummy text
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="font-semibold text-3xl lg:text-4xl leading-tight">
                    <span className="text-[#252525]">
                      Processus de traduction{" "}
                    </span>
                    <span className="text-[#1090cb]">sur-mesure</span>
                  </h2>

                  <div className="space-y-3">
                    {bulletPoints.map((point, index) => (
                      <p
                        key={index}
                        className="font-normal text-gray-600 text-base lg:text-lg leading-relaxed"
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
        </CardContent>
      </Card>
    </div>
  );
};
