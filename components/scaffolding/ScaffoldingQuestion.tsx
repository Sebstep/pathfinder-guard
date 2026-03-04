'use client';

import { cn } from '@/lib/utils';
import { TextArea } from '@/components/ui/TextArea';
import type { ScaffoldingQuestion as QuestionType } from '@/lib/types';

interface ScaffoldingQuestionProps {
  question: QuestionType;
  value: string;
  onChange: (value: string) => void;
  index: number;
}

export function ScaffoldingQuestion({
  question,
  value,
  onChange,
  index,
}: ScaffoldingQuestionProps) {
  return (
    <div className="group">
      <div className="flex items-start gap-3 mb-2">
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-guard-blue-50 flex items-center justify-center mt-0.5">
          <svg
            className="w-3.5 h-3.5 text-guard-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <label
          htmlFor={`question-${question.id}`}
          className="text-sm font-medium text-guard-blue-800 leading-relaxed"
        >
          {question.question}
        </label>
      </div>
      <div className="ml-9">
        <TextArea
          id={`question-${question.id}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder}
          className={cn(
            'min-h-[60px]',
            question.inputType === 'text' && 'min-h-[40px] resize-none'
          )}
        />
      </div>
    </div>
  );
}
