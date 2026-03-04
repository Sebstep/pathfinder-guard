'use client';

import { Checkbox } from '@/components/ui/Checkbox';
import type { ChecklistItem, ChecklistState } from '@/lib/types';

interface QualityChecklistProps {
  items: ChecklistItem[];
  checklistState: ChecklistState;
  onToggle: (itemId: string) => void;
}

export function QualityChecklist({
  items,
  checklistState,
  onToggle,
}: QualityChecklistProps) {
  return (
    <div className="space-y-2.5">
      {items.map((item) => (
        <Checkbox
          key={item.id}
          id={`checklist-${item.id}`}
          label={item.text}
          checked={!!checklistState[item.id]}
          onChange={() => onToggle(item.id)}
        />
      ))}
    </div>
  );
}
