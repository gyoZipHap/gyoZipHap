import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

type PostCardProps = {
  country: string;
  category: string;
  title: string;
  author: string;
  univ: string;
  date: string;
  comment: number;
  like: number;
};

type CountryProps = {
  country: string;
};

type CategoryProps = {
  category: string;
};

function PostCardDetail({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-['Noto Sans']  text-[10px] font-medium text-zinc-600">
      {children}
    </div>
  );
}

function PostCardTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-['Noto Sans'] text-xs font-semibold text-zinc-800">
      {children}
    </div>
  );
}

function CountryBadge({ country }: CountryProps) {
  return (
    <Badge
      className='flex h-[18px] items-center justify-center gap-[5px] rounded-sm bg-blue-100 px-[5px] py-0.5'
      variant='outline'
    >
      <PostCardDetail>
        <div className='text-blue-400'>{country}</div>
      </PostCardDetail>
    </Badge>
  );
}

function CategoryBadge({ category }: CategoryProps) {
  return (
    <Badge
      className='flex h-[18px] items-center justify-center gap-[5px] rounded-sm bg-zinc-200 px-[5px] py-0.5'
      variant='outline'
    >
      <PostCardDetail>{category}</PostCardDetail>
    </Badge>
  );
}

export default function PostCard({
  country,
  category,
  title,
  author,
  univ,
  date,
  comment,
  like,
}: PostCardProps) {
  return (
    <>
      <Card className='mb-[23px] w-[340px] border-none shadow-none'>
        <CardHeader className='mb-[7px] p-0'>
          <div className='items-cetner flex flex-row gap-2'>
            <CountryBadge country={country} />
            <CategoryBadge category={category} />
          </div>
        </CardHeader>
        <CardContent className='mb-[8px] p-0'>
          <div className='items-cetner flex flex-row justify-between'>
            <PostCardTitle>{title}</PostCardTitle>
            <PostCardDetail>{date}</PostCardDetail>
          </div>
        </CardContent>
        <CardFooter className='items-cetner flex flex-row justify-between p-0 text-start'>
          <div className='flex flex-row items-start gap-1'>
            <Image
              className='mt-1'
              src='/users.svg'
              width={10}
              height={10}
              alt='userImg'
            />
            <PostCardDetail>{author}</PostCardDetail>
            <Image
              className='mt-1'
              src='/univ.svg'
              width={10}
              height={10}
              alt='univImg'
            />
            <PostCardDetail>
              <div className='w-[138px]'>{univ}</div>
            </PostCardDetail>{' '}
          </div>
          <div className='flex flex-row gap-1'>
            <Image src='comment.svg' width={10} height={10} alt='commentImg' />
            <PostCardDetail>{comment}</PostCardDetail>
            <Image src='/like.svg' alt='likeImg' width={10} height={10} />
            <PostCardDetail>{like}</PostCardDetail>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
