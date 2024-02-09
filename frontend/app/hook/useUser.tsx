"use client";
import { useSession } from "next-auth/react";

export default function useUser() {
  const { data, status } = useSession();
  return {
    userName: data?.user?.name!,
    userImage: data?.user?.image!,
    status: status!,
  };
}
