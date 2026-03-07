'use client';

import { cn } from '@/lib/utils';
import { CopyButton } from './CopyButton';
import { MarkdownContent } from './MarkdownContent';
import type { ChatMessage as ChatMessageType } from '@/lib/types';

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={cn(
        'flex',
        isUser ? 'justify-end' : 'justify-start'
      )}
    >
      <div className="max-w-[85%]">
        <div
          className={cn(
            'rounded-2xl px-4 py-3 text-sm leading-relaxed',
            isUser
              ? 'bg-guard-accent text-white rounded-br-md'
              : 'bg-guard-blue-50 text-guard-blue-800 rounded-bl-md'
          )}
        >
          {isUser
            ? <div className="whitespace-pre-wrap">{message.content}</div>
            : <MarkdownContent content={message.content} />
          }
          {message.isStreaming && (
            <span className="inline-block w-1.5 h-4 bg-guard-blue-400 animate-pulse ml-0.5 align-middle" />
          )}
        </div>
        {!isUser && !message.isStreaming && message.content && (
          <div className="mt-1">
            <CopyButton text={message.content} />
          </div>
        )}
      </div>
    </div>
  );
}
