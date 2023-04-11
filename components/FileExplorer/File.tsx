import React, { useState } from 'react';

interface FileProps {
  defaultName?: string;
}

const File: React.FC<FileProps> = ({ defaultName = 'New File' }) => {
  const [name, setName] = useState(defaultName);
  const [isEditing, setIsEditing] = useState(false);

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
    </div>
  );
};

export default File;
