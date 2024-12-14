import React from 'react'

const ViewPerformance = ({
        studioPerformances
            }:{
        studioPerformances?:any
            }) => {
        return (
        <>
         {studioPerformances.map((items:any, index:number)=>{
            const churn = items?.paused_members/items?.average_members
             return(
             <div className=" w-full flex flex-col my-2 bg-white shadow-sm border border-slate-200 rounded-lg z-0" key={index}>
                <div className="p-4">
                    <h6 className="mb-2 text-slate-800 text-xl font-semibold
                    sm:text-sm
                    md:text-lg
                    ">
                        Campaign: {items?.campaign_type}
                    </h6>

                <div className="text-slate-600 leading-normal font-light text-base
                flex flex-row gap-[10px]
                sm:text-xs sm:gap-0">
                    <div className=' w-[50%] '>
                        <span className="font-bold">Filter Type:</span> {items?.filter_type ? items?.filter_type : 'N/A'}<br />
                        <span className="font-bold">Non Fb Lead:</span> {items?.non_fb_ad_lead ? items?.non_fb_ad_lead : 'N/A'}<br />
                        <span className="font-bold">No. Intro Sale:</span> {items?.no_intro_sale ? items?.no_intro_sale : 'N/A'}<br />
                        <span className="font-bold">Attendance:</span> {items?.attendance ? items?.attendance : 'N/A'}<br />
                        <span className="font-bold">Status:</span> {items?.status ? items?.status : 'N/A'}<br />
                    </div>
                    <div className=' w-[50%] '>
                        <span className="font-bold">CPL:</span> {items?.cpl ? items?.cpl : 'N/A'}<br />
                        <span className="font-bold">FB AD LEAD:</span> {items?.fb_ad_lead ? items?.fb_ad_lead : 'N/A'}<br />
                        <span className="font-bold">FB Budget:</span> {items?.fb_budget ? items?.fb_budget : 'N/A'}<br />
                        <span className="font-bold">Average Members:</span> {items?.average_members ? items?.average_members : 'N/A'}<br />
                        <span className="font-bold">Paused Members:</span> {items?.paused_members ? items?.paused_members : 'N/A'}<br />
                        <span className="font-bold">Churn:</span> {churn}<br />
                        <span className="font-bold">Rollover:</span> {items?.rollover_mem_sold ? items?.rollover_mem_sold : 'N/A'}
                    </div>


                </div>

                    
                </div>
            </div>
          )
            })}
    </>
  )
}

export default ViewPerformance