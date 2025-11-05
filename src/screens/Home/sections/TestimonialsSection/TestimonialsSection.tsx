import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  const testimonialData = {
    avatar: {
      bgColor: "bg-[#9207d3]",
      iconSrc: "/happy-1.svg",
    },
    user: {
      name: "Lorem Ipsum is simply dummy text",
      subtitle: "Lorem Ipsum is simply dummy text",
    },
    heading: {
      parts: [
        { text: "Relecture ", color: "text-black" },
        { text: "finale", color: "text-[#1090cb]" },
        { text: " et gestion de ", color: "text-black" },
        { text: "projet ", color: "text-[#1090cb]" },
      ],
    },
    description:
      "Chaque traduction est soigneusement relue et corrigée.\nContrôle final pour garantir l'exactitude et la qualité.\nValidation complète avant la livraison.\nDocuments transmis dans le respect des délais convenus.\nFacturation transparente et archivage sécurisé de vos projets.",
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
                    className={`${testimonialData.avatar.bgColor} rounded-full`}
                  />
                </Avatar>
                <img
                  className="absolute w-[26px] h-[26px] top-4 left-4"
                  alt="Happy"
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
