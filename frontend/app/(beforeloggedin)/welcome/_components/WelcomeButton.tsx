import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function WelcomeButton() {
  const router = useRouter();
  const { data } = useSession();

  useEffect(() => {
    if (data) {
      router.push("/");
    }
  }, [data?.user]);

  const handleWelcome = () => {
    router.push("/signup");
  };

  return (
    <button
      onClick={handleWelcome}
      className="mt-16 flex h-[33px] w-[222px] items-center justify-center rounded-sm bg-blue-400"
    >
      <div className="font-['Noto Sans'] w-[118px] text-center text-xs font-semibold text-neutral-50">
        추가 정보 입력하러 가기
      </div>
    </button>
  );
}
