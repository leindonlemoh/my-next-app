import React,{useState,useEffect} from 'react'
import axiosInstance from '@/lib/axiosInstance'
import Modal from './Modal';
import { useRouter,useSearchParams } from 'next/navigation';
import ViewPerformance from './ViewPerformance';
import StudioData from './StudioData';
import Laoding from './Laoding';
const View = () => {
    
    // routers
    const router = useRouter();
    const searchParams = useSearchParams();
    const tabQuery = searchParams.get('tab'); 
        const Id = searchParams.get('perfId'); 
    // states
  const [studioData, setStudioData] = useState<any[]>([]);
  const [toggleModal,setToggleModal] = useState(false)
const[totalChurn,setTotalChurn]=useState('')
  const [studioPerformances, setStudioPerformances] = useState<any[]>([]);
  const [newPerformances, setNewPerformances] = useState({
    filter_type:'',
    fb_budget:0,
    fb_ad_lead:0,
    google_budget:0,
    non_fb_ad_lead:0,
    no_intro_sale:0,
    rollover_mem_sold:0,
    attendance:0,
    average_members:"",
    paused_members:"",
    status:1,

  });
  const [isLoading, setIsLaoding] = useState(true)

  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await axiosInstance.get(`/studios/${Id}`);

        if(response){
            setStudioData(response.data);
setIsLaoding(false)

        try{
            const {data} = await axiosInstance.get(`/performance/${Id}`);
            if(data){
                setStudioPerformances(data)

                setIsLaoding(false)
            }
        }catch(error){
console.error('Error fetching data:', error);
        }
    
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
console.log(Id)

  }, [Id]);
  useEffect(() => {
 const allPaused =  studioPerformances.map((item: any) => ({ paused: item.paused_members }))
 const allAverageMembers =  studioPerformances.map((item: any) => ({ average: item.average_members }))
console.log(allAverageMembers)
 let totalPausedValue = 0;
 let totalAverageValue = 0;

 for(let paused of allPaused){
  totalPausedValue += parseInt(paused.paused)   
 }

 for(let averageMem of allAverageMembers){

  totalAverageValue += parseInt(averageMem.average)

 }
  if (totalAverageValue > 0) {
    const get = (totalPausedValue / totalAverageValue) * 100
    const percentage = (get).toFixed(2) 
    setTotalChurn(percentage)

  } else {
    setTotalChurn('0');  
  }
  }, [studioPerformances,totalChurn])
  
const getChurn=()=>{

}
  return (
    <div className='  '>
      {isLoading ? 

        <Laoding bg={'#91cb3e'}
    color ={'#322a57'}
    width={'16'}
height={'16'}/>:
       
        <div className=' flex flex-col items-center border-2 '>
          <div className='w-full flex justify-center  border-b-4 border-[black]
          sticky top-0 z-50 bg-[white]
          '>

             <button className='bg-[#03045e] w-[150px] m-1 p-2 rounded-lg text-[#c7f9cc]'
             onClick={()=>setToggleModal(true)}
             >Add Performance</button>
          </div>

        <div 
        className='sm:flex sm:flex-col sm: items-center
        md:flex md:flex-col md:items-center
        lg:flex lg:flex-row lg:items-start
       w-[100%] h-auto flex flex-row gap-4 '

        >

        <div
        className='
        sm:w-[95%]
        md:w-[90%]
        lg:w-[30%]
        w-[30%] h-[100%] mt-5' 
        >
        <StudioData studioData={studioData} churn={totalChurn}/>
        </div>
        
          <div 
          className='
          sm:w-[95%]
           w-[70%] p-1'
          >
            {studioPerformances.length != 0 &&    
            <ViewPerformance  studioPerformances={studioPerformances}/>   
            
          }
          </div>

              {studioPerformances.length == 0 &&
                    <div>
                        No Performance added
                    </div>
              }
                </div>
                </div>
    }
            <Modal 
            isOpen={toggleModal}
          SetIsOpen={setToggleModal}
          setContent={setNewPerformances}
          content={newPerformances}
          from={'performance'}
          id={Id}
      />
    </div>
    
  )
}

export default View