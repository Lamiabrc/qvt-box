
import React, { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface TallyMarketResearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const TallyMarketResearchPopup = ({ isOpen, onClose }: TallyMarketResearchPopupProps) => {
  useEffect(() => {
    if (isOpen) {
      // Charger le script Tally quand le popup s'ouvre
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.head.appendChild(script);

      return () => {
        // Nettoyer le script quand le popup se ferme
        const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>
            Étude de Marché - QVT Box
          </DialogTitle>
        </DialogHeader>
        
        <div className="p-6 pt-0">
          <iframe
            data-tally-src="https://tally.so/embed/mRebOK?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Étude de Marché QVT Box"
            className="rounded-lg border"
            style={{ minHeight: '600px', backgroundColor: '#f9fafb' }}
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TallyMarketResearchPopup;
