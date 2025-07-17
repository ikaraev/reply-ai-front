// export default function Sidebar() {
//     const menuItems = [
//         { label: "Dashboard", icon: "🏠" },
//         { label: "Integrations", icon: "🧩" },
//         { label: "Responses", icon: "💬" },
//         { label: "Plans & Billing", icon: "💳" },
//         { label: "Settings", icon: "⚙️" },
//     ];
//
//     return (
//         <aside className="w-80 p-4 bg-white border-r border-gray-200 min-h-screen">
//             <h1 className="text-[#111318] text-base font-medium mb-6">ReplyNest</h1>
//             <nav className="flex flex-col gap-2">
//                 {menuItems.map((item) => (
//                     <div
//                         key={item.label}
//                         className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#f0f1f5] cursor-pointer"
//                     >
//                         <span>{item.icon}</span>
//                         <p className="text-[#111318] text-sm font-medium leading-normal">{item.label}</p>
//                     </div>
//                 ))}
//             </nav>
//         </aside>
//     );
// }


"use client"

import {IconDashboard} from "@tabler/icons-react";
import * as react from "react";
import {Icon, IconProps} from "@tabler/icons-react/dist/esm/types";
import React from "react";
import {HomeIcon, Workflow, MessageCircleMoreIcon, CreditCardIcon, Settings} from "lucide-react";
import Link from "next/link";
import { CloudHail } from 'lucide-react';

