import Image from "next/image";
import { CourseInput, CreateInput } from "./input";

export default function FirstForm() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2 className="flex items-center gap-1 pb-2">
          <Image src="/map-pin.svg" alt="map-pin" width={12} height={12} />
          <span>파견국가</span>
        </h2>
        <CreateInput placeholder="파견 국가를 검색해보세요." />
      </div>
      <div>
        <h2 className="flex items-center gap-1 pb-2">
          <Image src="/univ.svg" alt="univ" width={12} height={12} />
          <span>파견 대학 이름</span>
        </h2>
        <CreateInput placeholder="파견 대학을 겁색해보세요." />
      </div>
      <div>
        <h2 className="flex items-center gap-1 pb-2">
          <Image src="/calendar.svg" alt="map-pin" width={12} height={12} />
          <span>파견 학기</span>
        </h2>
        <CourseInput />
      </div>
    </div>
  );
}
