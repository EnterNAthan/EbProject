import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const TranslationServicesSection = (): JSX.Element => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="p-0 space-y-6">
              <div className="flex items-start gap-4">
                <div className="relative w-[58px] h-[58px] bg-[#07d3bb] rounded-[29px] flex items-center justify-center flex-shrink-0">
                  <img
                    className="w-[26px] h-[26px]"
                    alt={t("home.translation.badge.title")}
                    src="/icons/fast-delivery.svg"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-medium text-black text-lg leading-tight mb-1">
                    {t("home.translation.badge.title")}
                  </h3>
                  <p className="font-normal text-gray-500 text-sm leading-tight">
                    {t("home.translation.badge.description")}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-semibold text-3xl lg:text-4xl leading-tight">
                  <span className="text-[#1090cb]">
                    {t("home.translation.title1")}
                  </span>
                  <span className="text-[#252525]">{t("home.translation.title2")}</span>
                </h2>

                <div className="font-normal text-gray-600 text-base lg:text-lg leading-relaxed">
                  {(t("home.translation.steps") as unknown as string[]).map((step: string, index: number) => (
                    <React.Fragment key={index}>
                      {step}
                      {index < 4 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
        </CardContent>
      </Card>
    </div>
  );
};
