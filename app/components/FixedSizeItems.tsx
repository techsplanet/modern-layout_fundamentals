import React from 'react'

const FixedSizeItems = () => {
  return (
    <section>
        <h1>Placing Card in Grid</h1>
        <div className='grid grid-cols-12 grid-rows-12 show-container gap-2 p-2'>
            <div className='w-48 bg-gray-900 h-24 row-start-3'></div>
            <div className='w-18 h-20 bg-amber-500 col-start-1 row-start-8'></div>
            <div className='bg-green-500 row-start-1 col-start-1 col-span-12 row-span-2 grid grid-cols-subgrid p-1 gap-1'>
                <div className='col-span-4 bg-zinc-700'></div>
                <div className='col-span-2 bg-zinc-500'></div>
                <div className='col-span-2 bg-zinc-500'></div>
                <div className='col-span-2 bg-zinc-500'></div>
                <div className='col-span-2 bg-zinc-500'></div>
            </div>
            <div className='w-18 h-18 rounded-full bg-fuchsia-500 col-start-6 row-start-8 m-2'></div>
        </div>
    </section>
  )
}

export default FixedSizeItems