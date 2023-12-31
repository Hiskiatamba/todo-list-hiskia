import React from 'react'
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className='w-full h-[450px] bg-teal-200 flex flex-col items-center'>
    <div className='font-serif gap-[10px] pt-[20px] pb-[10px] bg-teal-200 w-full items-center flex flex-col'>
    <h1 className=''>Selamat Datang Di Todo-List App !</h1>
    <h1>Project ini di buat oleh <a className='bg-yellow-500 text-white px-[20px] rounded-[20px]' href='https://github.com/hiskiatamba' target='blank'>Hiskia Tamba</a></h1>
    <h1>Mulai mencoba...</h1>
    </div>
    <div className='w-full justify-center flex'>
    <NavLink className="text-white bg-pink-400 hover:text-pink-800 py-[10px] px-[20px] font-bold rounded-lg " to="/todo">MULAI</NavLink>
    </div>
    </div>
  )
}

export default Home