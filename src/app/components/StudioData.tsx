import React from 'react'

const StudioData = (
    {
        studioData,
        churn
    }:{
        studioData?:any
        churn:any
        }) => {
            return (
                <div className='border-2 border-[black] rounded-xl '>
                    

                  
                    {
                    studioData.map((items:any,index:number)=>{
                            return(
                            <div className='bg-[]'  key={index}>
                                <div className="relative h-64">
                                    <img src={`${items.logo_url}`} alt="Image" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                                </div>

                                <div className="p-4 ">
                                    <h6 className="mb-2 text-slate-800 text-xl font-semibold
                                    sm:text-sm
                                    md:text-base
                                    ">
                                        {items.name}
                                    </h6>
                                
                                    <p className="text-slate-600 leading-normal font-light text-base
                                    sm:text-xs
                                    ">
                                    Business Type: {items?.business_type}<br/>
                                    Address: {items?.address}
                                    </p>
                                    <p className="text-slate-600 leading-normal font-light text-base 
                                    sm:text-xs
                                    md:text-base
                                    ">
                                    Currency Symbol: {items?.currency_symbol} <br />
                                    Status: {items?.status == 1 ? 'Active' :(items?.status == 0 ? 'Not Active' : 'Paused')} <br />
                                    Churn: {churn}%
                                    </p>
                                </div>
                        </div>  )
                    })
                }
                    
                    </div>
            )
}

export default StudioData