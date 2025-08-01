import {FC} from 'react';

interface IUserProps {
    id : number;
    userName : string;
    status : string;
    avatar : string;
}

export  const User:FC<IUserProps> = ({id, userName, status, avatar}) => {
  return (
    <>
      <div className='py-8 px-18 bg-gray-900'>  {/*class container*/}
        <div className='flex justify-between pb-13.5'>  {/*class user*/}

          <div className='flex items-center'>  {/*class user-info*/}
            <div><img src={avatar} alt="" className='h-12 w-12 rounded-full'/></div>  {/*class img-class*/}

            <div className='flex flex-col ml-4 text-white'>
              <p className='text-base font-bold mt-1.375'>{userName}</p>  {/*class name*/}

              <div className='flex items-center mt-px'>
                <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
                <div className='text-green-500 font-medium'>{status}</div>
              </div>
            </div>
          </div>

          <div className='self-center text-white mr-1.0425'>  {/*class close*/}
          <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.41142 0.380224C1.12666 0.0954672 0.664982 0.0954672 0.380224 0.380224C0.0954672 0.664982 0.0954672 1.12666 0.380224 1.41142L4.96879 5.99999L0.380224 10.5886C0.0954672 10.8733 0.0954672 11.335 0.380224 11.6198C0.664982 11.9045 1.12666 11.9045 1.41142 11.6198L5.99999 7.03119L10.5886 11.6198C10.8733 11.9045 11.335 11.9045 11.6198 11.6198C11.9045 11.335 11.9045 10.8733 11.6198 10.5886L7.03119 5.99999L11.6198 1.41142C11.9045 1.12666 11.9045 0.664982 11.6198 0.380224C11.335 0.0954672 10.8733 0.0954672 10.5886 0.380224L5.99999 4.96879L1.41142 0.380224Z" fill="white"/>
          </svg>
          </div>
        </div>
      </div>

      {/* <div className='bg-blue-300'>{id}</div>
      <div>{userName}</div>
      <div>{status}</div>
      <div>
        <img src={avatar} alt="" />
      </div> */}
    </>
  );
}
