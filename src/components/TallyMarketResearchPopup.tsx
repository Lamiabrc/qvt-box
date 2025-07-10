
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface TallyMarketResearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const TallyMarketResearchPopup = ({ isOpen, onClose }: TallyMarketResearchPopupProps) => {
  return (
    <>
      <script async src="https://tally.so/widgets/embed.js"></script>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="flex items-center justify-between">
              Étude de Marché - QVT Box
            </DialogTitle>
          </DialogHeader>
          
          <div className="p-6 pt-0">
            <iframe
              data-tally-src="https://tally.so/embed/mRebOK?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Étude de Marché QVT Box"
              className="rounded-lg"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TallyMarketResearchPopup;
