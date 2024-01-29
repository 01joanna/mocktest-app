import React from 'react'

export default function SearchBar() {
    return (
        <div className='flex flex-row gap-4'>
            <button className='bg-blue-500 text-white rounded-md py-1 px-2 text-sm'>100</button>
            <input type="text" placeholder="Filter podcasts..." className="text-black w-48 text-sm p-1 rounded-md border border-gray-300"></input>
        </div>
    )
}
