import Image from "next/image";
import logoImg from "../../public/logoImg.svg";
import LoginButton from "../_components/LoginButton";
export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <p className="mb-3 text-sm font-semibold">
        교환학생을 위한 정보가 만나는 곳
      </p>
      <Image src={logoImg} width={190} height={88} alt="LogoImg" />
      <p className="mb-24 mt-3 text-xs">
        에서 세계와 나의 교집합을 이뤄보세요.
      </p>
      <LoginButton />
    </div>
  );
}
