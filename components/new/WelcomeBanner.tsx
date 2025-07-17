import React from "react";

export default function WelcomeBanner({ name }: { name: string }) {
    return (
        <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#111318] tracking-light text-[32px] font-bold leading-tight min-w-72">Welcome back, {name}</p>
        </div>
    );
}
