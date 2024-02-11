import UpperCard from "./_components/main/UpperCard";
import LogCard from "./_components/main/LogCard";
import SearchBar from "./_components/searchBar/SearchBar";

export default function Home() {
  return (
    <div>
      <SearchBar />
      <UpperCard />
      <LogCard />
    </div>
  );
}
