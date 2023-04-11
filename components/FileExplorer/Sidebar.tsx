import React from 'react';
import Folder from './Folder';
import File from './File';

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 h-full overflow-y-auto border-r-2">
      <Folder />
      <File />
    </div>
  );
};

export default Sidebar;
