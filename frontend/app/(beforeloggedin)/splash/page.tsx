import Image from "next/image";
import logoImg from "../../../public/logoImg.svg";
import LoginButton from "./_components/LoginButton";
import { LoginTitle, LoginSubtitle } from "./_components/LoginMessage";
export default function Splash() {
  return (
    <div className="flex flex-col items-center">
      <LoginTitle>교환학생을 위한 정보가 만나는 곳</LoginTitle>
      <Image src={logoImg} width={190} height={88} alt="LogoImg" />
      <LoginSubtitle>에서 세계와 나의 교집합을 이뤄보세요.</LoginSubtitle>
      <LoginButton />
    </div>
  );
}
