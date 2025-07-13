
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const TallyMarketResearchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-hidden p-0 gap-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Étude de marché QVT Box</DialogTitle>
        </DialogHeader>
        
        {/* Close button - visible on mobile */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-50 h-8 w-8 rounded-full bg-white/80 hover:bg-white shadow-md"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="w-full h-[600px] max-h-[80vh]">
          <iframe
            src="https://tally.so/r/w2jbQD"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Étude de marché QVT Box"
            className="rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TallyMarketResearchPopup;
