import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SearchBar from "./_components/searchBar/SearchBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-between text-sm">
      <Header />
      <div className="mx-10 mt-20 flex-1">{children}</div>
      <Footer />
    </div>
  );
}
