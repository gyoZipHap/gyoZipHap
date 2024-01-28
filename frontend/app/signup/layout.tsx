import { Separator } from "@/components/ui/separator";
import Header from "./_components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <Separator />
      <div>{children}</div>
    </div>
  );
}
