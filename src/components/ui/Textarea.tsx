import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="mb-2 block text-sm font-medium text-text-primary dark:text-text-dark-primary">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'w-full rounded-xl border bg-white px-4 py-3',
            'text-text-primary placeholder:text-text-secondary/60',
            'dark:bg-white/[0.03] dark:text-text-dark-primary dark:placeholder:text-text-dark-secondary/40',
            'border-border-light dark:border-white/[0.08]',
            'focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10',
            'transition-all duration-200 resize-none',
            error && 'border-error focus:border-error focus:ring-error/10',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-error">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
