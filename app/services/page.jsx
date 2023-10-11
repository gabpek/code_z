"use client"

import React from 'react'

export default function services() {
  return (
    <div className='container mx-auto'>
      <div className='container mx-auto'>
        <img className='mx-auto bg-auto min-h-[500px] object-cover' src="assets/images/veranda.png" alt="" />
      </div>
      <div className=' px-2'>
        <h1 className="mt-4 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white text-center">A vendégház szolgáltatásai</h1>
        <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        <p className="mt-4 text-center">
          Az alábbiakban az igénybe vehető szolgáltatásainkat találja.
        </p>
        <p className="mt-4 text-center">
          Bármelyikkel kapcsolatban kérdése merül fel, keressen minket bizalommal.
        </p>
        <div className="flex sm:flex-row flex-col">
          <div className='basis-1/3'>01</div>
          <div className='basis-1/3'>02</div>
          <div className='basis-1/3'>03</div>
        </div>
      </div>
    </div>
  )
}