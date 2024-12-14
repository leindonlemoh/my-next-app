import React from 'react'
import { inputChange } from '../onChange'

const StudioForm = (
    {content,
        from,
        button,
        stateChange
    }:{
        content:any
        from:string
        stateChange:(data:any)=>void
        button:(e:any)=>void
}) => {    

    return (
    <div className={``}>

        <form className='flex flex-col'>
            <label htmlFor="business_type">Business Type: </label>
            <input type="text" name='business_type' placeholder='Business Type' onChange={(e)=>inputChange(e,stateChange)} value={content?.business_type || ''}
            className='border-2 border-blackborder-2 mb-[10px] outline-none'
            />
            {/* <label htmlFor="franchise_id">Franchise ID: </label>
            <input type="number" name='franchise_id'  onChange={(e)=>inputChange(e,setDetails)} value={details?.franchise_id || ''}
            className='border-2 border-blackborder-2 mb-[10px] outline-none'
            /> */}

            <label htmlFor="name">Name: </label>
            <input type="text" name='name' placeholder='Name' onChange={(e)=>inputChange(e,stateChange)} value={content?.name || ''}
            className='border-2 border-blackborder-2 mb-[10px] outline-none'
            />

            <label htmlFor="address">Address: </label>
            <input type="text" name='address' placeholder='Address' onChange={(e)=>inputChange(e,stateChange)} value={content?.address || ''}
            className='border-2 border-blackborder-2 mb-[10px] outline-none'
            />

            {/* <label htmlFor="time_zone">Time Zone: </label>
            <input type="text" name='time_zone' placeholder='Australia/Sydney'
             onChange={(e)=>inputChange(e,setDetails)} value={details?.time_zone || ''}
             className='border-2 border-blackborder-2 mb-[10px] outline-none'
            /> */}

            <label htmlFor="country">Country: </label>
            <input type="text" name='country' placeholder='Australia/Sydney'
             onChange={(e)=>inputChange(e,stateChange)} value={content?.country || ''}
             className='border-2 border-blackborder-2 mb-[10px] outline-none'
            />
{/* 
            <label htmlFor="country_code">Country Code: </label>
            <input type="text" name='country_code' placeholder='Australia/Sydney'
             onChange={(e)=>inputChange(e,setDetails)} value={details?.country_code || ''}
             className='border-2 border-blackborder-2 mb-[10px] outline-none'
            />
            <label htmlFor="currency_symbol">Currency Symbol: </label>
            <input type="text" name='currency_symbol' placeholder='Australia/Sydney'
             onChange={(e)=>inputChange(e,setDetails)} value={details?.currency_symbol || ''}
             className='border-2 border-blackborder-2 mb-[10px] outline-none'
            />
            <label htmlFor="currency_text">Currency Text: </label>
            <input type="text" name='currency_text' placeholder='Australia/Sydney'
             onChange={(e)=>inputChange(e,setDetails)} value={details?.currency_text || ''}
             className='border-2 border-blackborder-2 mb-[10px] outline-none'
            />
            <label htmlFor="country_id">Currency Text: </label>
            <input type="text" name='country_id' placeholder='Australia/Sydney'
             onChange={(e)=>inputChange(e,setDetails)} value={details?.country_id || ''}
             className='border-2 border-blackborder-2 mb-[10px] outline-none'
            />
             */}
            <label htmlFor="status">Status: </label>
            <input type="number" name='status' placeholder='Status'
             onChange={(e)=>inputChange(e,stateChange)} value={content?.status || ''}
             className='border-2 border-blackborder-2 mb-[10px] outline-none'
            />

            {/* <label htmlFor="next_due_date">Next Due Date: </label>
            <input type="date" name='next_due_date' 
             onChange={(e)=>inputChange(e,setDetails)} value={details?.next_due_date || ''}
             className='border-2 border-blackborder-2 mb-[10px] outline-none'
            />

            <label htmlFor="has_mb_account">Has MB Account: </label>
            <input type="number" name='has_mb_account' 
             onChange={(e)=>inputChange(e,setDetails)} value={details?.has_mb_account || ''}
             className='border-2 border-blackborder-2 mb-[10px] outline-none'
            />

            <label htmlFor="mb_account_type">MB Account Type: </label>
            <input type="text" name='mb_account_type' placeholder='type'
             onChange={(e)=>inputChange(e,setDetails)} value={details?.mb_account_type || ''}
             className='border-2 border-blackborder-2 mb-[10px] outline-none'
            /> */}

            <label htmlFor="currency_symbol">Currency Symbol: </label>
            <input type="text" name='currency_symbol' placeholder='$'
             onChange={(e)=>inputChange(e,stateChange)} value={content?.currency_symbol || ''}
             className='border-2 border-blackborder-2 mb-[10px] outline-none'
            />
{from  == 'update'?
            <button onClick={(e)=>button(e)}>Update</button>
            :
            <button onClick={(e)=>button(e)}>Add</button>
            }
        </form>
    </div>
  )
}

export default StudioForm