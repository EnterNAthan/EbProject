import React from "react";
import { Separator } from "../ui/separator";
import { useLanguage } from "../../contexts/LanguageContext";

export const Footer = (): JSX.Element => {
  const { t } = useLanguage();

  const navigationLinks = [
    { label: t("footer.navigation.home"), href: "/" },
    { label: t("footer.navigation.services"), href: "/services" },
    { label: t("footer.navigation.expertise"), href: "/about" },
    { label: t("footer.navigation.contact"), href: "/contact" },
  ];
  return (
    <footer className="w-full bg-[#e8f4fa]">
      <div className="max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center py-8">
          <div className="w-32 h-32 relative">
            <div className="absolute w-24 h-24 top-4 left-4 bg-[#1090cb]" />
            <img
              className="w-32 h-32 absolute top-0 left-0 object-cover"
              alt="EB Services Logo"
              src="/illustrations/chatgpt-image-12-juin-2025--23-04-46-removebg-preview-1-1.png"
            />
          </div>
        </div>

        {/* Footer Content */}
        <div className="w-full px-4 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* About Section */}
              <div className="md:col-span-1">
                <p className="text-gray-600 text-base font-normal leading-relaxed mb-4">
                  {t("footer.aboutText")}
                </p>
                <p className="text-gray-600 text-base font-normal leading-relaxed">
                  {t("footer.social")}
                </p>
              </div>

              {/* Navigation Links */}
              <div className="md:col-span-1">
                <h3 className="font-medium text-black text-lg leading-tight mb-4">
                  {t("footer.about")}
                </h3>
                <nav className="space-y-2">
                  {navigationLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block font-normal text-gray-600 text-base leading-relaxed hover:text-[#1090cb] cursor-pointer transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Contact Section */}
              <div className="md:col-span-1">
                <h3 className="font-medium text-black text-lg leading-tight mb-4">
                  {t("footer.contactTitle")}
                </h3>
                <p className="text-gray-600 text-base font-normal leading-relaxed mb-4">
                  {t("footer.contactText")}
                </p>
                <p className="text-gray-600 text-base font-normal leading-relaxed">
                  {t("footer.email")}
                </p>
              </div>

              {/* Logo Image */}
              <div className="md:col-span-1 flex justify-end">
                <img
                  className="w-52 h-16 object-contain"
                  alt="EB Services"
                  src="/logos/group-12.png"
                />
              </div>
            </div>

            <Separator className="mb-6" />

            {/* Copyright */}
            <div className="text-center">
              <p className="font-normal text-gray-500 text-sm leading-relaxed">
                {t("footer.copyright")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
