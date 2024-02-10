import Image from "next/image";

export function FooterToggle({
  source,
  title,
}: {
  source: string;
  title: string;
}) {
  return (
    <div className="m-1 grid h-[39px] w-20 cursor-pointer grid-rows-2 place-items-center rounded-lg pt-1 hover:bg-blue-300">
      <Image src={source} alt="logo" width={20} height={20} />
      <span className="text-[10px] font-medium">{title}</span>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="fixed bottom-0 flex h-[60px] w-[360px] items-center justify-center text-[10px] text-xs ">
      <FooterToggle source="/home.svg" title="홈" />
      <FooterToggle source="/zip.svg" title="교환 정보 Zip" />
      <FooterToggle source="/globe.svg" title="교환 커뮤니티" />
      <FooterToggle source="/profile.svg" title="내 프로필" />
    </div>
  );
}
