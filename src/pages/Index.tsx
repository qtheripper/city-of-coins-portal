import { useEffect, useState } from "react";
import logo from "@/assets/city-of-coins-logo.png";

const Index = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRedirecting(true);
      window.location.replace("https://www.cityofcoins.net");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background overflow-hidden">
      {/* Background geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 border-l-8 border-t-8 border-primary/20 transform -rotate-12" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 border-r-8 border-b-8 border-primary/20 transform rotate-12" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 border-4 border-primary/15" />
      </div>

      <div className="relative z-10 text-center space-y-8 animate-fade-in px-4">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img 
            src={logo} 
            alt="City of Coins Logo" 
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-light tracking-wider text-foreground">
          City of Coins
        </h1>

        {/* Tagline */}
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Powered by Your Stateside Crypto Exchange
        </p>

        {/* Loading spinner */}
        <div className="flex justify-center pt-4">
          <div className="w-10 h-10 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
};

export default Index;
