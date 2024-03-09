import Image from "next/image";
import logoImg from "../../../public/logoImg.svg";
import WelcomeButton from "./_components/WelcomeButton";
import backgroundImg from "../../../public/welcome_background.svg";
import WelcomeMessage from "./_components/WelcomeMessage";

export default function Welcome() {
  return (
    <div>
      <Image
        className="contrast-70 z-0 h-dvh w-dvw brightness-110"
        src={backgroundImg}
        alt="backgroundImg"
        fill
      ></Image>
      <div className="relative z-10 flex flex-col items-center gap-5">
        <Image src={logoImg} width={134} height={69} alt="LogoImg" />
        <WelcomeMessage>에 오신 걸</WelcomeMessage>
        <WelcomeMessage>환영합니다!</WelcomeMessage>
        <WelcomeButton />
      </div>
    </div>
  );
}
