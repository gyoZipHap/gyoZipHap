'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import SelectArea from './SelectArea';

function Title({ title }: { title: string }) {
  return (
    <h2 className='flex items-center gap-1 pb-2'>
      <span>{title}</span>
    </h2>
  );
}

function Category() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div>
      <Title title={`카테고리 선택`} />
      <div className='flex gap-4 text-xs'>
        <Button
          className={`border text-xs hover:bg-blue-300/70 ${selected === 0 ? 'bg-white text-blue-300' : 'bg-blue-300 text-white'}`}
          onClick={(e) => {
            e.preventDefault();
            setSelected(0);
          }}
        >
          비자발급
        </Button>
        <Button
          className={`border text-xs hover:bg-blue-300/70 ${selected === 1 ? 'bg-white text-blue-300' : 'bg-blue-300 text-white'}`}
          onClick={(e) => {
            e.preventDefault();
            setSelected(1);
          }}
        >
          필수 준비물
        </Button>
        <Button
          className={`border text-xs hover:bg-blue-300/70 ${selected === 2 ? 'bg-white text-blue-300' : 'bg-blue-300 text-white'}`}
          onClick={(e) => {
            e.preventDefault();
            setSelected(2);
          }}
        >
          기숙사/숙소
        </Button>
        <Button
          className={`border text-xs hover:bg-blue-300/70 ${selected === 3 ? 'bg-white text-blue-300' : 'bg-blue-300 text-white'}`}
          onClick={(e) => {
            e.preventDefault();
            setSelected(3);
          }}
        >
          기타
        </Button>
      </div>
    </div>
  );
}

function Satisfaction() {
  return (
    <div>
      <div className='flex justify-between'>
        <Title title={`교환 만족도`} />
        <span className='text-xs text-blue-300'>0점/5점</span>
      </div>
      <div className='grid grid-cols-2 grid-rows-2 gap-1'>
        <div className='flex items-center'>
          <span className='w-full text-xs text-blue-300'>학교 수업</span>
          <SelectArea />
        </div>
        <div className='flex items-center'>
          <span className='w-full text-xs text-blue-300'>학교 생활</span>
          <SelectArea />
        </div>
        <div className='flex items-center'>
          <span className='w-full text-xs text-blue-300'>기숙사/숙소</span>
          <SelectArea />
        </div>
        <div className='flex items-center'>
          <span className='w-full text-xs text-blue-300'>문화/여가 생활</span>
          <SelectArea />
        </div>
      </div>
    </div>
  );
}

export default function SecondForm() {
  return (
    <div className='flex flex-col gap-10'>
      <Category />
      <Satisfaction />
    </div>
  );
}
