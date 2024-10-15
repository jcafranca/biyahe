"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./data";
import { NavigationMenuDemo } from "./navigation";
import ThemeToggle from "./ThemeToogle";

const Header = () => {
  const pathUrl = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className="top-0 z-40 sticky bg-background">
        <nav>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex gap-2">
                    <Link
                      className="flex flex-row py-2 gap-x-2 mr-10 font-bold"
                      href="/"
                    >
                      <Image
                        width={50}
                        height={24}
                        src="/images/logo.png"
                        alt=""
                      />
                      <div className="flex flex-col">
                        <div className="flex flex-row">
                          <span className="text-blue-500">LOVE&nbsp;</span>8
                        </div>
                        <span className="text-xs">Travel & Tours</span>
                      </div>
                    </Link>
                    <NavigationMenuDemo />
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
