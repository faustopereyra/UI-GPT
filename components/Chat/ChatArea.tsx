import React from 'react';
import Message, { MessageData } from './Message';

interface ChatAreaProps {
  messages: MessageData[];
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages }) => {
  return (
    <div className="w-full h-full p-4 space-y-4 overflow-y-auto">
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
};

export default ChatArea;
