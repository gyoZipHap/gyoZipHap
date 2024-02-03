import { Input } from "@/components/ui/input";
import UnivSelectArea from "./_components/UnivSelectArea";
import { IoSearchOutline } from "react-icons/io5";
import DatePickerWithRange from "@/components/datepicker";
import { Button } from "@/components/ui/button";

export default function Signup() {
  return (
    <div className="flex flex-col gap-10 pb-16">
      <div className="flex flex-col gap-2 font-bold">
        닉네임
        <Input className="w-full border-gray-400" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <p className="font-bold">관심 교환국가</p>
          <p className="text-xs text-gray-500">(최대 3개까지 지정 가능)</p>
        </div>
        <div className="relative">
          <IoSearchOutline className="absolute left-2 top-2.5 text-lg text-gray-500" />
          <Input
            className="w-full border-gray-400 pl-8 text-xs"
            placeholder="교환학생 관심 국가를 검색해 주세요"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 ">
        <p className="font-bold">관심 파견 대학교</p>
        <p className="mb-2 text-xs text-gray-500">
          교환 경험해본 대학교/ 교환 예정인 대학교/ 교환 관심있는 대학교 모두
          입력 가능
        </p>
        <UnivSelectArea />
        <UnivSelectArea />
        <UnivSelectArea />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold">파견 기간</p>
        <DatePickerWithRange />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold">대학생 인증</p>
        <p className="text-xs">
          한국 대학교 학생증 또는 재학 증명서를 첨부해 주세요
        </p>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input id="picture" type="file" className="w-full" />
        </div>
      </div>
      <Button className="w-full bg-[#21BEC9] font-bold hover:bg-[#21BEC9]/70">
        정보 입력완료
      </Button>
    </div>
  );
}
