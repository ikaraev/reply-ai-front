import React from "react";

function ReplyItem({ text, likes }: { text: string; likes: number }) {
    return (
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div className="flex flex-col justify-center">
                <p className="text-[#111318] text-base font-medium leading-normal line-clamp-1">{text}</p>
                <p className="text-[#606e8a] text-sm font-normal leading-normal line-clamp-2">{likes} likes</p>
            </div>
        </div>
    );
}

export default function TopReplies() {
    const replies = [
        { text: "Thank you for your positive feedback! We're thrilled you enjoyed our product.", likes: 12 },
        { text: "We appreciate your review and are glad to hear you had a great experience.", likes: 8 },
    ];

    return (
        <>
            <h2 className="text-[#111318] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Top
                Performing Replies</h2>
            <div>{replies.map((r, i) => <ReplyItem key={i} {...r} />)}</div>
        </>
    );
}
