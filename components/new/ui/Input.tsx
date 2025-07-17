'use client';

import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Input as ShadInput } from '@/components/ui/input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    registration: UseFormRegisterReturn;
    className?: string;
}

export default function Input({
                                  label,
                                  error,
                                  registration,
                                  className,
                                  ...props
                              }: InputProps) {
    return (
        <label className={className ?? 'flex flex-col min-w-40 flex-1'}>
            <p className="text-[#121417] text-base font-medium leading-normal pb-2">{label}</p>
            <ShadInput
                {...registration}
                {...props}
                className="w-full"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </label>
    );
}
