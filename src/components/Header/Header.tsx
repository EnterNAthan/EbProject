import React from "react";
import { Button } from "../ui/button";
import { LanguageSelector } from "../LanguageSelector";
import { useLanguage } from "../../contexts/LanguageContext";

interface HeaderProps {
  currentPath?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPath = "/" }) => {
  const { t } = useLanguage();

  const navigationItems = [
    { label: t("header.home"), href: "/" },
    { label: t("header.services"), href: "/services" },
    { label: t("header.blog"), href: "/blog" },
    { label: t("header.about"), href: "/about" },
    { label: t("header.pricing"), href: "/pricing" },
  ];

  const handleContactClick = () => {
    window.location.href = "mailto:contact@ebservices.com?subject=Demande de contact général&body=Bonjour,%0D%0A%0D%0AJe souhaiterais vous contacter concernant vos services de traduction.%0D%0A%0D%0ACordialement";
  };

  return (
    <header className="relative w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="block">
            <div className="w-[142px] h-[136px] relative">
              <div className="absolute w-24 h-24 top-4 left-4 bg-[#1090cb]" />
            <img
              className="w-32 h-32 absolute top-0 left-0 object-cover"
              alt="EB Services Logo"
              src="/illustrations/chatgpt-image-12-juin-2025--23-04-46-removebg-preview-1-1.png"
            />
            </div>
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`transition-colors duration-200 font-normal text-base ${
                item.href === currentPath
                  ? "text-[#1090cb] font-medium"
                  : "text-black hover:text-[#1090cb]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language Selector & Contact Button */}
        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <Button
            onClick={handleContactClick}
            className="bg-[#1090cb] hover:bg-[#0e7ba8] text-white px-6 py-2 rounded-md text-sm font-normal"
          >
            {t("header.contact")}
          </Button>
        </div>
      </div>
    </header>
  );
};
