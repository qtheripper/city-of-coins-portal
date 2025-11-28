import { useEffect, useState } from "react";

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
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          City of Coins
        </h1>
        <div className="flex justify-center">
          <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
        <p className="text-muted-foreground">Redirecting...</p>
      </div>
    </div>
  );
};

export default Index;
