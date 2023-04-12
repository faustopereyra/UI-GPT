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

   <div className={`group w-full text-gray-800 border-b border-black/10 ${isUser ? '': 'bg-slate-50'}`} >
  <div class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto">
    <div class="w-[30px] flex flex-col relative items-end">
      <div class="relative flex">
<img src={userIcon} alt="User Icon" className="w-8 h-8" />          
        </div>
      </div>
    <div class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
      <div class="flex flex-grow flex-col gap-3">
        <div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">{message}</div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Message;



  /*<div className={`w-full px-5 py-8 ${isUser ? 'bg-blue-500' : 'bg-gray-200'}`} >
    <div className={`flex items-start space-x-2`}>
      <img src={userIcon} alt="User Icon" className="w-8 h-8" />
      <div className={`font-serif text-sm`}>
        {message}
      </div>
    </div>
    </div>*/


