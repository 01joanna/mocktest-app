import React from "react";
import Image from "next/image";

export default function Podcast({ podcast }) {
        return (
        <div className="flex flex-col bg-white shadow-lg items-center w-full font-albert m-5 p-3">
                <Image 
                src={podcast["im:image"][2].label}
                alt={`Image of ${podcast["im:artist"].label}`}
                width={85}
                height={85}
                className="rounded-full -mt-8"/>
                <h3 className="text-sm font-bold text-center p-2 uppercase">{podcast["im:name"].label}</h3>
                <p className="text-sm text-gray-400 text-center">Author: {podcast["im:artist"].label}</p>
        </div>
)}