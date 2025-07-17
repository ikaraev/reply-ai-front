'use client';

import { useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';

type Props = {
    label: string;
    error?: string;
    className?: string;
    registration?: React.InputHTMLAttributes<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function CopyableInput({
                                          label,
                                          error,
                                          className,
                                          registration,
                                          defaultValue,
                                          ...props
                                      }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (inputRef.current) {
            navigator.clipboard.writeText(inputRef.current.value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // reset after 2s
        }
    };

    return (
        <label className={className ?? 'flex flex-col min-w-40 flex-1'}>
            <p className="text-[#121417] text-base font-medium leading-normal pb-2">{label}</p>
            <div className="relative">
                <input
                    ref={inputRef}
                    defaultValue={defaultValue}
                    {...registration}
                    {...props}
                    className="w-full border border-gray-300 rounded-md p-2 pr-10"
                />
                <button
                    type="button"
                    onClick={handleCopy}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                >
                    {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </label>
    );
}
