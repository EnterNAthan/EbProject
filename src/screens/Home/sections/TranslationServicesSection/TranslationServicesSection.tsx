import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TranslationServicesSection = (): JSX.Element => {
  return (
    <div className="w-full">
      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="p-0 space-y-6">
              <div className="flex items-start gap-4">
                <div className="relative w-[58px] h-[58px] bg-[#07d3bb] rounded-[29px] flex items-center justify-center flex-shrink-0">
                  <img
                    className="w-[26px] h-[26px]"
                    alt="Happy"
                    src="/happy-1.svg"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-medium text-black text-lg leading-tight mb-1">
                    Lorem Ipsum is simply dummy text
                  </h3>
                  <p className="font-normal text-gray-500 text-sm leading-tight">
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-semibold text-3xl lg:text-4xl leading-tight">
                  <span className="text-[#1090cb]">
                    Estimation &amp; Création
                  </span>
                  <span className="text-[#252525]"> de devis en 24H</span>
                </h2>

                <p className="font-normal text-gray-600 text-base lg:text-lg leading-relaxed">
                  Déposez rapidement vos documents à traduire.
                  <br />
                  Nous analysons chaque demande avec attention.
                  <br />
                  Profitez d&apos;une prise en charge sur-mesure.
                  <br />
                  Recevez votre devis gratuit en 24h.
                  <br />
                  Une proposition claire et adaptée à vos besoins linguistiques.
                </p>
              </div>
        </CardContent>
      </Card>
    </div>
  );
};
