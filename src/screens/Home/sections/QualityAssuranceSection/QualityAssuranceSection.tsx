import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const QualityAssuranceSection = (): JSX.Element => {
  const { t } = useLanguage();

  const bulletPoints = t("home.quality.steps") as unknown as string[];

  return (
    <div className="w-full">
      <Card className="border-0 shadow-none bg-transparent">
        <CardContent className="p-0 space-y-6">
          <div className="flex items-start gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="w-[58px] h-[58px] bg-[#1090cb] rounded-[29px] flex items-center justify-center flex-shrink-0">
                  <img
                    className="w-[26px] h-[26px]"
                    alt={t("home.quality.badge.title")}
                    src="/icons/custom-service.svg"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-black text-lg leading-tight">
                    {t("home.quality.badge.title")}
                  </h3>
                  <p className="font-normal text-gray-500 text-sm leading-tight">
                    {t("home.quality.badge.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-semibold text-3xl lg:text-4xl leading-tight">
              <span className="text-[#252525]">{t("home.quality.title1")}</span>
              <span className="text-[#1090cb]">{t("home.quality.title2")}</span>
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
