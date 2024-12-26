import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <div className="gap-11 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-3xl">
              Jahid Hasan
            </span>
          </Link>
          <nav className="flex items-center space-x-6 font-medium text-xl">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
