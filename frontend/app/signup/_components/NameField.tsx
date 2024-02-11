import { Input } from "@/components/ui/input";
import { useState } from "react";

const nameList = ["교환러", "ㅇㅇ", "hihi", "방가12", "홍길동"];

export default function NameField() {
  return (
    <div className="flex flex-col gap-1 ">
      <div className="flex items-center gap-1">
        <p className="font-bold text-zinc-800">닉네임</p>
        <p className="text-2xl font-bold text-red-500">*</p>
      </div>
      <Input className="w-full border-zinc-600" />
      <p className="text-xs text-zinc-500">
        최소 3자 이상으로 생성 (한국어, 영어 무관){" "}
      </p>
    </div>
  );
}
