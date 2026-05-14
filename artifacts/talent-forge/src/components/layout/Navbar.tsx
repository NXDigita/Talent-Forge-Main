import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Shield, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "For Students", href: "/for-students" },
    { name: "For Employers", href: "/for-employers" },
    { name: "For Colleges", href: "/for-colleges" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-400 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(124,58,237,0.4)]">
            TF
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none text-zinc-900 tracking-tight">
              Talent Forge
            </span>
            <span className="text-[10px] text-amber-500 font-medium leading-none tracking-wider uppercase">by WIER AI.co</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-violet-600 ${
                location === link.href ? "text-violet-600" : "text-zinc-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/dashboard/student"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Log in
          </Link>
          <Button className="bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 text-white border-0 shadow-[0_4px_14px_0_rgba(124,58,237,0.35)] transition-all duration-200">
            Get Started
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-600 hover:text-zinc-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-zinc-200 p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-medium py-2 ${
                location === link.href ? "text-violet-600" : "text-zinc-600"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-zinc-100 my-2" />
          <Link
            href="/dashboard/student"
            className="text-base font-medium text-zinc-600 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Log in
          </Link>
          <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-500 text-white border-0 mt-2">
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
}
