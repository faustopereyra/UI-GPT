import React, {useState} from 'react';
import Sidebar from '../components/FileExplorer/Sidebar';
import Controller from '../components/Controller/Controller';
import SelectAPI from '../components/SelectAPI/SelectAPI';
import ChatArea from '../components/Chat/ChatArea';
import Prompt from '../components/Chat/Prompt';

const Home = () => {
  const [messages, setMessages] = useState<MessageData[]>([
    {
      userIcon: 'https://via.placeholder.com/50',
      message: 'Initial message from the system',
      isUser: false,
    },
  ]);

  const sendMessage = (text: string) => {
    setMessages([
      ...messages,
      { userIcon: 'https://via.placeholder.com/50', message: text, isUser: true },
    ]);
    // Add logic to send the text to the API and append the response as a new message
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between p-4">
          <SelectAPI />
          <Controller
            icon={<i className="fas fa-cog"></i>}
            text="Settings"
            onClick={() => {}}
          />
        </div>
        <div className={"flex flex-col h-full"} >
          <ChatArea messages={messages} />
          <Prompt onSend={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Home;