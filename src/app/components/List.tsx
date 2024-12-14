import React, { useState, useEffect } from 'react';
import axiosInstance from '@/lib/axiosInstance';
import Modal from './Modal';
import { useRouter, usePathname } from 'next/navigation';
import Laoding from './Laoding';

interface Studio {
  deleted_at: string | null;
}

const List = ({ setActiveTab, setGetID }: { setActiveTab: (res: string) => void; setGetID: (res: number) => void }) => {
  const router = useRouter();
const pathname = usePathname();
const urlParams = new URLSearchParams(window.location.search);

  const tab = urlParams.get('tab');

  const [studioList, setStudioList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState({});
  const [toggleModal, setToggleModal] = useState(false);

  const get = async () => {
    try {
      const {data}= await axiosInstance.get('/studios');
      const filteredData = data.filter((studio: Studio) => !studio.deleted_at || studio.deleted_at === null);
      setStudioList(filteredData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching studios:', error);
    }
  };

  useEffect(() => {
    get();
  }, []);

  const th = ['Studio Name', 'Business', 'Address', 'Country', 'Status', 'Action'];

  const openModal = (items: any) => {
    if (content !== items) {
      setContent(items);
    }
    setToggleModal(true);
  };

  const deleteRow = (id: string | number) => {
    const currentDate = new Date();
    const deleted_at = currentDate.toISOString().slice(0, 19).replace('T', ' ');
    const deleted_by = 4;
    axiosInstance
      .post(`/studios/${id}/delete`, { deleted_at, deleted_by, id })
      .then((res) => {
        alert('Deleted Successfully');
        setIsLoading(true);
        get();
      })
      .catch((error) => {
        console.error('Error deleting studio:', error);
      });
  };

  return (
    <div className="border-2 w-full m-2 p-2 flex justify-center rounded-lg">
 
      {isLoading ? <Laoding bg={'#91cb3e'}
    color ={'#322a57'}
    width={'16'}
height={'16'}/>:  <div className="w-full overflow-x-auto rounded-lg">
          <table className="table-auto w-full">
            <thead className="border-2 rounded-lg bg-[#03045e]">
              <tr>
                {th.map((items, i) => (
                  <th className={`text-center bg-[#03045e] text-white w-[150px] ${i == 0 ? 'sm:sticky sm:left-0' : ''}`} key={i}>
                    {items}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-2 border-blue-500">
              {studioList.map((items: any, index: number) => (
                <tr className={`text-center `} key={index}>
                  <td className="border-e-2 bg-white border-black sm:sticky sm:left-0 sm:bg-[#696bd6] md:bg-white">{items?.name}</td>
                  <td className="border-e-2 border-black">{items?.business_type || 'N/A'}</td>
                  <td className="border-e-2 border-black">{items?.address || 'N/A'}</td>
                  <td className="border-e-2 border-black">{items?.country || 'N/A'}</td>
                  <td className="border-e-2 border-black">{items?.status || 'N/A'}</td>
                  <td>
                    <div className="flex justify-center space-x-2">
                      <button
                        className="bg-blue-500 text-white p-1 rounded text-xs sm:text-sm"
                        onClick={() => {
                          setGetID(items?.id);
                          setActiveTab('View');
                          router.push(`?tab=${tab}&listTab=View&perfId=${items?.id}`);
                        }}
                      >
                        View
                      </button>
                      <button
                        className="bg-blue-400 text-white py-1 px-2 rounded text-xs sm:text-sm"
                        onClick={() => openModal(items)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-red-500 text-white py-1 px-2 rounded text-xs sm:text-sm"
                        onClick={() => deleteRow(items?.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>}
    

    
        <Modal isOpen={toggleModal} SetIsOpen={setToggleModal} setContent={setContent} content={content} from={'update'} />
     
    </div>
  );
};

export default List;
