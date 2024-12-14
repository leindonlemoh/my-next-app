import React, { useState } from 'react'
import Laoding from './Laoding'

const Graph = ({
  name,
  color,
  top,
  text
}: {
  name: string
  color: string
  top: { name: string, value: number }[] 
  text:string
}) => {
  const [isLoading, setIsLaoding] = useState(false)

  return (
    <div className='w-[100%] h-[100%] rounded-2xl'>
      {isLoading ? (
        <Laoding bg={color} color={'#322a57'} width={'100px'} height={'100px'} />
      ) : (
        <div style={{ background: color }} className={`w-[100%] h-full rounded-2xl text-center p-3`}>
          <p 
          style={{color:`${text}`}}
          className={` text-2xl text-center`}>{name}</p>
          {top.map((item, index) => {
            return (
              <div key={index} 
              style={{color:text}}
              className=' text-start flex items-start '>
                <div className='p-2'>

                {item.name}: {item.value}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Graph
