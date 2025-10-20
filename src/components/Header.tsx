import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Schedule", path: "/schedule" },
    { name: "Course", path: "/course" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Retreats", path: "/retreats" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Doduka Logo" className="h-10 sm:h-12 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <Button className="hidden lg:flex bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            Join a Class
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 space-y-2 border-t border-border">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary bg-muted" : "text-foreground"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="px-4 pt-2">
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Join a Class
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
