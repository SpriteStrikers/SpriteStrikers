import { cn } from '@/lib/utils';
import React from 'react';

interface ParchmentPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'parchment' | 'wood';
  title?: string;
}

export const ParchmentPanel = ({ children, className, variant = 'parchment', title }: ParchmentPanelProps) => {
  return (
    <div className={cn(
      'relative p-8 border-4 transition-all duration-300',
      variant === 'parchment' 
        ? 'bg-[#e9d5a1] border-[#8b5e3c] shadow-[8px_8px_0_rgba(139,94,60,0.4)]' 
        : 'bg-[#5d4037] border-[#3e2723] shadow-[8px_8px_0_rgba(62,39,35,0.6)]',
      'before:absolute before:inset-0 before:bg-[url("https://www.transparenttextures.com/patterns/paper.png")] before:opacity-30 before:pointer-events-none',
      className
    )}>
      {variant === 'parchment' && (
        <>
          <div className="absolute top-0 left-0 w-4 h-4 bg-slate-950 -translate-x-1/2 -translate-y-1/2 rounded-full" />
          <div className="absolute top-0 right-0 w-4 h-4 bg-slate-950 translate-x-1/2 -translate-y-1/2 rounded-full" />
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-slate-950 -translate-x-1/2 translate-y-1/2 rounded-full" />
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-slate-950 translate-x-1/2 translate-y-1/2 rounded-full" />
        </>
      )}

      {title && (
        <div className={cn(
          'absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 border-4 font-pixel text-xs uppercase tracking-widest z-20',
          variant === 'parchment' ? 'bg-[#8b5e3c] text-[#f5e6be] border-[#5d4037]' : 'bg-[#3e2723] text-[#d7ccc8] border-[#1b0d0a]'
        )}>
          {title}
        </div>
      )}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};