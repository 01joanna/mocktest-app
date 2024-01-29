import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function PodcastDescription() {

    return (
        <section className='grid grid-cols-1 divide-y divide-gray-200 shadow-xl w-52 gap-4'>
            <div className='flex justify-center pt-10'>
                <Image 
                src={'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png'}
                alt='Imagen'
                width={160}
                height={160}
                className='rounded-md'
                />
            </div>
            <div className='px-3 pt-3'>
                <h3 className='font-bold text-md'>Song Exploder</h3>
                <p className='text-xs italic'>by Song Exploder</p>
            </div>
            <div className='text-sm p-3'>
                <h3 className='font-bold'>Description:</h3>
                <p className='italic'>A podcast where musicians take apart their songs, and piece by piece, tell the story of how they were made.</p>
            </div>
        </section>
    )
}