import React from 'react';

export interface MessageData {
  userIcon: string;
  message: string;
  isUser?: boolean;
}

const Message: React.FC<MessageData> = ({
  userIcon,
  message,
  isUser = false,
}) => {
  return (
    <div className={`flex items-start space-x-2 ${isUser ? 'justify-end' : ''}`}>
      <img src={userIcon} alt="User Icon" className="w-8 h-8 rounded-full" />
      <div className={`p-2 rounded-lg ${isUser ? 'bg-blue-500' : 'bg-gray-200'}`}>
        {message}
      </div>
    </div>
  );
};

export default Message;
