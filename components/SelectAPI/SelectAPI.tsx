import React, { useState } from 'react';

const SelectAPI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown} className="p-2 bg-gray-200">
        Select API
      </button>
      {isOpen && (
        <div className="absolute mt-2 space-y-1 bg-white">
          {/* Render API list here */}
        </div>
      )}
    </div>
  );
};

export default SelectAPI;
