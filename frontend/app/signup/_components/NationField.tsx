import { IoSearchOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";

export default function NationField() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <p className="font-bold text-zinc-800">관심 교환국가</p>
        <p className="text-xs text-zinc-600">(최대 3개까지 지정 가능)</p>
      </div>
      <div className="relative">
        <IoSearchOutline className="absolute left-2 top-2.5 text-lg text-gray-500" />
        <Input
          className="w-full border-zinc-600 pl-8 text-xs"
          placeholder="교환학생 관심 국가를 검색해 주세요"
        />
      </div>
    </div>
  );
}
