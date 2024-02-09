"use client";
import useUser from "@/app/hook/useUser";

export default function Friend() {
  const { userName, userImage, status } = useUser();

  return (
    <>
      <h3>{userName}님 안녕하세요</h3>
      <img src={userImage} />
    </>
  );
}
