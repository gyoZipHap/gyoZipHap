import { IoMdArrowBack } from "react-icons/io";

export default function Header() {
  return (
    <div className="my-3 flex w-dvw">
      <button className="ml-5 text-2xl">
        <IoMdArrowBack />
      </button>
      <h1 className="flex-1 text-center text-lg font-bold">추가 정보 입력</h1>
    </div>
  );
}
