'use client'
import React, { useEffect, useState } from 'react'
import Graph from '../components/Graph'
import axiosInstance from '@/lib/axiosInstance'

const Dashboard = () => {


  const [showList, setShowList] = useState([
    { name: "Top CPL", color: "#2a6500",text:'#dbf0c8', top: [] },
    { name: "TOP FB Budget", color: "#ffca3a",text:'#7f5e00', top: [] },
    { name: "Introductory number of sales", color: "#ff5400",text:'#ffffba', top: [] }
  ])

  const get = async () => {
    try {
      const { data } = await axiosInstance.get('/dashboard/')
  

   
      const topCpl = data.sort((data1: any, data2: any) => data2.cpl - data1.cpl).slice(0, 3).map((item: any) => ({ name: item.name, value: item.cpl }));
      const topFb = data.sort((data1: any, data2: any) => data2.fb_budget - data1.fb_budget).slice(0, 3).map((item: any) => ({ name: item.name, value: item.fb_budget }));
      const topIntroSales = data.sort((data1: any, data2: any) => data2.no_intro_sale - data1.no_intro_sale).slice(0, 3).map((item: any) => ({ name: item.name, value: item.no_intro_sale }));

    
      setShowList(prevList => {
        const updatedList = [...prevList];
        updatedList[0] = { ...updatedList[0], top: topCpl }; 
        updatedList[1] = { ...updatedList[1], top: topFb }; 
        updatedList[2] = { ...updatedList[2], top: topIntroSales }; 
        return updatedList;
      });

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    get();
  }, []);


  return (
    <div className='
      w-full h-[98vh] border-2 border-black flex flex-row flex-wrap justify-center gap-5 p-2
      sm:flex-col sm:gap-3 sm:p-1 sm:items-center
      md:flex-row md:gap-4
      lg:items-baseline
    '>
      {
        showList.map((items: any, index: number) => {

          return (
            <div className='w-[30.5%] h-[25%] rounded-xl
              sm:w-[90%] sm:text-center
              md:w-[50%] 
              lg:w-[30.5%]
              mt-1'
              key={index}
            >
              <Graph name={items?.name} text={items.text} color={items?.color} top={items?.top} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Dashboard;
