"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

type NavItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/#about" },
  { title: "Experience", href: "/#experience" },
  { title: "Skill", href: "/#skill" },
  { title: "Project", href: "/#project" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/#contact" },
];

type Props = {
  resume: string;
};

const Header = ({ resume }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pathWithHash, setPathWithHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setPathWithHash(window.location.pathname + window.location.hash);
    };

    // Set the initial path with hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleLinkClick = (href: string) => {
    setPathWithHash(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1B2631]">
      <div className="container max-w-screen-xl flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8">
              <span className="text-3xl text-white font-bold">jhshakil</span>
            </div>
          </Link>
        </div>

        <nav className="hidden xl:flex md:flex-1 md:items-center md:justify-center">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className={`text-base transition-colors hover:text-blue-400 ${
                    pathWithHash === item.href
                      ? "text-blue-400"
                      : "text-gray-200"
                  }`}
                  onClick={() => handleLinkClick(item.href)} // Update state on click
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden xl:block">
          <Button
            variant="secondary"
            className="bg-[#517C96] text-white hover:bg-[#416379]"
          >
            <Link href={resume || "#"} target="_blank">
              Resume
            </Link>
          </Button>
        </div>

        <div className="flex flex-1 items-center justify-end xl:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-white hover:bg-transparent"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1B2631] text-white">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`text-sm transition-colors hover:text-blue-400 ${
                      pathWithHash === item.href
                        ? "text-blue-400"
                        : "text-gray-200"
                    }`}
                    onClick={() => {
                      handleLinkClick(item.href); // Update state on click
                      setIsOpen(false); // Close the sheet
                    }}
                  >
                    {item.title}
                  </Link>
                ))}
                <Button
                  variant="secondary"
                  className="mt-4 bg-[#517C96] text-white hover:bg-[#416379]"
                >
                  Hire Me
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
