import ProgressIndex from "@/components/progress-index";
import FirstForm from "./_components/first-form";
import SecondForm from "./_components/second-form";
import ThirdForm from "./_components/third-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CreateStep({ params }: { params: { step: number } }) {
  const stepNum = params.step;

  const headingText: { [key: number]: string } = {
    1: "Step 1. 교환 기본 정보 입력",
    2: "Step 2. 교환 정보 요약",
    3: "Step 3. 글 쓰기",
  };

  return (
    <div className="">
      <div className="flex flex-col items-start pb-7">
        <ProgressIndex currentSlide={stepNum} />
        <p className="text-[14px] font-semibold text-blue-400">
          {headingText[stepNum]}
        </p>
      </div>
      <form>
        {stepNum == 1 ? (
          <>
            <FirstForm />
            <Link href="/create/2" className="mt-10 flex justify-end">
              <Button className="w-12 bg-blue-300 font-bold hover:bg-blue-300/70">
                다음
              </Button>
            </Link>
          </>
        ) : stepNum == 2 ? (
          <>
            <SecondForm />
            <Link href="/create/3" className="mt-10 flex justify-end">
              <Button className="w-12 bg-blue-300 font-bold hover:bg-blue-300/70">
                다음
              </Button>
            </Link>
          </>
        ) : (
          <>
            <ThirdForm />
            <Button className="w-12 bg-blue-300 font-bold hover:bg-blue-300/70">
              저장
            </Button>
          </>
        )}
      </form>
    </div>
  );
}
