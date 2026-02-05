import { useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  Mic,
  Gem,
  Flame,
  CircleDollarSign,
  Gift,
  KeyRound,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import { navLinks } from "../../data/mockData";

const iconMap = {
  Gem,
  Flame,
  CircleDollarSign,
  Heart: Heart,
  Gift,
  KeyRound,
  GraduationCap,
  ChevronDown,
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="flex flex-col w-full z-50">
      {/* Top navigation bar - maroon background */}
      <nav className="flex flex-col bg-maroon">
        <div className="flex items-center justify-center px-4 py-8 h-14">
          {/* Desktop nav */}
          <ul className="hidden md:flex items-center justify-center gap-6 lg:gap-24 py-2.5">
            {navLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-white/90 hover:text-gold text-xs lg:text-sm font-medium transition-colors"
                  >
                    {Icon && <Icon size={14} className="shrink-0" />}
                    <span>{link.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center justify-between w-full py-2.5">
            <span className="text-white text-sm font-medium">Menu</span>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white cursor-pointer"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="flex md:hidden flex-col border-t border-white/10 bg-maroon-deep">
            <ul className="flex flex-col px-4 py-2">
              {navLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 py-2.5 text-white/90 hover:text-gold text-sm font-medium transition-colors"
                    >
                      {Icon && <Icon size={14} />}
                      <span>{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>

      {/* Bottom bar - white background with logo, search, icons */}
      <div className="flex items-center bg-white border-b border-gray-100">
        <div className="flex items-center justify-around w-full px-3 py-2 gap-3 md:px-6 md:gap-6">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img src="/logo.png" alt="DiaMantra" className="h-16 md:h-32 w-auto " />
          </a>

          {/* Search bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
            <div className="flex items-center w-full border border-gray-300 rounded-full h-12 px-8  focus-within:border-maroon transition-colors">
              <input
                type="text"
                placeholder="Search"
                className="flex-1  ml-4 text-sm bg-transparent focus:outline-none"
              />
              <div className="flex items-center gap-2 shrink-0">
                <button className="flex items-center justify-center w-8 h-8 text-gray-text hover:text-maroon transition-colors cursor-pointer">
                  <Mic size={18} />
                </button>
                <div className="w-px h-5 bg-gray-300" />
                <button className="flex items-center justify-center w-8 h-8 text-gray-text hover:text-maroon transition-colors cursor-pointer">
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Mobile search */}
            <button className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 hover:border-maroon hover:text-maroon transition-colors cursor-pointer">
              <Search size={16} className="text-charcoal" />
            </button>

            <button className="flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full border border-gray-200 hover:border-maroon hover:text-maroon transition-colors cursor-pointer">
              <ShoppingCart size={18} className="text-charcoal" />
            </button>
            <button className="flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full border border-gray-200 hover:border-maroon hover:text-maroon transition-colors cursor-pointer">
              <Heart size={18} className="text-charcoal" />
            </button>
            <button className="flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full border border-gray-200 hover:border-maroon hover:text-maroon transition-colors cursor-pointer">
              <User size={18} className="text-charcoal" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
