import React from 'react'

const Laoding = ({
    bg,
    color,
    width,
height
}:{
bg:string
color:string
width:string
height:string
}) => {
  return (

   <div
      style={{ backgroundColor: bg }} // Inline style for dynamic bg color
      className="h-[100%] w-full flex items-center justify-center"
    >
      <div
        style={{
          borderColor: `#febf03`, // Inline style for dynamic border color
          borderTopColor: color, // Inline style for dynamic border-top color
          height:height,
          width:width
        }}
        className={` h border-8 rounded-full animate-spin`}
      ></div>
    </div>
  )
}

export default Laoding