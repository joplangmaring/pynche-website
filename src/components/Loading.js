"use client";
import Image from 'next/image';
import { PropagateLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="spinner-container absolute h-[100svh] w-[100svw]">
        <div className="spinner-background" />
        <div className="spinner">
            <PropagateLoader color="#eaf3a4" />
        </div>
        <style jsx>{`
        .spinner-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .spinner-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #3e4e4e;
        }
        .spinner {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </div>
    // <div className='bg-black w-[100svw] h-[100svh]'>
    //   <div className="flex h-full w-full items-center justify-center bg-opacity-50">
    //     <div className="animate-spin">
    //       <Image src={beesCircle} alt="Loading..." width={100} height={100} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Loading;
