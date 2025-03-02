import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1B2631] py-12 text-gray-200">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl font-semibold">Jahid Hasan</h2>

        <nav className="flex space-x-6 text-base">
          <Link
            href="/#about"
            className="transition-colors hover:text-blue-400"
          >
            About
          </Link>
          <Link
            href="/#project"
            className="transition-colors hover:text-blue-400"
          >
            Project
          </Link>
        </nav>

        <div className="flex space-x-4">
          <Link
            href="https://github.com/jhshakil"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-400"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jhshakil"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-400"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:jhshakil11275@gmail.com"
            className="transition-colors hover:text-blue-400"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        <p className="text-sm text-gray-400">© Jahid. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
