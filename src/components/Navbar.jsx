import React from 'react'

function Navbar() {
  return (
    <div className=' flex  flex-col text-center lg:text-center '>
        <a href='/' className=' lg:absolute left-12 text-lg lg:text-2xl mt-5 font-bold cursor-pointer hover:scale-125 transition duration-500 underline'>Home</a>
        <h1 className=' text-lg lg:text-5xl mt-3 font-bold text-center'>Rick and Morty Characters</h1>
    </div>
  )
}

export default Navbar