import { Button } from "@/components/ui/button";
import NameField from "./_components/NameField";
import NationField from "./_components/NationField";
import UnivField from "./_components/UnivField";
import AuthField from "./_components/AuthField";

export default function Signup() {
  return (
    <div className="flex flex-col gap-10 pb-16">
      <NameField />
      <NationField />
      <UnivField />
      <AuthField />
      <Button className="w-full bg-blue-400 font-bold hover:bg-blue-500">
        정보 입력완료
      </Button>
    </div>
  );
}
