"use client";

import Header from "@/components/customs/Header";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import "../styles/embla.css"
import { useEffect, useState } from "react";
import PreLoader from "@/components/customs/Common/PreLoader";
import Footer from "@/components/customs/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <ThemeProvider attribute="class" enableSystem={false}>
              <Header />
              {children}
              <Footer />
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
