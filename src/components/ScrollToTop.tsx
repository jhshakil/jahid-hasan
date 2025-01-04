"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Button
        variant="secondary"
        size="icon"
        className="fixed bottom-8 right-8 rounded-full bg-[#517C96] text-white opacity-80 hover:bg-[#416379] hover:opacity-100"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-4 w-4" />
        <span className="sr-only">Go to top</span>
      </Button>
    </div>
  );
};

export default ScrollToTop;
