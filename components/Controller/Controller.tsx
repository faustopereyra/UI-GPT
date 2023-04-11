import React from 'react';

interface ControllerProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}

const Controller: React.FC<ControllerProps> = ({ icon, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center p-2 space-x-2 cursor-pointer"
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default Controller;
