import React from 'react';

interface BonusPopupProps {
  onClose: () => void;
}

const BonusPopup: React.FC<BonusPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h3 className="text-2xl font-bold mb-4 text-[#5865F2] font-sf-pro">Don't forget your bonus!</h3>
        <p className="text-gray-600 mb-6 font-sf-pro-thin-italic">
          You have a special bonus waiting for you. Join now to claim it!
        </p>
        <button
          onClick={onClose}
          className="w-full bg-[#5865F2] text-white font-sf-pro font-bold py-2 px-4 rounded-lg hover:bg-[#4752C4] transition-colors duration-300"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default BonusPopup;