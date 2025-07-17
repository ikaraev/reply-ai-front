'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from "@/components/new/ui/Input.tsx";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Toaster, toast } from 'sonner'
import Select from "@/components/new/ui/Select";

const toneOptions = [
    'friendly',
    'professional',
    'neutral',
    'enthusiastic',
    'sarcastic',
    'apologetic',
    'humorous',
    'urgent',
    'casual',
] as const;

export default function NewIntegrationPage() {
    const schema = z.object({
        name: z.string().min(2, 'Name is required'),
        domain: z
            .string()
            .min(1, 'Domain is required')
            .url('Domain must be a valid URL'),
        tone: z.enum(toneOptions, {
            errorMap: () => ({ message: 'Tone is required' }),
        }),
    });

    type FormData = z.infer<typeof schema>;

    const steps = [
        { id: 1, title: 'Step 1: Choose Platform' },
        { id: 2, title: 'Step 2:' },
        { id: 3, title: 'Step 3', content: 'Review and submit.' },
    ];

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

    const platforms = [
        {
            code: "website",
            title: "Website",
            secondTitle: "Website Details",
            shortDescription: "Connect your website",
            description: "To connect your Website, you'll need to provide your store URL and API key. Follow the steps below to find this information"
        },
        {
            code: "shopify",
            title: "Shopify",
            secondTitle: "Shopify Store Details",
            shortDescription: "Connect your Shopify store",
            description: "To connect your Website, you'll need to provide your store URL and API key. Follow the steps below to find this information"
        },
        {
            code: "woocommerce",
            title: "WooCommerce",
            secondTitle: "WooCommerce Store Details",
            shortDescription: "Connect your WooCommerce store",
            description: "To connect your Website, you'll need to provide your store URL and API key. Follow the steps below to find this information"
        },
        {
            code: "magento",
            title: "Magento",
            secondTitle: "Magento Store Details",
            shortDescription: "Connect your Magento store",
            description: "To connect your Website, you'll need to provide your store URL and API key. Follow the steps below to find this information"
        },
        {
            code: "bigcommerce",
            title: "BigCommerce",
            secondTitle: "BigCommerce Store Details",
            shortDescription: "Connect your BigCommerce store",
            description: "To connect your Website, you'll need to provide your store URL and API key. Follow the steps below to find this information"
        },
    ];

    const [currentPlatform, setCurrentPlatform] = useState({});
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const [currentStep, setCurrentStep] = useState(steps[0]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    // const onSubmit = (data: FormData) => {
    //     alert(JSON.stringify(data, null, 2));
    // };

    const getTitle = () => {
        if (currentStep.id === 1) {
            return currentStep.title;
        }

        if (currentStep.id === 2) {
            return `${currentStep.title} ${currentPlatform.shortDescription}`
        }
    }

    const next = () => {
        if (!currentPlatform.code) {
            toast.warning('Platform not selected');
            return;
        }

        const nextStepId = currentStep.id + 1;

        const nextStep = steps.find((step, index) => {
            return step.id === nextStepId
        })

        if (nextStep) {
            setCurrentStep(nextStep);
        }
    };

    const prev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const onSubmit = async (data: FormData) => {
        setLoading(true);

        try {
            data.platform_code = currentPlatform.code;

            const res = await fetch('/api/integrations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const response = await res.json();

            if (!response.success) {
                toast.error(response.message);
                return
            }

            router.push('/integrations');
        } catch (err) {
            console.error(err);
            alert('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Toaster/>
            <div className="flex flex-wrap gap-2 p-4">
                <a className="text-[#606e8a] text-base font-medium leading-normal" href="#">Dashboard</a>
                <span className="text-[#606e8a] text-base font-medium leading-normal">/</span>
                <a className="text-[#606e8a] text-base font-medium leading-normal" href="#">Integrations</a>
                <span className="text-[#606e8a] text-base font-medium leading-normal">/</span>
                <span className="text-[#111318] text-base font-medium leading-normal">Add Integration</span>
            </div>
            <h2 className="text-[#111318] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">Add
                Integration</h2>
            <h3 className="text-[#111318] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">{getTitle()}</h3>
            <div className="p-4">
                {currentStep.id === 1 ? (
                    <>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">

                            {platforms.map((platform) => (
                                <div className="flex flex-col gap-3 pb-3 cursor-pointer"
                                     key={platform.code}
                                     onClick={() => setCurrentPlatform(platform)}
                                >
                                    <div
                                        className={
                                            `w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl
                                            ${currentPlatform.code === platform.code ? 'border-2 border-blue-500' : null}`
                                        }
                                        style={{
                                            backgroundImage:
                                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDipx8SdmFzDFmuHgMoKxoWJvxSm_3XUwbfNrjU2AcmEqGWEGFBc-pyX2nII2azfhZfNAh9aPY-kNP-eClQPJ-LnC9jNDWuztsAE8Yt72NaNO5ENNGuJAfZ4wGZ9vk9AlrzjWI9IW59tu2KDJi026eluasqch8q4zYpuacN5WFRUWrct5t29J6a2PBEde_Vxe6Y1J4FRlzez_kgKeEBckvSSjepyKU0b1T-pNtjaFaBrN0sgV3aOsqmPoCtPdUmkpFFQLlO2olBaBM")',
                                        }}
                                    ></div>

                                    <div>
                                        <p className="text-[#111318] text-base font-medium leading-normal">{platform.title}</p>
                                        <p className="text-[#606e8a] text-sm font-normal leading-normal">{platform.shortDescription}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex px-4 py-3 justify-end">
                            <button
                                onClick={next}
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2469f3] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Continue</span>
                            </button>
                        </div>
                    </>
                ) : null}
                {currentStep.id === 2 ? (
                    <>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <p className="text-[#121417] text-base font-normal leading-normal pb-3 pt-1">
                                {currentPlatform.description}
                            </p>
                            <h3 className="text-[#121417] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
                                {currentPlatform.secondTitle}
                            </h3>
                            <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
                                {/*<label className="flex flex-col min-w-40 flex-1">*/}
                                {/*    <p className="text-[#121417] text-base font-medium leading-normal pb-2">Store URL</p>*/}
                                {/*    <input*/}
                                {/*        {...register('name')}*/}
                                {/*        placeholder="your-store.myshopify.com"*/}
                                {/*        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#121417] focus:outline-0 focus:ring-0 border border-[#dddfe4] bg-white focus:border-[#dddfe4] h-14 placeholder:text-[#687182] p-[15px] text-base font-normal leading-normal"*/}
                                {/*        value=""/>*/}
                                {/*</label>*/}

                                <Input
                                    label="Domain"
                                    placeholder="your-shop.com"
                                    registration={register('domain')}
                                    error={errors.domain?.message}/>
                            </div>
                            <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">

                                <Input
                                    label="Name"
                                    placeholder="e.g. Shopify"
                                    registration={register('name')}
                                    error={errors.name?.message}/>

                            </div>
                            <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">

                                <Select
                                    label="Tone"
                                    options={toneSelectOptions}
                                    registration={register('tone')}
                                    error={errors.tone?.message}
                                />
                            </div>

                            <div className="flex px-4 py-3 justify-end">
                                <button
                                    type="submit"
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2469f3] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                    <span className="truncate">Connect</span>
                                </button>
                            </div>
                        </form>

                    </>
                ) : null}
            </div>
        </>
    );
}
