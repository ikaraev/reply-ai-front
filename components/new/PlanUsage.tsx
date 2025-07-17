import React from "react";

export default function PlanUsage({ usage }: { usage: number }) {
    return (
        <div className="flex flex-col gap-3 p-4">
            <div className="flex justify-between">
                <p className="text-[#111318] text-base font-medium leading-normal">Plan Usage</p>
                <p className="text-[#111318] text-sm font-normal leading-normal">{usage}%</p>
            </div>
            <div className="rounded bg-[#dbdfe6]">
                <div className="h-2 rounded bg-[#111318]" style={{ width: `${usage}%` }}></div>
            </div>
        </div>
    );
}
