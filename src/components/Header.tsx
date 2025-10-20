import logo from "@/assets/doduka-logo.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 sm:h-20">
          <img src={logo} alt="Doduka Logo" className="h-8 w-auto" />
        </div>
      </div>
    </header>
  );
};
