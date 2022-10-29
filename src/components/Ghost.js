import React, { useState } from 'react'
const Ghost = () => {

  const [xy,setXY]=useState({x:0,y:0})
  const handlerMouseMove=(e)=>{
    setXY({x:e.clientX,y:e.clientY});
  }
  return (
    <div onMouseMove={(e)=>handlerMouseMove(e)}>
    <div className='ghost' style={{left:xy.x-50,top:xy.y-50}}>
      <div className='body'>
        <div className='face'>
          <div className='eye'></div>
          <div className='eye'></div>
          <div className='mouse'></div>
        </div>
      </div>
      <div className='bottom'>
        <div className='leg'></div>
        <div className='leg'></div>
        <div className='leg'></div>
        <div className='leg'></div>
        <div className='leg'></div>
      </div>
    </div>
    </div>
  )
}

export default Ghost