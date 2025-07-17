import React from "react";
import PlanUsage from "@/components/new/PlanUsage";

function StatCard({ label, value, trend, trendColor }: { label: string; value: string; trend: string; trendColor: string }) {
    return (
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dbdfe6]">
            <p className="text-[#111318] text-base font-medium leading-normal">{label}</p>
            <p className="text-[#111318] tracking-light text-2xl font-bold leading-tight">{value}</p>
            <p className={`text-[${trendColor}] text-base font-medium leading-normal`}>{trend}</p>
        </div>
    );
}

export default function QuickStats() {
    const stats = [
        { label: "Total Responses Sent", value: "1,234", trend: "+10%", trendColor: "#07883b" },
        { label: "Active Integrations", value: "3", trend: "+5%", trendColor: "#07883b" },
        { label: "Avg. Response Time", value: "2h 30m", trend: "-15%", trendColor: "#e73908" },
        { label: "Plan Usage", value: "60%", trend: "+20%", trendColor: "#07883b" },
    ];

    return (
        <>
            <h2 className="text-[#111318] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Quick
                Stats</h2>

            <div className="flex flex-wrap gap-4 p-4">{stats.map((s) => <StatCard key={s.label} {...s} />)}</div>
        </>
    );
}
