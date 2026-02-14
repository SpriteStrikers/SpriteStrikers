import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps } from 'motion/react';
import React from 'react';

interface PixelButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'wood' | 'leaf' | 'parchment';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
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
      {variant === 'wood' && <div className="w-1 h-1 bg-[#3e2723] rounded-full opacity-50" />}
      {children}
      {variant === 'wood' && <div className="w-1 h-1 bg-[#3e2723] rounded-full opacity-50" />}
    </motion.button>
  );
};