import {FC} from 'react';

interface IChatsProps {
    status : string;
    userName : string;
    time : string;
    content : string;
}

export const Chats:FC<IChatsProps> = ({status, userName, time, content}) => {
  return (
    <>
      <div className=' px-18 bg-gray-900'> {/*container*/}
        <div> {/*chats*/}

          {
            status==="receiver" ? 
            <div className='flex flex-col'>
              <div className='mb-3'>
              <span className='text-white text-xs'>{userName}</span>
              <span className='mx-px text-white text-xs'>-</span>
              <span className='text-white text-xs'>{time}</span>
              </div>

              <div className='flex pb-7.5'>
                <div className='bg-purple-600 max-w-fit p-3.5 rounded-b-lg rounded-tr-lg flex text-white text-xs'><p>{content}</p></div>
                <div></div>
              </div>
            </div> :
            
            <div className='flex flex-col'>
              <div className='self-end mb-3'>
              <span className='text-white text-xs'>{userName}</span>
              <span className='mx-px text-white text-xs'>-</span>
              <span className='text-white text-xs'>{time}</span>
              </div>

              <div className='flex justify-between pb-7.5'>
                <div></div>
                <div className='bg-emerald-500 max-w-fit p-3.5 rounded-t-lg rounded-bl-lg text-white text-xs'><p>{content}</p></div>
              </div>
            </div>   
          }
        </div>
      </div>
    </>
  );
}
