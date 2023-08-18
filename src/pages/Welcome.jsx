import React from 'react'
import bg from "../Assets/bg.jpg";

export default function Welcome() {
  return (
    <div  className="flex justify-center items-center h-screen overflow-hidden font-euclid-circular-a bg-cover bg-center"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${bg})`,
    }}>
     <h1 className='text-white text-8xl'>Welcome to wonderLand</h1>
    </div>
  )
}
