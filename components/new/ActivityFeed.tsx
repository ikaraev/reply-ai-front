import React from "react";

function FeedItem({ message, time }: { message: string; time: string }) {
    return (
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div className="flex flex-col justify-center">
                <p className="text-[#111318] text-base font-medium leading-normal line-clamp-1">{message}</p>
                <p className="text-[#606e8a] text-sm font-normal leading-normal line-clamp-2">{time}</p>
            </div>
        </div>
    );
}

export default function ActivityFeed() {
    const activities = [
        { message: "Response sent to user comment on product review", time: "2 hours ago" },
        { message: "New integration added for online store", time: "4 hours ago" },
        { message: "Response sent to user comment on product review", time: "6 hours ago" },
    ];

    return (
        <>
            <h2 className="text-[#111318] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent
                Activity Feed</h2>

            <div>{activities.map((a, i) => <FeedItem key={i} {...a} />)}</div>
        </>
    );
}
