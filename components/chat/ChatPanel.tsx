'use client';

import { MessageList } from './MessageList';
import { ModelBadge } from './ModelBadge';
import type { ChatMessage } from '@/lib/types';

interface ChatPanelProps {
  messages: ChatMessage[];
  model: string;
}

export function ChatPanel({ messages, model }: ChatPanelProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-3 border-b border-guard-border flex items-center justify-between">
        <span className="text-sm font-medium text-guard-blue-700">AI Chat</span>
        <ModelBadge model={model} />
      </div>
      <MessageList messages={messages} />
      <div className="p-4 border-t border-guard-border">
        <div className="rounded-lg border border-guard-border bg-guard-surface-elevated px-3 py-2 text-sm text-guard-blue-400">
          Send a prompt from the scaffolding panel...
        </div>
      </div>
    </div>
  );
}
