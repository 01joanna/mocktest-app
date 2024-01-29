// import PodcastDescription from "./components/PodcastDescription/PodcastDescription";
// import EpisodesTable from "./components/EpisodesTable/EpisodesTable";
import PodcastList from "./components/PodcastList/PodcastList";
import SearchBar from "./components/SearchBar/SearchBar";

export default function Home() {

  return (
    <main className="flex relative w-screen flex-col justify-center bg-white items-center">
      <section className="flex absolute top-4 right-48 flex-row gap-2">
        <SearchBar />
      </section>
      <PodcastList />
    </main>
  );
}
