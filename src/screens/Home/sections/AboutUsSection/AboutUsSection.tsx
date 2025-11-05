import React from "react";
import { Separator } from "../../../../components/ui/separator";

const navigationLinks = ["Lorem", "Portfolio", "Careers", "Contact us"];

export const AboutUsSection = (): JSX.Element => {
  return (
    <div className="w-full px-4 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <p className="text-gray-600 text-base font-normal leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="text-gray-600 text-base font-normal leading-relaxed">
              @Lorem
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-medium text-black text-lg leading-tight mb-4">
              About us
            </h3>
            <nav className="space-y-2">
              {navigationLinks.map((link, index) => (
                <div
                  key={index}
                  className="font-normal text-gray-600 text-base leading-relaxed hover:text-[#1090cb] cursor-pointer transition-colors duration-200"
                >
                  {link}
                </div>
              ))}
            </nav>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-medium text-black text-lg leading-tight mb-4">
              Contact us
            </h3>
            <p className="text-gray-600 text-base font-normal leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="text-gray-600 text-base font-normal leading-relaxed">
              +908 89097 890
            </p>
          </div>

          <div className="md:col-span-1 flex justify-end">
            <img
              className="w-52 h-16 object-contain"
              alt="Group"
              src="/group-12.png"
            />
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="text-center">
          <p className="font-normal text-gray-500 text-sm leading-relaxed">
            Copyright ® 2021 Lorem All rights Rcerved
          </p>
        </div>
      </div>
    </div>
  );
};
