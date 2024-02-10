import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";

export default function UnivSelectArea() {
  return (
    <div className="flex w-full items-center justify-between gap-1 text-sm">
      <div className="relative flex-1">
        <MdSchool className="absolute left-2 top-2.5 text-lg text-gray-700" />
        <Input
          className=" border-gray-400 pl-8 text-xs"
          placeholder="직접 입력"
        />
      </div>
      <Select>
        <SelectTrigger className="w-24 text-[10px] text-gray-600">
          <SelectValue placeholder="교환 예정" />
        </SelectTrigger>
        <SelectContent className="border-gray-400 text-xs">
          <SelectItem value="light">교환 예정</SelectItem>
          <SelectItem value="dark">교환 관심</SelectItem>
          <SelectItem value="system">교환 경험</SelectItem>
        </SelectContent>
      </Select>
      <button className="size-fit rounded-lg bg-blue-400 hover:bg-blue-500">
        <FaRegTrashCan className="m-2 size-3 text-xs text-white" />
      </button>
    </div>
  );
}
