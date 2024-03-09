'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function NewPostButton() {
  const router = useRouter();
  return (
    <div className='fixed bottom-[85px] z-10 h-[41px] w-[41px]'>
      <Button
        onClick={() => router.push('/newPost')}
        className='h-[41px] w-[41px] rounded-[10px] bg-blue-400 hover:bg-blue-300'
        variant='default'
        size='icon'
      >
        <Image src='/newPost.svg' alt='newPostBtn' width={20} height={20} />
      </Button>
    </div>
  );
}
