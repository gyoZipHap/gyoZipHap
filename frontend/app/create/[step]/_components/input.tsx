"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export function CreateInput({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative">
      <IoSearchOutline className="absolute left-2 top-2.5 text-lg text-gray-500" />
      <Input
        className="w-full border-none bg-[#F4F4F5] pl-8 text-xs"
        placeholder={placeholder}
      />
    </div>
  );
}

export function CourseInput() {
  interface inputData {
    start: { year: number; course: number };
    end: { year: number; course: number };
  }
  const [startYear, setStartYear] = useState(null);
  const [endYear, setEndYear] = useState(null);
  const [startCourse, setStartCourse] = useState(null);
  const [endCourse, setEndCourse] = useState(null);
  return (
    <div className="flex items-center justify-center">
      <div className="relative -mr-2">
        <Input className="border-none bg-[#F4F4F5] pl-2 pr-10 text-xs focus:!ring-0" />
        <p className="absolute right-2 top-2.5 text-xs">년도</p>
      </div>
      <div className="relative">
        <Input className="border-none bg-[#F4F4F5] pl-2 pr-10 text-xs outline-none focus:!ring-0" />
        <p className="absolute right-2 top-2.5 text-xs">학기</p>
      </div>
      <span>-</span>
      <div className="relative -mr-2">
        <Input className="border-none bg-[#F4F4F5] pl-2 pr-10 text-xs outline-none focus:!ring-0" />
        <p className="absolute right-2 top-2.5 text-xs">년도</p>
      </div>
      <div className="relative">
        <Input className="border-none bg-[#F4F4F5] pl-2 pr-10 text-xs outline-none focus:!ring-0" />
        <p className="absolute right-2 top-2.5 text-xs">학기</p>
      </div>
    </div>
  );
}
