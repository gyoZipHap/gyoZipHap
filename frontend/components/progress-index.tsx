import { FaCircle as ProgressIndexIcon } from "react-icons/fa6";

export default function ProgressIndex({
  currentSlide,
}: {
  currentSlide: number;
}) {
  return (
    <div className="flex justify-center py-4">
      <ProgressIndexIcon
        className={`top-2 mr-2 ${currentSlide == 1 ? "text-blue-400" : "text-zinc-200"}`}
        size={8}
      />
      <ProgressIndexIcon
        className={`mr-2 ${currentSlide == 2 ? "text-blue-400" : "text-zinc-200"}`}
        size={8}
      />
      <ProgressIndexIcon
        className={`${currentSlide == 3 ? "text-blue-400" : "text-zinc-200"}`}
        size={8}
      />
    </div>
  );
}
