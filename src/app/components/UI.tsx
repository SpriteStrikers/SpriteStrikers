import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'motion/react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
      {/* Torn paper effect for parchment */}
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

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'wood' | 'leaf' | 'parchment';
  size?: 'sm' | 'md' | 'lg';
}

export const PixelButton = ({ 
  children, 
  className, 
  variant = 'wood', 
  size = 'md',
  ...props 
}: PixelButtonProps) => {
  const variants = {
    wood: 'bg-[#795548] border-[#3e2723] text-[#f5f5f5] hover:bg-[#8d6e63] shadow-[4px_4px_0_#3e2723] active:shadow-none',
    leaf: 'bg-[#43a047] border-[#1b5e20] text-[#f1f8e9] hover:bg-[#4caf50] shadow-[4px_4px_0_#1b5e20] active:shadow-none',
    parchment: 'bg-[#d7ccc8] border-[#a1887f] text-[#4e342e] hover:bg-[#efe5fd] shadow-[4px_4px_0_#a1887f] active:shadow-none',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-3 text-[12px]',
    lg: 'px-10 py-5 text-[14px]',
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 2, x: 2 }}
      className={cn(
        'font-pixel uppercase tracking-tighter border-4 active:translate-y-[4px] active:translate-x-[4px] transition-all duration-75 flex items-center justify-center gap-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {/* "Knot" decoration for wood variant */}
      {variant === 'wood' && <div className="w-1 h-1 bg-[#3e2723] rounded-full opacity-50" />}
      {children}
      {variant === 'wood' && <div className="w-1 h-1 bg-[#3e2723] rounded-full opacity-50" />}
    </motion.button>
  );
};

export const ScanlineOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-10">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(139,94,60,0.1)_2px,transparent_2px)] bg-[length:100%_4px]" />
  </div>
);
