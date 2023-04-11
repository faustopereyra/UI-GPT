import React, { useState } from 'react';

interface PromptProps {
  onSend: (message: string) => void;
}

const Prompt: React.FC<PromptProps> = ({ onSend }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend(inputText);
    setInputText('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center p-2 space-x-2 bg-gray-200"
    >
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="w-full px-2 py-1 bg-white rounded-md focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-1 font-semibold text-white bg-blue-500 rounded-md"
      >
        Send
      </button>
    </form>
  );
};

export default Prompt;
