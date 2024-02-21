"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import logoImg from "../../../public/logoImg.svg";
import WelcomeButton from "./_components/WelcomeButton";
import backgroundImg from "../../../public/welcome_background.svg";

export default function Welcome() {
  const { data } = useSession();
  let name = "none";
  if (data) {
    name = data?.user?.name!;
  }
  return (
    <div>
      <Image
        className="z-0 h-dvh w-dvw"
        src={backgroundImg}
        alt="backgroundImg"
        fill
      ></Image>
      <div className="relative z-10 flex flex-col items-center gap-5">
        <Image src={logoImg} width={134} height={69} alt="LogoImg" />
        <div className="font-['Noto Sans'] flex flex-col gap-3.5 text-center text-xl font-semibold text-zinc-800">
          <p>에 오신 걸</p>
          <p>환영합니다!</p>
        </div>
        <WelcomeButton />
      </div>
    </div>
  );
}
