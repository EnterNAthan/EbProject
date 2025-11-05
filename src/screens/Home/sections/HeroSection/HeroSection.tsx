import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  const headingParts = [
    { text: "Des traductions ", color: "text-black" },
    { text: "humaines", color: "text-[#1090cb]" },
    { text: "\nUne expertise ", color: "text-black" },
    { text: "linguistique", color: "text-[#1090cb]" },
    { text: "\nDes solutions", color: "text-black" },
    { text: " sur mesure", color: "text-[#1090cb]" },
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
        Spécialiste de la traduction pour l&apos;industrie,
        <br />
        j&apos;accompagne les entreprises dans la rédaction de leurs notices
        techniques.
        <br />
        Des traductions précises et adaptées à vos exigences sectorielles,
        <br />
        pour garantir la clarté et la conformité de vos documents.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <Button
          variant="outline"
          className="bg-white border-2 border-[#1090cb] text-[#1090cb] hover:bg-[#1090cb] hover:text-white px-8 py-3 rounded-lg font-medium text-base transition-colors duration-200"
        >
          Découvrir
        </Button>

        <Button className="bg-[#1090cb] hover:bg-[#0e7ba8] text-white px-8 py-3 rounded-lg font-normal text-base transition-colors duration-200">
          Contactez-moi
        </Button>
      </div>
    </div>
  );
};
