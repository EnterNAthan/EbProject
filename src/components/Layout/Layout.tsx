import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
  currentPath?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPath = "/" }) => {
  return (
    <div className="bg-white w-full min-h-screen">
      <Header currentPath={currentPath} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
