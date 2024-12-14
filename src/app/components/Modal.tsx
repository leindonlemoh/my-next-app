import React,{useEffect} from 'react';
import StudioForm from './StudioForm';
import axiosInstance from '@/lib/axiosInstance';
import PerformanceForm from './PerformanceForm';

const Modal = ({
  isOpen,
  SetIsOpen,
  content,
  setContent,
  from,
  id
}: {
  isOpen: boolean;
  SetIsOpen: (res: boolean) => void;
  content?: any | null;
  setContent:(res:any | null)=>void
  from : string;
  id?:any
}) => {



const addPerformance  = (e:any)=>{
      e.preventDefault();
      try {
        
        axiosInstance.post(`/performance/addPerformance/${id}`, content).then((res:any | null) => {
      alert("Perfromace Added  Successfully" );
    });
      } catch (error) {
        alert(error)
      }
}

  const onUpdate = (e: any | null) => {
    e.preventDefault();
        axiosInstance.post(`/studios/${content?.id}`, content).then((res:any | null) => {
      alert("Updates Successfully" );
    });
    console.log('Updated studio:', content);
  };

  return isOpen ? (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-50">
      <div className="flex justify-center items-center h-full ">
        <div className="w-[80%] h-[95%] bg-white p-6 rounded-lg flex flex-col justify-center
          sm:w-[95%] sm:h-[80%]
          md:w-[90%] md:h-[90%]
          lg:w-[86%] lg:h-[95%]
        ">
         {from == 'update' && <>
         <h2 className="text-lg font-bold mb-4">View and Update</h2>
          <StudioForm
            content={content}
            from={'update'}
            button={onUpdate}
            stateChange={setContent}
          /></>}
          {from == 'performance' && 

        <div>
          <PerformanceForm
            content={content}
            // from={'update'}
            button={addPerformance}
            stateChange={setContent}
            />
            
        </div>
          }
          <button
            onClick={() => SetIsOpen(false)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
