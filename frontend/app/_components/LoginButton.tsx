"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import kakao from "../../public/social_login.svg";

export default function LoginButton() {
  const router = useRouter();
  const { data } = useSession();
  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (data) {
      await signOut();
    } else {
      await signIn();
    }
  };
  useEffect(() => {
    // console.log(data?.user?.name);
    if (data) {
      router.push("/friend");
    }
  }, [data?.user]);

  return (
    <button
      onClick={handleLogin}
      className="h-[33px] w-[222px] rounded-sm bg-yellow-300"
    >
      <div className="flex items-center">
        <Image
          src={kakao}
          width={26}
          height={30}
          alt="LogoImg"
          className="mx-4"
        />
        <span className="font-xs font-bold">3초</span>
        <span className="font-xs">만에 카카오톡 로그인</span>
      </div>
    </button>
  );
}
