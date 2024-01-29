'use client'
import { loadPodcasts } from "./services/Api";
import { useEffect, useState } from "react";

export default function Home() {

const [data, setData] = useState([]);
useEffect(() => {
  const loadedData = async() => {
    const podcasts = await loadPodcasts();
    setData(podcasts);
  }
  loadedData();
}, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hola fans!</h1>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title.label}</li>
        ))}
      </ul>
    </main>
  );
}
