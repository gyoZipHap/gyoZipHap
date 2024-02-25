import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export function CategoryGroup() {
  return (
    <ToggleGroup type='multiple' variant='outline'>
      <ToggleGroupItem value='bold' aria-label='Toggle bold'>
        a
      </ToggleGroupItem>
      <ToggleGroupItem value='italic' aria-label='Toggle italic'>
        b
      </ToggleGroupItem>
      <ToggleGroupItem value='strikethrough' aria-label='Toggle strikethrough'>
        c
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
