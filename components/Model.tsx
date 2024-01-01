import React from "react";

interface ModelProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Model: React.FC<ModelProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50   bg-gray-400 bg-opacity-60">
      <div className="bg-gray-900 w-full max-w-4xl h-fit mx-2  p-2 rounded-lg shadow-lg mt-12 md:mt-0">
        <div className="text-right">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none pr-1 md:pr-2 text-3xl"
          >
            ×
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Model;
