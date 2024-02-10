import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed z-50 w-full bg-white">
      <div className="my-3 flex w-full">
        <Image src="/logo.svg" alt="logo" width={110} height={20} />
      </div>
      <Separator className="w-full" />
    </div>
  );
}
