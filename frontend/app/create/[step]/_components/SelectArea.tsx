import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function SelectArea() {
  return (
    <div className='flex w-full items-center justify-between gap-1 text-sm'>
      <Select>
        <SelectTrigger className='rounded-none border-x-0 border-b border-t-0 text-[10px] text-gray-600'>
          <SelectValue placeholder='선택' />
        </SelectTrigger>
        <SelectContent className='border-gray-400 text-xs'>
          <SelectItem value='light'>매우 만족</SelectItem>
          <SelectItem value='dark'>만족</SelectItem>
          <SelectItem value='system'>보통</SelectItem>
          <SelectItem value='system'>불만족</SelectItem>
          <SelectItem value='system'>매우 불만족</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
