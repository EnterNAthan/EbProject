import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const TestimonialsSection = (): JSX.Element => {
  const { t } = useLanguage();

  const testimonialData = {
    avatar: {
      bgColor: "bg-[#9207d3]",
      iconSrc: "/icons/quality-check.svg",
    },
    user: {
      name: t("home.testimonials.user.name"),
      subtitle: t("home.testimonials.user.title"),
    },
    heading: {
      parts: [
        { text: t("home.testimonials.heading1"), color: "text-black" },
        { text: t("home.testimonials.heading2"), color: "text-[#1090cb]" },
        { text: t("home.testimonials.heading3"), color: "text-black" },
        { text: t("home.testimonials.heading4"), color: "text-[#1090cb]" },
      ],
    },
    description: t("home.testimonials.description"),
  };

  return (
    <div className="w-full">
      <Card className="border-0 shadow-none bg-transparent">
        <CardContent className="p-0">
          <div className="flex flex-col space-y-6">
            <div className="flex items-start space-x-4">
              <div className="relative">
                <Avatar className="w-[58px] h-[58px]">
                  <AvatarFallback
                    className={`${testimonialData.avatar.bgColor} rounded-full flex items-center justify-center`}
                  />
                </Avatar>
                <img
                  className="absolute w-[26px] h-[26px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  alt="Contrôle qualité"
                  src={testimonialData.avatar.iconSrc}
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-black text-lg leading-tight mb-1">
                  {testimonialData.user.name}
                </h3>
                <p className="font-normal text-gray-500 text-sm leading-tight">
                  {testimonialData.user.subtitle}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-semibold text-3xl lg:text-4xl leading-tight">
                {testimonialData.heading.parts.map((part, index) => (
                  <span key={index} className={part.color}>
                    {part.text}
                  </span>
                ))}
              </h2>

              <div className="font-normal text-gray-600 text-base lg:text-lg leading-relaxed">
                {testimonialData.description.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index <
                      testimonialData.description.split("\n").length - 1 && (
                      <br />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
