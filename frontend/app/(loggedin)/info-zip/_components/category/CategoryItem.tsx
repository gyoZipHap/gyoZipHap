import { ToggleGroupItem } from '@/components/ui/toggle-group';

export function CategoryItem(category: any) {
  return (
    <>
      <ToggleGroupItem
        value={category}
        aria-label={category}
        className='inline-flex h-[26px] w-[68px] items-center justify-center gap-2.5 rounded-[20px] border border-blue-400 px-2.5 py-[5px]'
      >
        <div className="font-['Noto Sans'] text-xs font-semibold text-blue-400">
          {' '}
          {category}
        </div>
      </ToggleGroupItem>
    </>
  );
}
