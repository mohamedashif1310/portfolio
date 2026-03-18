'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'typescript' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={copyCode}
          className="p-2 rounded-lg bg-surface-dark/80 hover:bg-surface-dark transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-success" />
          ) : (
            <Copy className="w-4 h-4 text-text-dark-secondary" />
          )}
        </button>
      </div>
      <pre className="p-4 rounded-lg bg-surface-dark overflow-x-auto">
        <code className={`language-${language} text-sm font-mono text-text-dark-primary`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