export default function Sidebar() {
    const menuItems = [
        {
            label: "Dashboard",
            icon: HomeIcon,
            url: "/dashboard"
        },
        {
            label: "Integrations",
            icon: Workflow,
            url: "/integrations"
        },
        {
            label: "Reviews",
            url: "/reviews",
            icon: MessageCircleMoreIcon,
        },
        {
            label: "Plans & Billing",
            icon: CreditCardIcon,
            url: ""
        },
        {
            label: "Settings",
            icon: Settings,
            url: ""
        },

        // { label: "Responses", icon: "💬", url: "" },
        // { label: "Plans & Billing", icon: "💳", url: "" },
        // { label: "Settings", icon: "⚙️", url: "" },
    ];


    return (
        <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-white p-4">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[#111318] text-base font-medium leading-normal">ReplyNest</h1>
                    <div className="flex flex-col gap-2">

                        {menuItems.map((item) => (
                            // <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#f0f1f5]">
                            //     <div className="text-[#111318]" data-icon="House" data-size="24px" data-weight="fill">
                            //         <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                            //              viewBox="0 0 256 256">
                            //             <path
                            //                 d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
                            //             ></path>
                            //         </svg>
                            //     </div>
                            //     <p className="text-[#111318] text-sm font-medium leading-normal">{item.label}</p>
                            // </div>
                            <Link href={item.url} key={item.label}>
                                <div className="flex items-center gap-3 px-3 py-2">
                                    <div className="text-[#111318]" data-icon="PuzzlePiece" data-size="24px" data-weight="regular">
                                        {item.icon && <item.icon/>}
                                    </div>
                                    <p className="text-[#111318] text-sm font-medium leading-normal">{item.label}</p>
                                </div>
                            </Link>

                        ))}

                        {/*<div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#f0f1f5]">*/}
                        {/*    <div className="text-[#111318]" data-icon="House" data-size="24px" data-weight="fill">*/}
                        {/*        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"*/}
                        {/*             viewBox="0 0 256 256">*/}
                        {/*            <path*/}
                        {/*                d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"*/}
                        {/*            ></path>*/}
                        {/*        </svg>*/}
                        {/*    </div>*/}
                        {/*    <p className="text-[#111318] text-sm font-medium leading-normal">Dashboard</p>*/}
                        {/*</div>*/}
                        {/*<div className="flex items-center gap-3 px-3 py-2">*/}
                        {/*    <div className="text-[#111318]" data-icon="PuzzlePiece" data-size="24px" data-weight="regular">*/}
                        {/*        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"*/}
                        {/*             viewBox="0 0 256 256">*/}
                        {/*            <path*/}
                        {/*                d="M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.11,36.11,0,0,0-11.36-26.24,36,36,0,0,0-60.55,23.62,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,35.68,35.68,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z"*/}
                        {/*            ></path>*/}
                        {/*        </svg>*/}
                        {/*    </div>*/}
                        {/*    <p className="text-[#111318] text-sm font-medium leading-normal">Integrations</p>*/}
                        {/*</div>*/}
                        {/*<div className="flex items-center gap-3 px-3 py-2">*/}
                        {/*    <div className="text-[#111318]" data-icon="ChatCircleDots" data-size="24px" data-weight="regular">*/}
                        {/*        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"*/}
                        {/*             viewBox="0 0 256 256">*/}
                        {/*            <path*/}
                        {/*                d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"*/}
                        {/*            ></path>*/}
                        {/*        </svg>*/}
                        {/*    </div>*/}
                        {/*    <p className="text-[#111318] text-sm font-medium leading-normal">Responses</p>*/}
                        {/*</div>*/}
                        {/*<div className="flex items-center gap-3 px-3 py-2">*/}
                        {/*    <div className="text-[#111318]" data-icon="CreditCard" data-size="24px" data-weight="regular">*/}
                        {/*        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"*/}
                        {/*             viewBox="0 0 256 256">*/}
                        {/*            <path*/}
                        {/*                d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"*/}
                        {/*            ></path>*/}
                        {/*        </svg>*/}
                        {/*    </div>*/}
                        {/*    <p className="text-[#111318] text-sm font-medium leading-normal">Plans &amp; Billing</p>*/}
                        {/*</div>*/}
                        {/*<div className="flex items-center gap-3 px-3 py-2">*/}
                        {/*    <div className="text-[#111318]" data-icon="Gear" data-size="24px" data-weight="regular">*/}
                        {/*        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"*/}
                        {/*             viewBox="0 0 256 256">*/}
                        {/*            <path*/}
                        {/*                d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"*/}
                        {/*            ></path>*/}
                        {/*        </svg>*/}
                        {/*    </div>*/}
                        {/*    <p className="text-[#111318] text-sm font-medium leading-normal">Settings</p>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>
        </div>
    );
}

// export default function Sidebar() {
//     const menuItems = [
//         {
//             label: "Dashboard",
//             icon: HomeIcon,
//             url: "/dashboard"
//         },
//         {
//             label: "Integrations",
//             icon: Blocks,
//             url: "/integrations"
//         },
//         {
//             label: "Reviews",
//             url: "/reviews",
//             icon: MessageCircleMoreIcon,
//         },
//         {
//             label: "Plans & Billing",
//             icon: CreditCardIcon,
//             url: ""
//         },
//         {
//             label: "Settings",
//             icon: Settings,
//             url: ""
//         },
//
//         // { label: "Responses", icon: "💬", url: "" },
//         // { label: "Plans & Billing", icon: "💳", url: "" },
//         // { label: "Settings", icon: "⚙️", url: "" },
//     ];
//
//     return (
//         <div className="layout-content-container flex flex-col w-80">
//             <div className="flex h-full min-h-[700px] flex-col justify-between bg-white p-4">
//                 <div className="flex flex-col gap-4">
//                     <h1 className="text-[#111318] text-base font-medium leading-normal">ReplyNest</h1>
//                     <div className="flex flex-col gap-2">
//                         {menuItems.map((item) => (
//                             <SidebarItem icon={item.icon} url={item.url} label={item.label} active={false} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// function SidebarItem({ icon: Icon, label, url, active }: { icon: React.ElementType, url: string, label: string; active?: boolean }) {
//     const baseClass = "flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#f0f1f5] cursor-pointer";
//     const activeClass = active ? "bg-[#f0f1f5]" : "";
//
//     return (
//         <Link href={url}>
//             <div className={`${baseClass} ${activeClass}`.trim()}>
//                 {Icon && <Icon />}
//                 <p className="text-[#111318] text-sm font-medium leading-normal">{label}</p>
//             </div>
//         </Link>
//     );
// }
