import { Button } from '@/components/ui/button';
import Image from 'next/image';

type MainLogProps = {
  nation: string;
  univ: string;
  author: string;
  title: string;
  dateRange: string[]; //Date[]
};

export function MainLog({
  nation,
  univ,
  author,
  title,
  dateRange,
}: MainLogProps) {
  return (
    <div>
      <div className='mt-2 h-36 rounded-lg shadow-xl'></div>
      <div className='my-2 grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-1'>
        <div className='flex justify-start text-sm font-medium text-blue-400'>
          <span>{nation}</span>
          <span>·</span>
          <span>{univ}</span>
        </div>
        <div className='flex items-baseline justify-end gap-1 text-[10px] font-medium'>
          <Image src='/profile.svg' alt='profile' width={10} height={10} />
          {author}
        </div>
        <div className='flex justify-start text-sm'>{title}</div>
        <div className='flex justify-end gap-1 text-[10px] font-medium'>
          <Image src='/calendar.svg' alt='calendar' width={10} height={10} />
          {dateRange[0] + '-' + dateRange[1]}
        </div>
      </div>
    </div>
  );
}

export function SubLog({
  nation,
  univ,
  author,
  title,
  dateRange,
}: MainLogProps) {
  return (
    <div className='my-2 flex h-[70px] justify-between gap-x-4 gap-y-1'>
      <div className='mt-2 w-[70px] rounded-lg shadow-xl'></div>
      <div className='flex flex-col justify-between'>
        <div className='justify-start text-[10px]'>
          <div className='text-blue-400'>
            <span>{nation}</span>
            <span>·</span>
            <span>{univ}</span>
          </div>
          <div className='flex justify-start'>{title}</div>
        </div>
        <div className='flex justify-between gap-20'>
          <div className='flex items-baseline justify-start gap-1 text-[10px] font-medium'>
            <Image src='/profile.svg' alt='profile' width={10} height={10} />
            {author}
          </div>
          <div className='flex justify-end gap-1 text-[10px] font-medium'>
            <Image src='/calendar.svg' alt='calendar' width={10} height={10} />
            {dateRange[0] + '-' + dateRange[1]}
          </div>
        </div>
      </div>
    </div>
  );
}
export default function LogCard() {
  return (
    <div>
      <div className='mt-4 flex items-center gap-1 text-xs font-semibold text-blue-400'>
        <Image
          src='/edit.svg'
          alt='logo'
          width={15}
          height={15}
          style={{
            filter:
              'invert(58%) sepia(86%) saturate(1971%) hue-rotate(181deg) brightness(99%) contrast(94%)',
          }}
        />
        카테고리별 교환 정보 Zip
      </div>
      <MainLog
        nation='영국'
        univ='University of Sheffield'
        author='britishgirl0101'
        title='꿈만 같았던 셰필드 교환라이프'
        dateRange={['2022.11.11', '2022.11.11']}
      />
      <SubLog
        nation='영국'
        univ='University of Sheffield'
        author='britishgirl0101'
        title='꿈만 같았던 셰필드 교환라이프'
        dateRange={['2022.11.11', '2022.11.11']}
      />
      <SubLog
        nation='영국'
        univ='University of Sheffield'
        author='britishgirl0101'
        title='꿈만 같았던 셰필드 교환라이프'
        dateRange={['2022.11.11', '2022.11.11']}
      />
      <SubLog
        nation='영국'
        univ='University of Sheffield'
        author='britishgirl0101'
        title='꿈만 같았던 셰필드 교환라이프'
        dateRange={['2022.11.11', '2022.11.11']}
      />
      <Button className='w-full bg-blue-400 font-bold hover:bg-blue-400/70'>
        더 보러가기
      </Button>
    </div>
  );
}
