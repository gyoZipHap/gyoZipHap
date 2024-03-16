'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

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
      <Title title={`교환 만족도`} />
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
