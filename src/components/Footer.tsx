import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-4">
          <a
            href="https://instagram.com/doduka_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="text-sm font-medium">@doduka_</span>
          </a>
          <p className="text-sm text-muted-foreground">
            © 2025 Doduka Gureshidze. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Full website will be published soon.
          </p>
        </div>
      </div>
    </footer>
  );
};
