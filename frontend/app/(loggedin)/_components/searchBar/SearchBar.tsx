"use client";
import { SearchInput } from "./SearchInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <div className="flex w-full justify-stretch">
      <Select>
        <SelectTrigger className="h-[34px] w-20 border-2 border-blue-400 bg-neutral-50 text-[10px]">
          <SelectValue placeholder="국가" />
        </SelectTrigger>
        <SelectContent className="border-gray-400 text-xs">
          <SelectItem value="light">미국</SelectItem>
        </SelectContent>
      </Select>
      <SearchInput
        type="text"
        placeholder="관심있는 교환 대학교를 검색해보세요."
        className="ml-2 text-xs font-medium text-zinc-600"
      />
      <button className="ml-2 rounded-sm bg-blue-400 px-2">
        <IoIosSearch color="white" size={20} />
      </button>
    </div>
  );
}
