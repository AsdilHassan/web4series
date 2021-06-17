import React from 'react'
import './App.css'
import flash from'./flash.jpg'
export default function top() {
    return (
      <div>
        <div className='top'>
          <img className="top-img" src={flash} alt='web4series'/> 
          
          <button className='button1'>watch Now</button>
          <button className='button2'> Read MOre</button>
        </div></div>
    )
}
