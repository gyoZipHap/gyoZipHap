import { ToggleGroupItem } from '@/components/ui/toggle-group';

type CategoryItemProps = {
  category: string;
};

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <>
      <ToggleGroupItem
        value={category}
        aria-label={category}
        className='font-["Noto Sans"] inline-flex h-[26px] items-center  justify-center gap-2.5 rounded-[20px] border border-blue-400 px-2.5 py-[5px] text-xs font-semibold text-blue-400 hover:text-blue-400 data-[state=on]:bg-blue-400 data-[state=on]:text-white '
      >
        {category}
      </ToggleGroupItem>
    </>
  );
}
