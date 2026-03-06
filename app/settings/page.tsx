'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useChatStore } from '@/stores/chatStore';
import { DEFAULT_MODEL, BYOK_MODELS } from '@/lib/constants';

export default function SettingsPage() {
  const byokKey = useChatStore((s) => s.byokKey);
  const model = useChatStore((s) => s.model);
  const setByokKey = useChatStore((s) => s.setByokKey);
  const setModel = useChatStore((s) => s.setModel);

  const [keyInput, setKeyInput] = useState(byokKey ?? '');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    const trimmed = keyInput.trim();
    setByokKey(trimmed || null);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleClear = () => {
    setKeyInput('');
    setByokKey(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold text-guard-blue-900 mb-2">
          Settings
        </h1>
        <p className="text-sm text-guard-blue-600 mb-8">
          Configure your API key and model preferences.
        </p>

        <Card>
          <h2 className="text-lg font-medium text-guard-blue-900 mb-1">
            OpenRouter API Key
          </h2>
          <p className="text-sm text-guard-blue-500 mb-4">
            Provide your own <a href="https://openrouter.ai/keys" target="_blank" rel="noopener noreferrer" className="underline hover:text-guard-blue-700">OpenRouter API key</a> to choose from premium models instead of the default <strong>{DEFAULT_MODEL}</strong>. Your key is stored only in your browser&apos;s session storage and is never sent to our servers.
          </p>

          <div className="space-y-3">
            <div>
              <label
                htmlFor="api-key"
                className="block text-sm font-medium text-guard-blue-700 mb-1.5"
              >
                API Key
              </label>
              <input
                id="api-key"
                type="password"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                placeholder="sk-or-..."
                className="w-full rounded-lg border border-guard-border bg-white px-3 py-2 text-sm text-guard-blue-900 placeholder:text-guard-blue-300 focus:outline-none focus:ring-2 focus:ring-guard-accent focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-3">
              <Button onClick={handleSave} size="sm">
                Save Key
              </Button>
              {byokKey && (
                <Button onClick={handleClear} variant="ghost" size="sm">
                  Clear Key
                </Button>
              )}
              {saved && (
                <span className="text-sm text-guard-success">Saved!</span>
              )}
            </div>
          </div>

          {byokKey && (
            <div className="mt-5">
              <label
                htmlFor="model-select"
                className="block text-sm font-medium text-guard-blue-700 mb-1.5"
              >
                Model
              </label>
              <select
                id="model-select"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full rounded-lg border border-guard-border bg-white px-3 py-2 text-sm text-guard-blue-900 focus:outline-none focus:ring-2 focus:ring-guard-accent focus:border-transparent"
              >
                {BYOK_MODELS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-guard-border">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-guard-blue-500">Active model:</span>
              <span className="font-medium text-guard-blue-800">{model}</span>
              {byokKey && (
                <span className="inline-flex items-center rounded-full bg-guard-accent-light px-2 py-0.5 text-xs font-medium text-guard-accent">
                  BYOK
                </span>
              )}
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
