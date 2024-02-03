import { IoMdArrowBack } from "react-icons/io";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <div className="fixed z-50 w-full bg-white">
      <div className="my-3 flex w-full">
        <button className=" ml-5 text-2xl">
          <IoMdArrowBack />
        </button>
        <h1 className="mr-7 flex-1 text-center text-lg font-bold">
          추가 정보 입력
        </h1>
      </div>
      <Separator className="w-full" />
    </div>
  );
}
