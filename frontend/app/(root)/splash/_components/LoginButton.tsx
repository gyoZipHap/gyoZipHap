"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import kakao from "../../../../public/social_login.svg";

export default function LoginButton() {
  const router = useRouter();
  const { data } = useSession();

  // useEffect(() => {
  //   if (data) {
  //     router.push("/");
  //   }
  // }, [data?.user]);

  return (
    <button
      className="h-[33px] w-[222px] rounded-sm bg-yellow-300"
      onClick={() =>
        signIn("kakao", { redirect: true, callbackUrl: "/welcome" })
      }
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
