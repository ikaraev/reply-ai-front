'use client';

import * as React from 'react';
import {useEffect, useState} from 'react';
import {notFound} from 'next/navigation';
import Input from "@/components/new/ui/Input.tsx";
import CopyableInput from "@/components/new/ui/CopyableInput";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Toaster, toast } from 'sonner'
import { useRouter } from 'next/navigation';
import Select from "@/components/new/ui/Select";

type Props = {
    params: { id: string };
};

const toneSelectOptions = [
    { value: 'friendly', label: 'Friendly' },
    { value: 'professional', label: 'Professional' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'enthusiastic', label: 'Enthusiastic' },
    { value: 'sarcastic', label: 'Sarcastic' },
    { value: 'apologetic', label: 'Apologetic' },
    { value: 'humorous', label: 'Humorous' },
    { value: 'urgent', label: 'Urgent' },
    { value: 'casual', label: 'Casual' },
];

export default function EditIntegrationPage({ params }: { params: Promise<{ id: string }> }) {

    const { id } = React.use(params);

    const schema = z.object({
        name: z.string().min(2, 'Name is required'),
        domain: z.string().url('Invalid URL'),
        tone: z.enum([
            'friendly',
            'professional',
            'neutral',
            'enthusiastic',
            'sarcastic',
            'apologetic',
            'humorous',
            'urgent',
            'casual',
        ]),
    });

    type FormData = z.infer<typeof schema>;

    const [value, setValue] = useState('');

    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [integration, setIntegration] = useState<FormData | null>(null);


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            domain: '',
            tone: 'neutral',
        },
    });

    const [data, setData] = useState<[] | null>([]);

    // const response = await fetch(`/api/integrations/${id}`);
    //
    // const resData = await response.json();
    //
    // debugger
    // if (!resData.success) {
    //     return router.back()
    // }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/integrations/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });

            const data = await res.json();

            if (!data.success) {
                return router.back()
            }
            debugger

            setData(data.data);
            reset(data.data);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex flex-wrap gap-2 py-4">
                    <a className="text-[#687182] text-base font-medium leading-normal" href="#">My Integrations</a>
                    <span className="text-[#687182] text-base font-medium leading-normal">/</span>
                    <span className="text-[#121417] text-base font-medium leading-normal">Shopify</span>
                </div>
                <div className="flex flex-wrap justify-between gap-3 py-4">
                    <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-[#121417] tracking-light text-[32px] font-bold leading-tight">Shopify
                            Integration Settings</p>
                        <p className="text-[#687182] text-sm font-normal leading-normal">Manage your Shopify store
                            connection and automation rules.</p>
                    </div>
                </div>
                <div className="pb-3">
                    <div className="flex border-b border-[#dddfe4] px-4 gap-8">
                        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#121417] text-[#121417] pb-[13px] pt-4"
                           href="#">
                            <p className="text-[#121417] text-sm font-bold leading-normal tracking-[0.015em]">Connection
                                Settings</p>
                        </a>
                        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#687182] pb-[13px] pt-4"
                           href="#">
                            <p className="text-[#687182] text-sm font-bold leading-normal tracking-[0.015em]">Automation
                                Rules</p>
                        </a>
                        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#687182] pb-[13px] pt-4"
                           href="#">
                            <p className="text-[#687182] text-sm font-bold leading-normal tracking-[0.015em]">Response
                                Templates</p>
                        </a>
                    </div>
                </div>
                <div className='flex max-w-[480px] flex-wrap items-end gap-4 py-3'>
                    <Input label="Name" placeholder="your-shop.com" value={data.name} />
                </div>
                <div className='flex max-w-[480px] flex-wrap items-end gap-4 py-3'>
                    <Input label="Domain" placeholder="your-shop.com" value={data.domain} disabled/>
                </div>
                <div className='flex max-w-[480px] flex-wrap items-end gap-4 py-3'>
                    <Select
                        label="Tone"
                        value={data.tone}
                        options={toneSelectOptions}
                        registration={register('tone')}
                    />
                </div>
                <div className='flex max-w-[480px] flex-wrap items-end gap-4 py-3'>
                    <CopyableInput
                        label="API Key"
                        value={data?.integration_key?.api_key}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <div className='flex max-w-[480px] flex-wrap items-end gap-4 py-3'>
                    <CopyableInput
                        label="Secret"
                        value={data?.integration_key?.secret}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <div className="flex justify-stretch">
                    <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                        <button
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#3968c5] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Save Changes</span>
                        </button>
                        <button
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f1f2f4] text-[#121417] text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Test Connection</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
