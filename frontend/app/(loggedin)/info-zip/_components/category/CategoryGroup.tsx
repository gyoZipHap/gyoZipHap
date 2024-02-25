import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { CategoryItem } from './CategoryItem';
export default function CategoryGroup() {
  return (
    <ToggleGroup type='multiple' variant='outline'>
      <CategoryItem category='전체' />
      {/* <ToggleGroupItem value='전체' aria-label='전체'>
        전체
      </ToggleGroupItem>
      <ToggleGroupItem value='비자' aria-label='비자'>
        비자 발급
      </ToggleGroupItem>
      <ToggleGroupItem value='준비물' aria-label='준비물'>
        필수 준비물
      </ToggleGroupItem>
      <ToggleGroupItem value='기숙사' aria-label='기숙사'>
        기숙사/집
      </ToggleGroupItem>
      <ToggleGroupItem value='기타' aria-label='기타'>
        기타
      </ToggleGroupItem> */}
    </ToggleGroup>
  );
}
