import { Input } from "@/components/ui/input";

export default function NameField() {
  return (
    <div className="flex flex-col gap-2 ">
      <div>
        <p className="font-bold">닉네임</p>
      </div>
      <Input className="w-full border-gray-400" />
    </div>
  );
}
