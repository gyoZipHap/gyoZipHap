import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  classNames?: string;
};
export function CategoryCard({ title, classNames }: CardProps) {
  return (
    <div
      className={cn(
        "mt-2 flex h-24 items-center justify-center rounded-lg shadow-xl",
        classNames,
      )}
    >
      <div className="whitespace-pre-line text-center text-xs">{title}</div>
    </div>
  );
}

export default function UpperCard() {
  return (
    <>
      <div>
        <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-400">
          <Image
            src="/zip.svg"
            alt="logo"
            width={15}
            height={15}
            style={{
              filter:
                "invert(58%) sepia(86%) saturate(1971%) hue-rotate(181deg) brightness(99%) contrast(94%)",
            }}
          />
          카테고리별 교환 정보 Zip
        </div>
        <div className="flex w-full gap-4">
          <Link href="" className="flex-1">
            <CategoryCard title={`국가별\n학생 비자 발급 방법`} />
          </Link>
          <Link href="" className="flex-1">
            <CategoryCard title={`국가별\n교환학생 필수 준비물`} />
          </Link>
        </div>
      </div>
      <div>
        <div className="mt-4 flex gap-1 text-xs font-semibold text-blue-400">
          <Image
            src="/globe.svg"
            alt="logo"
            width={15}
            height={15}
            style={{
              filter:
                "invert(58%) sepia(86%) saturate(1971%) hue-rotate(181deg) brightness(99%) contrast(94%)",
            }}
          />
          교환 커뮤니티
        </div>
        <div className="flex w-full gap-4">
          <Link href="/friend" className="flex-1">
            <CategoryCard
              title={`친구 찾기`}
              classNames="items-end bg-[url('/logo.svg')] bg-contain bg-no-repeat bg-center"
            />
          </Link>
          <Link href="/trade" className="flex-1">
            <CategoryCard
              title={`교환물품 나눔`}
              classNames="items-end bg-[url('/logo.svg')] bg-contain bg-no-repeat bg-center"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
