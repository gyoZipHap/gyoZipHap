import { Input } from "@/components/ui/input";

export default function AuthField() {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold">대학생 인증</p>
      <p className="text-xs">
        한국 대학교 학생증 또는 재학 증명서를 첨부해 주세요
      </p>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Input id="picture" type="file" className="w-full" />
      </div>
    </div>
  );
}
