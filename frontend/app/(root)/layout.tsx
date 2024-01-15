import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh w-dvw flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
