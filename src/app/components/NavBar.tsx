'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation';

const NavBar = ({
    setActive,
    activeTab
}:{
    setActive:  (res:string)=> void ;
    activeTab:string;
}) => {

        const router = useRouter();
    const tabs = ['Dashboard', 'Studios']


    return (
    <div className='

    h-[50px] w-full bg-[#03045e] text-white  flex  justify-center items-center'>
        <div className=' w-full m-1 p-[5px]'>
            <ol className='
            sm:gap-[20px]
            md:gap-[30px]
            lg:gap-[40px]
            flex flex-row items-center justify-center gap-4 
            '>
                
            {tabs.map((tab,index)=>(
                <li  key={index}>

                <button className={`w-auto text-[#80ed99] text-lg p-2
                sm:w-[120px] sm:text-sm
                md:text-lg
                lg:text-xl
         

            ${activeTab == tab ? 'border-2 border-[#00b4d8] rounded-xl' :'' }
                `}
                onClick={()=>{setActive(tab),
                    router.push(`?tab=${tab}`);
                }}
                >{tab}</button>

                </li>
            ))}
                    
               
            </ol>
        </div>
    </div>
  )
}

export default NavBar