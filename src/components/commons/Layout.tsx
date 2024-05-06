import { ReactNode } from "react";
import { Header } from "./Header";
import { JetBrains_Mono } from "next/font/google";

interface LayoutProps {
  children: ReactNode;
}

const jetbtainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
});

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={jetbtainsMono.className}>
        <Header />
        {children}
      </div>
    </>
  );
}
