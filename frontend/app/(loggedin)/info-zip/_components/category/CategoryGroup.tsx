'use client';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { CategoryItem } from './CategoryItem';

interface PropsType {
  filtered: string;
  setFiltered: React.Dispatch<React.SetStateAction<string>>;
}
export default function CategoryGroup(props: PropsType) {
  const categoryList = [
    '전체',
    '비자 발급',
    '필수 준비물',
    '기숙사/집',
    '기타',
  ];
  return (
    <ToggleGroup
      className='my-3 justify-around'
      type='single'
      variant='outline'
      defaultValue='전체'
      value={props.filtered}
      onValueChange={(value) => {
        props.setFiltered(value);
      }}
    >
      {categoryList.map((category) => (
        <CategoryItem category={category} />
      ))}
    </ToggleGroup>
  );
}
