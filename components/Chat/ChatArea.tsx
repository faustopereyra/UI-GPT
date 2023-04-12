import React from 'react';
import Message, { MessageData } from './Message';

interface ChatAreaProps {
  messages: MessageData[];
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages }) => {
  return (
    <div className="w-full h-full mb-auto overflow-y-auto">
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
};

export default ChatArea;