import React, { useState } from 'react';

interface FolderProps {
  defaultName?: string;
}

const Folder: React.FC<FolderProps> = ({ defaultName = 'New Folder' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(defaultName);
  const [isEditing, setIsEditing] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSave = () => {
    if (name.trim() === '') return;
    setIsEditing(false);
  };

  return (
    <div className="p-2">
      {isEditing ? (
        <input
          autoFocus
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleSave}
          className="px-2 py-1 border-2 border-blue-500 rounded-md focus:outline-none"
        />
      ) : (
        <div
          onClick={() => setIsEditing(true)}
          className="font-semibold cursor-pointer"
        >
          {name}
        </div>
      )}
      {isOpen && <div className="ml-4">Subfolders and files go here</div>}
    </div>
  );
};

export default Folder;
