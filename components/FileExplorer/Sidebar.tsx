import React from 'react';
import Folder from './Folder';
import File from './File';
import NewChat from "./NewChat"

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 h-full border-r-2">
      <NewChat />
      <Folder />
      <File />
    </div>
  );
};

export default Sidebar;
