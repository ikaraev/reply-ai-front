'use client';

import {
    Select as ShadSelect,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { SelectHTMLAttributes, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Option {
    value: string;
    label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    error?: string;
    registration: UseFormRegisterReturn;
    options: Option[];
    className?: string;
    placeholder?: string;
}

export default function Select({
                                   label,
                                   error,
                                   value = '',
                                   registration,
                                   options,
                                   className,
                                   placeholder = 'Select...',
                               }: SelectProps) {

    const [optionValue, setOptionValue] = useState(value)

    return (
        <label className={className ?? 'flex flex-col min-w-40 flex-1'}>
            <p className="text-[#121417] text-base font-medium leading-normal pb-2">{label}</p>
            <ShadSelect
                onValueChange={(value) => {
                    registration.onChange({ target: { name: registration.name, value } });
                    setOptionValue(value)
                }}
                value={optionValue}
                defaultValue={optionValue}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </ShadSelect>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </label>
    );
}
