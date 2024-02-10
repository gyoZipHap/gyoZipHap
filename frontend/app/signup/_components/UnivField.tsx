import UnivSelectArea from "./UnivSelectArea";

export default function UnivField() {
  return (
    <div className="flex flex-col gap-1 ">
      <p className="font-bold">관심 파견 대학교</p>
      <p className="mb-2 text-xs text-gray-500">
        교환 경험해본 대학교/ 교환 예정인 대학교/ 교환 관심있는 대학교 모두 입력
        가능
      </p>
      <UnivSelectArea />
      <UnivSelectArea />
      <UnivSelectArea />
    </div>
  );
}
