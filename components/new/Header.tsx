import React from "react";

import { useSession } from "@/app/providers/SessionProvider";
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {

    const { user } = useSession();
    const [initials, setInitials] = useState('');

    function capitalizeFirstLetter(str) {
        if (str.length === 0) return '';  // Handle empty string
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    capitalizeFirstLetter(user)


    return (
        <header
            className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f1f5] px-10 py-3">
            <div className="flex items-center gap-4 text-[#111318]">
                <div className="size-4">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
                <h2 className="text-[#111318] text-lg font-bold leading-tight tracking-[-0.015em]">ReplyNest</h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                {/*<button*/}
                {/*    className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f1f5] text-[#111318] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"*/}
                {/*>*/}
                {/*    <div className="text-[#111318]" data-icon="Question" data-size="20px" data-weight="regular">*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"*/}
                {/*             viewBox="0 0 256 256">*/}
                {/*            <path*/}
                {/*                d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"*/}
                {/*            ></path>*/}
                {/*        </svg>*/}
                {/*    </div>*/}
                {/*</button>*/}
                {/*<div*/}
                {/*    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"*/}
                {/*    style={{*/}
                {/*        backgroundImage:*/}
                {/*            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAyQd84hIlIeyWYvlNXFShEMuDYHfKsDI6eQnyHwbZUAxecsir2XFEyRkdvyobqb3dqR9v-K7DJqBZ4fM3gfCeFbqu7dL9hX9fjhXe2h93Zb1CAHadWPPsJ9aooKpT5B0gQkxEU1P5l4XaRPr7nCuitvxEWhAuiaOC9MbbGmTb8kqDqHHKDuZn9FxDIrcYuu8uyhATcjCSWof-cAYS4kDfiAY-Q1CI0BjUxCT_REDponsBgcemJhyiMgTY44Vde2dn221v3mzM4ks")',*/}
                {/*    }}*/}
                {/*></div>*/}

                <button
                    className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f1f2f4] text-[#121417] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                >
                    <div className="text-[#121417]" data-icon="Bell" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                             viewBox="0 0 256 256">
                            <path
                                d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                            ></path>
                        </svg>
                    </div>
                </button>


                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"

                        >
                            <AvatarImage src="https://github.com/shadcn.png"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


            </div>
        </header>
    );
}
