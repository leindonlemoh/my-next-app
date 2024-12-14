import React from 'react'

import { inputChange } from '../onChange'
const PerformanceForm = ({
    content,
    button,
    stateChange
}:{
    content:any;
    button: (e:any)=>void
    stateChange:(res:any)=>void
}) => {

  return (
    <div className='border-none overflow-y-auto sm:overflow-y-scroll sm:h-[70vh] sm:border '>

        <form className=' flex flex-col flex-wrap items-center bg-green-200 rounded-xl p-2' onSubmit={button}>

                <div className=' w-[50%] flex flex-col sm:w-[90%] md:w-[80%] lg:w-[60%]'>
                    <label htmlFor="filter_type">Filter Type:</label>
                    <select className={`border-b-2 text-center outline-none`}
                    name="filter_type"
                    id="filter_type"
                    onChange={(e) => inputChange(e, stateChange)}
                    
                    value={content?.filter_type}
                    >
                    <option value="weekly">Weekly</option>
                    <option value="monthly" >Monthly</option>
                    <option value="yearly">Yearly</option>
                    </select>
                </div>

                <div className=' w-[50%] flex flex-col sm:w-[90%] md:w-[80%] lg:w-[60%]'>
                <label htmlFor="fb_budget">FB Budget: </label>
                <input type="num" name='fb_budget' onChange={(e)=>inputChange(e,stateChange)} value={content?.fb_budget} 
                    className='border-2 border-blackborder-2 mb-[10px] outline-none'/>
                    </div>
                <div className=' w-[50%] flex flex-col sm:w-[90%] md:w-[80%] lg:w-[60%]'>

                <label htmlFor="fb_ad_lead">FB Ad Lead:</label>
                <input type="num" name='fb_ad_lead' onChange={(e)=>inputChange(e,stateChange)}
                    value={content?.fb_ad_lead} 
                    className='border-2 border-blackborder-2 mb-[10px] outline-none'
                    />
                </div>
                <div className=' w-[50%] flex flex-col sm:w-[90%] md:w-[80%] lg:w-[60%]'>
                <label htmlFor="google_budget">Google Budget:</label>
                <input type="num" name='google_budget' onChange={(e)=>inputChange(e,stateChange)}
                    value={content?.google_budget} 
                    className='border-2 border-blackborder-2 mb-[10px] outline-none'
                    />
                </div>
                <div className=' w-[50%] flex flex-col sm:w-[90%] md:w-[80%] lg:w-[60%]'>
                <label htmlFor="non_fb_ad_lead">Non FB As Lead: </label>
                <input type="number" name='non_fb_ad_lead' onChange={(e)=>inputChange(e,stateChange)}  
                    value={content?.non_fb_ad_lead} 
                    className='border-2 border-blackborder-2 mb-[10px] outline-none'
                    />
                </div>
                <div className=' w-[50%] flex flex-col sm:w-[90%] md:w-[80%] lg:w-[60%]'>

                <label htmlFor="no_intro_sale">No. Intro Sale: </label>
                <input type="number" name='no_intro_sale' onChange={(e)=>inputChange(e,stateChange)}  
                    value={content?.no_intro_sale} 
                    className='border-2 border-blackborder-2 mb-[10px] outline-none'
                    />
                </div>
                <div className=' w-[50%] flex flex-col sm:w-[90%] md:w-[80%] lg:w-[60%]'>

                <label htmlFor="rollover_mem_sold">Rollover mem. Sold: </label>
                <input type="number" name='rollover_mem_sold' onChange={(e)=>inputChange(e,stateChange)}  
                    value={content?.rollover_mem_sold} 
                    className='border-2 border-blackborder-2 mb-[10px] outline-none'
                    />
                </div>
                <div className=' w-[50%] flex flex-col sm:w-[90%] md:w-[80%] lg:w-[60%]'>

                <label htmlFor="paused_members">Paused Members:</label>
                <input type="text" name='paused_members' onChange={(e)=>inputChange(e,stateChange)}  
                    value={content?.paused_members} 
                    className='border-2 border-blackborder-2 mb-[10px] outline-none'
                    />
                </div>
                <div className=' w-[50%] flex flex-col sm:w-[90%] md:w-[80%] lg:w-[60%]'>

                <label htmlFor="attendance">Attendance :</label>
                <input type="text" name='attendance' onChange={(e)=>inputChange(e,stateChange)}  
                    value={content?.attendance} 
                    className='border-2 border-blackborder-2 mb-[10px] outline-none'
                    />
                </div>

                <div className=' w-[50%] flex flex-col sm:w-[90%] md:w-[80%] lg:w-[60%]'>
                    <label htmlFor="status">Status:</label>
                        <select className={`border-b-2 text-center outline-none`}
                            name="status"
                            id="status"
                            onChange={(e) => inputChange(e, stateChange)}
                            
                            value={content?.status}
                            >
                            <option value={1}>Active</option>
                            <option value={0} >Not Active</option>
                            <option value={2}>Paused</option>
                            </select>
                </div>
                <div className=' w-[50%] flex flex-col sm:w-[90%] md:w-[80%] lg:w-[60%]'>
                <label htmlFor="average_members">Average Members:</label>
                <input type="text" name='average_members' onChange={(e)=>inputChange(e,stateChange)}  
                    value={content?.average_members} 
                    className='border-2 border-blackborder-2 mb-[10px] outline-none'
                    />
                </div>

                            <button type='submit' className='bg-blue-700 p-1 rounded-lg text-white' >Submit</button>
        </form>
    </div>
  )
}

export default PerformanceForm