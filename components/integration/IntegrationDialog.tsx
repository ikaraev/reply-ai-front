// 'use client';
//
// import { useState } from 'react';
// import {
//     Dialog,
//     DialogContent,
//     DialogHeader,
//     DialogFooter,
//     DialogTitle,
// } from '@/components/ui/dialog';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import {
//     Select,
//     SelectTrigger,
//     SelectValue,
//     SelectContent,
//     SelectItem,
// } from '@/components/ui/select';
// import clsx from 'clsx';
//
// export function IntegrationDialog({ open, onOpenChange }: {
//     open: boolean;
//     onOpenChange: (open: boolean) => void;
// }) {
//     const [step, setStep] = useState(1);
//     const [platform, setPlatform] = useState('');
//     const [storeUrl, setStoreUrl] = useState('');
//     const [loading, setLoading] = useState(false);
//
//     const handleSave = async () => {
//         setLoading(true);
//         try {
//             debugger
//             const res = await fetch('/api/integrations', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ 'platform_id': platform, 'domain': storeUrl }),
//             });
//
//             if (!res.ok) throw new Error('Error saving integration');
//
//             onOpenChange(false);
//             setStep(1);
//             setPlatform('');
//             setStoreUrl('');
//         } catch {
//             alert('Something went wrong');
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     const steps = [
//         { id: 1, title: 'Platform' },
//         { id: 2, title: 'Details' },
//     ];
//
//     return (
//         <Dialog open={open} onOpenChange={onOpenChange}>
//             <DialogContent className="max-w-xl">
//                 <DialogHeader>
//                     <DialogTitle>Add New Integration</DialogTitle>
//                 </DialogHeader>
//
//                 {/* Stepper */}
//                 <div className="flex items-center justify-between mb-6 px-1">
//                     {steps.map((s, i) => (
//                         <div key={s.id} className="flex items-center gap-2">
//                             <div
//                                 className={clsx(
//                                     'flex items-center justify-center w-8 h-8 rounded-full border text-sm font-medium',
//                                     {
//                                         'bg-primary text-white': step === s.id,
//                                         'border-muted text-muted-foreground': step !== s.id,
//                                     }
//                                 )}
//                             >
//                                 {s.id}
//                             </div>
//                             <span
//                                 className={clsx('text-sm font-medium', {
//                                     'text-primary': step === s.id,
//                                     'text-muted-foreground': step !== s.id,
//                                 })}
//                             >
//                                 {s.title}
//                           </span>
//                             {i < steps.length - 1 && (
//                                 <div className="w-6 h-px bg-muted-foreground mx-2" />
//                             )}
//                         </div>
//                     ))}
//                 </div>
//
//                 {/* Step 1: Platform */}
//                 {step === 1 && (
//                     <div className="space-y-4">
//                         <Label>Platform</Label>
//                         <Select onValueChange={setPlatform} value={platform}>
//                             <SelectTrigger>
//                                 <SelectValue placeholder="Select platform" />
//                             </SelectTrigger>
//                             <SelectContent>
//                                 <SelectItem value="shopify">Shopify</SelectItem>
//                                 <SelectItem value="woocommerce">WooCommerce</SelectItem>
//                                 <SelectItem value="custom">Custom</SelectItem>
//                             </SelectContent>
//                         </Select>
//                     </div>
//                 )}
//
//                 {/* Step 2: Store Info */}
//                 {step === 2 && (
//                     <div className="space-y-4">
//                         <Label htmlFor="storeUrl">Store URL</Label>
//                         <Input
//                             id="storeUrl"
//                             placeholder="yourstore.myshopify.com"
//                             value={storeUrl}
//                             onChange={(e) => setStoreUrl(e.target.value)}
//                         />
//                     </div>
//                 )}
//
//                 <DialogFooter className="mt-6">
//                     {step > 1 && (
//                         <Button variant="outline" type="button" onClick={() => setStep(step - 1)}>
//                             Back
//                         </Button>
//                     )}
//
//                     {step < steps.length && (
//                         <Button type="button" onClick={() => {
//                             if (step === 1 && !platform) return alert('Please select a platform');
//                             setStep(step + 1);
//                         }}>
//                             Next
//                         </Button>
//                     )}
//
//                     {step === steps.length && (
//                         <Button type="button" onClick={handleSave} disabled={loading}>
//                             {loading ? 'Saving...' : 'Save'}
//                         </Button>
//                     )}
//                 </DialogFooter>
//             </DialogContent>
//         </Dialog>
//     );
// }

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function IntegrationDialog({ open, onOpenChange }: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    // const [open, setOpen] = useState(false)
    const [form, setForm] = useState({
        platform_code: '',
        domain: '',
        name: '',
        access_token: '',
    })

    const [checking, setChecking] = useState(false)
    const [checkResult, setCheckResult] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async () => {
        // Пример запроса на создание
        const res = await fetch('/api/integrations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                platform_code: form.platform_code,
                domain: form.domain,
                name: form.name,
            }),
        })
        const json = await res.json()
        if (json.access_token) {
            setForm(prev => ({ ...prev, access_token: json.access_token }))
        }

        setLoading(true);
        try {
            debugger
            const res = await fetch('/api/integrations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 'platform_id': platform, 'domain': storeUrl }),
            });

            if (!res.ok) throw new Error('Error saving integration');

            onOpenChange(false);
            setStep(1);
            setPlatform('');
            setStoreUrl('');
        } catch {
            alert('Something went wrong');
        } finally {
            setLoading(false);
        }
    }

    const handleVerify = async () => {
        setChecking(true)
        setCheckResult(null)
        try {
            const res = await fetch(`/api/integrations/verify?domain=${form.domain}`)
            const json = await res.json()
            setCheckResult(json.status)
        } catch (err) {
            setCheckResult('error')
        } finally {
            setChecking(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-xl rounded-xl p-6 space-y-6">
                <h2 className="text-xl font-semibold">New Integration</h2>

                <div className="space-y-4">
                    <div>
                        <Label htmlFor="platform_code">Platform Code</Label>
                        <Input id="platform_code" name="platform_code" value={form.platform_code} onChange={handleChange} />
                    </div>

                    <div>
                        <Label htmlFor="domain">Domain</Label>
                        <Input id="domain" name="domain" value={form.domain} onChange={handleChange} />
                    </div>

                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" value={form.name} onChange={handleChange} />
                    </div>

                    {form.access_token && (
                        <div>
                            <Label htmlFor="access_token">Access Token</Label>
                            <Input id="access_token" value={form.access_token} disabled />
                        </div>
                    )}
                </div>

                <div className="flex justify-between pt-4 border-t">
                    <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                    <div className="space-x-2">
                        <Button onClick={handleSubmit}>Create</Button>
                        {form.access_token && (
                            <Button variant="secondary" onClick={handleVerify} disabled={checking}>
                                {checking ? 'Checking...' : 'Verify Connection'}
                            </Button>
                        )}
                    </div>
                </div>

                {checkResult && (
                    <div className="text-sm text-muted-foreground pt-2">
                        Status: <strong>{checkResult}</strong>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}
