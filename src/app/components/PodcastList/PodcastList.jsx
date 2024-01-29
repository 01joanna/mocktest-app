'use client'
import Podcast from "../Podcast/Podcast";
import { loadPodcasts } from "@/app/services/Api";
import { useEffect, useState } from "react";

export default function PodcastList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const loadedData = async () => {
            const podcasts = await loadPodcasts();
            setData(podcasts);
        }
        loadedData();
    }, []);

    return (
        <div className="w-8/12 grid items-start grid-cols-4 grid-rows-25 gap-4 pt-20">{data?.map((item) => (
            <Podcast key={item.id} podcast={item} />
        ))}
        </div>
    )
}
