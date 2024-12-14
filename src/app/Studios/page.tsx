'use client'
import React, { useState, useEffect } from 'react';
import { useRouter,useSearchParams } from 'next/navigation';
import Add from '@/app/components/Add';
import List from '@/app/components/List';
import View from '@/app/components/View';
import path from 'path';
import Laoding from '../components/Laoding';

const Studios = () => {
  const router = useRouter();

//   const tabQuery = searchParams.get('tab');
const pathname = useSearchParams();
const tabQuery = pathname.get('tab');
const listTab = pathname.get('listTab');


  const [activeTab, setActiveTab] = useState('List');
  const [getId, setGetID] = useState(0);

  const tabs = ['List','Add'];

  useEffect(() => {
    if (listTab) {
      setActiveTab(listTab);
    }
  }, [listTab]);

  return (
    <>
   

        <div className='w-full h-[94vh] flex flex-col '>
          <div className='w-full h-[57px] bg-[#05668d] flex justify-center items-center  p-5 '>
            <ul className='flex flex-row gap-5 p-2 '>
              {tabs.map((tab, index) => (
                <li key={index}>
                  <button
                    className={`text-[#c7f9cc] w-[80px] p-2 sm:text-base md:text-xl lg:text-xl
                       ${activeTab == tab ? 'border-2 border-[#c7f9cc] rounded-xl' : ''}`}
                    onClick={() => {
                      setActiveTab(tab);
                      router.push(`?tab=${tabQuery}&listTab=${tab}`);
                    }}
                  >
                    {tab}
                  </button>
                </li>
              ))}
                <li>

{activeTab == 'View'&&   <button
                    className={`text-[#c7f9cc] w-[100%] p-2 sm:text-sm md:text-sm lg:text-xl
                      sm:w-[100px] lg:w-[100%] bg-[#322a57]
                      ${activeTab == 'View' ? 'border-2 border-[#c7f9cc] rounded-xl' : ''}`}
                    onClick={() => {
                        setActiveTab('View');
                        router.push(`?tab=${tabQuery}&listTab=View`);
                    }}
                    >
                    View Studio
                  </button>}
                      </li>
            </ul>
          </div>

          <div className='p-1'>
            {activeTab == 'List' && <List setActiveTab={setActiveTab} setGetID={setGetID} />}
            {activeTab == 'Add' && <Add />}
            {activeTab == 'View' && <View />}
          </div>

        </div>
    
    </>
  );
};

export default Studios;
