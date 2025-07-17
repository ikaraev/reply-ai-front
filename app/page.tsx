import type {Metadata} from "next";
import React from "react";
import Head from 'next/head';
import Link from "next/link";


import Sidebar from "@/components/new/Sidebar";
import Header from "@/components/new/Header";
import WelcomeBanner from "@/components/new/WelcomeBanner";
import QuickStats from "@/components/new/QuickStats";
import PlanUsage from "@/components/new/PlanUsage";
import ActivityFeed from "@/components/new/ActivityFeed";
import TopReplies from "@/components/new/TopReplies";

export const metadata: Metadata = {
    title:
        "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
    description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Index() {
    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
            style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}
        >
            <div className="layout-container flex h-full grow flex-col">
                <div className="gap-1 px-6 flex flex-1 justify-center py-5">
                    <Sidebar/>
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <Header/>
                        <div>
                            <WelcomeBanner name={'Iso'}/>
                            <div className="flex px-4 py-3 justify-end">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2469f3] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                                >
                                    <span className="truncate">Automate Responses</span>
                                </button>
                            </div>

                            <QuickStats/>

                            <PlanUsage usage={60}/>

                            <ActivityFeed/>

                            <TopReplies/>

                            <div className="flex px-4 py-3 justify-end">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2469f3] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                                >
                                    <span className="truncate">Add Integration</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// export default function Index() {
//   return (
//       <>
//         <Head>
//           <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
//         </Head>
//         <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
//              style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
//           <div className="layout-container flex h-full grow flex-col">
//             <header
//                 className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
//               <div className="flex items-center gap-4 text-[#111418]">
//                 <div className="size-4">
//                   <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                         d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
//                         fill="currentColor"
//                     ></path>
//                     <path
//                         fill-rule="evenodd"
//                         clip-rule="evenodd"
//                         d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z"
//                         fill="currentColor"
//                     ></path>
//                   </svg>
//                 </div>
//                 <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">PostPilot</h2>
//               </div>
//               <div className="flex flex-1 justify-end gap-8">
//                 <div className="flex items-center gap-9">
//                   <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Features</a>
//                   <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Pricing</a>
//                   <a className="text-[#111418] text-sm font-medium leading-normal" href="#">FAQ</a>
//                 </div>
//                 <Link
//                     href={'/signin'}
//                     className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]"
//                 >
//                   <span className="truncate">Start Free Trial</span>
//                 </Link>
//               </div>
//             </header>
//             <div className="px-40 flex flex-1 justify-center py-5">
//               <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
//                 <div className="@container">
//                   <div className="@[480px]:p-4">
//                     <div
//                         className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
//                         style={{
//                           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5ZqZCvvzaShw-RC1AitlLH4RUfCYuPjZgOtAwfpM778uMjIyKH8nViBFBnWuCxGcli8JG-u0xNfRsGLzoxQ3HppbHb9xyHAwjOTDU89OMOfXBCIg2onRju3FOeEW7-Ah8tuLFr1LoZflH49pz9_KyVHUrRPoS-2dCv0gl0fU3ce4z5YbgUB1GsvK4ZRpfh0yhfIf0Q5VaLa7ekJfMT-4oafXbEGLXVEskSjshJ-ssnpcBJfwU_PeacASoGJx-7DzHnbkzor9RrQ")`
//                         }}
//                     >
//                       <div className="flex flex-col gap-2 text-center">
//                         <h1
//                             className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
//                         >
//                           Transform Your Blog Posts Into a Social Media Promo Pack in 30 Seconds
//                         </h1>
//                         <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
//                           Stop manually rewriting your blog posts. PostPilot uses AI to create
//                           platform-perfect content for Twitter, LinkedIn, email, and more.
//                         </h2>
//                       </div>
//                       <button
//                           className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
//                       >
//                         <span className="truncate">Paste Your Blog Post &amp; Start Free Trial</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How
//                   PostPilot Works</h2>
//                 <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
//                   <div className="flex flex-col items-center gap-1 pt-3">
//                     <div className="text-[#111418]" data-icon="TextHThree" data-size="24px"
//                          data-weight="regular">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
//                            fill="currentColor" viewBox="0 0 256 256">
//                         <path
//                             d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z"
//                         ></path>
//                       </svg>
//                     </div>
//                     <div className="w-[1.5px] bg-[#dbe0e6] h-2 grow"></div>
//                   </div>
//                   <div className="flex flex-1 flex-col pt-3 pb-5"><p
//                       className="text-[#111418] text-base font-medium leading-normal">Paste your blog post
//                     link.</p></div>
//                   <div className="flex flex-col items-center gap-1">
//                     <div className="w-[1.5px] bg-[#dbe0e6] h-2"></div>
//                     <div className="text-[#111418]" data-icon="TextHThree" data-size="24px"
//                          data-weight="regular">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
//                            fill="currentColor" viewBox="0 0 256 256">
//                         <path
//                             d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z"
//                         ></path>
//                       </svg>
//                     </div>
//                     <div className="w-[1.5px] bg-[#dbe0e6] h-2 grow"></div>
//                   </div>
//                   <div className="flex flex-1 flex-col pt-3 pb-5">
//                     <p className="text-[#111418] text-base font-medium leading-normal">
//                       Select your desired platforms (Twitter, LinkedIn, etc.) and writing style (Casual,
//                       Witty, Expert).
//                     </p>
//                   </div>
//                   <div className="flex flex-col items-center gap-1 pb-3">
//                     <div className="w-[1.5px] bg-[#dbe0e6] h-2"></div>
//                     <div className="text-[#111418]" data-icon="TextHFour" data-size="24px"
//                          data-weight="regular">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
//                            fill="currentColor" viewBox="0 0 256 256">
//                         <path
//                             d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm96,112h-8V144a8,8,0,0,0-16,0v24H195.1l20.49-61.47a8,8,0,0,0-15.18-5.06l-24,72A8,8,0,0,0,184,184h40v24a8,8,0,0,0,16,0V184h8a8,8,0,0,0,0-16Z"
//                         ></path>
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="flex flex-1 flex-col pt-3 pb-5">
//                     <p className="text-[#111418] text-base font-medium leading-normal">Get ready-to-go,
//                       optimized, and editable outputs in seconds.</p>
//                   </div>
//                 </div>
//                 <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">See
//                   PostPilot in Action</h2>
//                 <div className="p-4 @container">
//                   <div
//                       className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
//                     <div
//                         className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
//                         style={{
//                           backgroundImage:
//                               'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMl14ZhjQCNC6wjRmbVetS4gESFXg65mWuvriywhJ0B2B0ghkbE-uQ_slXahXOKqqWKk1Sem-Z7lek6epHhJqmG8XT74d7Dj-YjR7QMlphL7BNOyDUsXjlUSamR4zufFztXfNRkfTfm-NCflf4iCAZmX6gL1wJzU5cMRjET5r2-jFkfarli0C520rz4N0agX5VAXu4WanJXvW-OfAfXdJfBeJnkuOsBKA7G8wYZlcebxAaM6BBx_UEYDJhNMAjIj0Wm3dDU2gJ3g")'
//                         }}
//                     ></div>
//                     <div
//                         className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
//                       <p className="text-[#60758a] text-sm font-normal leading-normal">Twitter Thread</p>
//                       <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">AI-Generated
//                         Twitter Thread</p>
//                       <div className="flex items-end gap-3 justify-between">
//                         <p className="text-[#60758a] text-base font-normal leading-normal">
//                           PostPilot transforms your blog post into a captivating Twitter thread,
//                           optimized for engagement and reach.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-4 @container">
//                   <div
//                       className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
//                     <div
//                         className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
//                         style={{
//                           backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCR0WpwYry8KYg1Jh4xbLyKyNtqE0iLt1gi0WG8oE2EDDr5wZKKwiYb1tqylX8pBAROSA3PEx5xIxmX6ETxKkdlTAtinsou9U6gSFFOYtdJ7wTewGcsRc_hr5QE-lw8WTKvIkXu3pV-EXEUUJ2VTcPjOF1HyXRXR6gO8tc7tOghB3FjTJXDYU40GUUNHqzfL0R4IaW7_E3_hp_Zk1JcLOuztt0Fo4qviRnsytpQ0TAjBYSrM1NhKBtUSgfdcrzVJ_m6mS7-hM2HzQ")'
//                         }}
//                     ></div>
//                     <div
//                         className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
//                       <p className="text-[#60758a] text-sm font-normal leading-normal">LinkedIn Post</p>
//                       <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">AI-Generated
//                         LinkedIn Post</p>
//                       <div className="flex items-end gap-3 justify-between">
//                         <p className="text-[#60758a] text-base font-normal leading-normal">
//                           PostPilot crafts professional LinkedIn posts from your blog content,
//                           tailored for a business audience.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Who
//                   is PostPilot For?</h2>
//                 <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
//                   <div className="flex flex-col gap-3 text-center pb-3">
//                     <div className="px-4">
//                       <div
//                           className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"></div>
//                     </div>
//                     <div>
//                       <p className="text-[#111418] text-base font-medium leading-normal">Bloggers</p>
//                       <p className="text-[#60758a] text-sm font-normal leading-normal">Boost blog
//                         visibility</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col gap-3 text-center pb-3">
//                     <div className="px-4">
//                       <div
//                           className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"></div>
//                     </div>
//                     <div>
//                       <p className="text-[#111418] text-base font-medium leading-normal">Newsletter
//                         Writers</p>
//                       <p className="text-[#60758a] text-sm font-normal leading-normal">Promote newsletters
//                         effectively</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col gap-3 text-center pb-3">
//                     <div className="px-4">
//                       <div
//                           className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"></div>
//                     </div>
//                     <div>
//                       <p className="text-[#111418] text-base font-medium leading-normal">Content
//                         Marketers</p>
//                       <p className="text-[#60758a] text-sm font-normal leading-normal">Maximize content
//                         reach</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col gap-3 text-center pb-3">
//                     <div className="px-4">
//                       <div
//                           className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"></div>
//                     </div>
//                     <div>
//                       <p className="text-[#111418] text-base font-medium leading-normal">SaaS Founders</p>
//                       <p className="text-[#60758a] text-sm font-normal leading-normal">Drive traffic to
//                         your SaaS</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col gap-3 text-center pb-3">
//                     <div className="px-4">
//                       <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
//                            style={{ backgroundImage: 'url("agency")' }}
//                       ></div>
//                     </div>
//                     <div>
//                       <p className="text-[#111418] text-base font-medium leading-normal">Agencies</p>
//                       <p className="text-[#60758a] text-sm font-normal leading-normal">Scale client
//                         content promotion</p>
//                     </div>
//                   </div>
//                 </div>
//                 <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What
//                   Our Users Say</h2>
//                 <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4">
//                   <div className="flex flex-col gap-3 bg-white">
//                     <div className="flex items-center gap-3">
//                       <div
//                           className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"></div>
//                       <div className="flex-1">
//                         <p className="text-[#111418] text-base font-medium leading-normal">Sarah
//                           Chen</p>
//                         <p className="text-[#60758a] text-sm font-normal leading-normal">2 months
//                           ago</p>
//                       </div>
//                     </div>
//                     <div className="flex gap-0.5">
//                       <div className="text-[#111418]" data-icon="Star" data-size="20px"
//                            data-weight="fill">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                              fill="currentColor" viewBox="0 0 256 256">
//                           <path
//                               d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div className="text-[#111418]" data-icon="Star" data-size="20px"
//                            data-weight="fill">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                              fill="currentColor" viewBox="0 0 256 256">
//                           <path
//                               d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div className="text-[#111418]" data-icon="Star" data-size="20px"
//                            data-weight="fill">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                              fill="currentColor" viewBox="0 0 256 256">
//                           <path
//                               d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div className="text-[#111418]" data-icon="Star" data-size="20px"
//                            data-weight="fill">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                              fill="currentColor" viewBox="0 0 256 256">
//                           <path
//                               d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div className="text-[#111418]" data-icon="Star" data-size="20px"
//                            data-weight="fill">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                              fill="currentColor" viewBox="0 0 256 256">
//                           <path
//                               d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
//                           ></path>
//                         </svg>
//                       </div>
//                     </div>
//                     <p className="text-[#111418] text-base font-normal leading-normal">
//                       PostPilot has revolutionized my content strategy. I can now effortlessly promote my
//                       blog posts across all platforms, saving me hours each week. The AI-generated
//                       content is spot-on and requires minimal editing.
//                     </p>
//                     <div className="flex gap-9 text-[#60758a]">
//                       <button className="flex items-center gap-2">
//                         <div className="text-inherit" data-icon="ThumbsUp" data-size="20px"
//                              data-weight="regular">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                                fill="currentColor" viewBox="0 0 256 256">
//                             <path
//                                 d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
//                             ></path>
//                           </svg>
//                         </div>
//                         <p className="text-inherit">12</p>
//                       </button>
//                       <button className="flex items-center gap-2">
//                         <div className="text-inherit" data-icon="ThumbsDown" data-size="20px"
//                              data-weight="regular">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                                fill="currentColor" viewBox="0 0 256 256">
//                             <path
//                                 d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
//                             ></path>
//                           </svg>
//                         </div>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Pricing</h2>
//                 <div
//                     className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4">
//                   <div
//                       className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-[#dbe0e6] bg-white p-6">
//                     <div className="flex flex-col gap-1">
//                       <h1 className="text-[#111418] text-base font-bold leading-tight">Free</h1>
//                       <p className="flex items-baseline gap-1 text-[#111418]">
//                                         <span
//                                             className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">$0</span>
//                         <span className="text-[#111418] text-base font-bold leading-tight">/month</span>
//                       </p>
//                     </div>
//                     <button
//                         className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
//                     >
//                       <span className="truncate">Get Started</span>
//                     </button>
//                     <div className="flex flex-col gap-2">
//                       <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
//                         <div className="text-[#111418]" data-icon="Check" data-size="20px"
//                              data-weight="regular">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                                fill="currentColor" viewBox="0 0 256 256">
//                             <path
//                                 d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
//                           </svg>
//                         </div>
//                         Limited features
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                       className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-[#dbe0e6] bg-white p-6">
//                     <div className="flex flex-col gap-1">
//                       <div className="flex items-center justify-between">
//                         <h1 className="text-[#111418] text-base font-bold leading-tight">Starter</h1>
//                         <p className="text-white text-xs font-medium leading-normal tracking-[0.015em] rounded-lg bg-[#0c7ff2] px-3 py-[3px] text-center">Most
//                           Popular</p>
//                       </div>
//                       <p className="flex items-baseline gap-1 text-[#111418]">
//                                         <span
//                                             className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">$29</span>
//                         <span className="text-[#111418] text-base font-bold leading-tight">/month</span>
//                       </p>
//                     </div>
//                     <button
//                         className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
//                     >
//                       <span className="truncate">Choose Plan</span>
//                     </button>
//                     <div className="flex flex-col gap-2">
//                       <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
//                         <div className="text-[#111418]" data-icon="Check" data-size="20px"
//                              data-weight="regular">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                                fill="currentColor" viewBox="0 0 256 256">
//                             <path
//                                 d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
//                           </svg>
//                         </div>
//                         More features
//                       </div>
//                       <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
//                         <div className="text-[#111418]" data-icon="Check" data-size="20px"
//                              data-weight="regular">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                                fill="currentColor" viewBox="0 0 256 256">
//                             <path
//                                 d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
//                           </svg>
//                         </div>
//                         Unlimited blog post conversions
//                       </div>
//                       <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
//                         <div className="text-[#111418]" data-icon="Check" data-size="20px"
//                              data-weight="regular">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                                fill="currentColor" viewBox="0 0 256 256">
//                             <path
//                                 d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
//                           </svg>
//                         </div>
//                         Access to all platforms
//                       </div>
//                       <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
//                         <div className="text-[#111418]" data-icon="Check" data-size="20px"
//                              data-weight="regular">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                                fill="currentColor" viewBox="0 0 256 256">
//                             <path
//                                 d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
//                           </svg>
//                         </div>
//                         Basic analytics
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                       className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-[#dbe0e6] bg-white p-6">
//                     <div className="flex flex-col gap-1">
//                       <h1 className="text-[#111418] text-base font-bold leading-tight">Pro</h1>
//                       <p className="flex items-baseline gap-1 text-[#111418]">
//                                         <span
//                                             className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">$99</span>
//                         <span className="text-[#111418] text-base font-bold leading-tight">/month</span>
//                       </p>
//                     </div>
//                     <button
//                         className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
//                     >
//                       <span className="truncate">Choose Plan</span>
//                     </button>
//                     <div className="flex flex-col gap-2">
//                       <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
//                         <div className="text-[#111418]" data-icon="Check" data-size="20px"
//                              data-weight="regular">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                                fill="currentColor" viewBox="0 0 256 256">
//                             <path
//                                 d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
//                           </svg>
//                         </div>
//                         Full access
//                       </div>
//                       <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
//                         <div className="text-[#111418]" data-icon="Check" data-size="20px"
//                              data-weight="regular">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                                fill="currentColor" viewBox="0 0 256 256">
//                             <path
//                                 d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
//                           </svg>
//                         </div>
//                         Unlimited blog post conversions
//                       </div>
//                       <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
//                         <div className="text-[#111418]" data-icon="Check" data-size="20px"
//                              data-weight="regular">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                                fill="currentColor" viewBox="0 0 256 256">
//                             <path
//                                 d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
//                           </svg>
//                         </div>
//                         Access to all platforms
//                       </div>
//                       <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
//                         <div className="text-[#111418]" data-icon="Check" data-size="20px"
//                              data-weight="regular">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                                fill="currentColor" viewBox="0 0 256 256">
//                             <path
//                                 d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
//                           </svg>
//                         </div>
//                         Advanced analytics
//                       </div>
//                       <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
//                         <div className="text-[#111418]" data-icon="Check" data-size="20px"
//                              data-weight="regular">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                                fill="currentColor" viewBox="0 0 256 256">
//                             <path
//                                 d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
//                           </svg>
//                         </div>
//                         Priority support
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Frequently
//                   Asked Questions</h2>
//                 <div className="flex flex-col p-4 gap-3">
//                   <details
//                       className="flex flex-col rounded-lg border border-[#dbe0e6] bg-white px-[15px] py-[7px] group"
//                       open="">
//                     <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
//                       <p className="text-[#111418] text-sm font-medium leading-normal">How is PostPilot
//                         different from ChatGPT?</p>
//                       <div className="text-[#111418] group-open:rotate-180" data-icon="CaretDown"
//                            data-size="20px" data-weight="regular">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                              fill="currentColor" viewBox="0 0 256 256">
//                           <path
//                               d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
//                         </svg>
//                       </div>
//                     </summary>
//                     <p className="text-[#60758a] text-sm font-normal leading-normal pb-2">
//                       PostPilot is specifically designed for repurposing blog posts into social media
//                       content. It offers platform-specific formatting, built-in writing styles, and
//                       fully editable outputs, unlike the general-purpose nature of ChatGPT.
//                     </p>
//                   </details>
//                   <details
//                       className="flex flex-col rounded-lg border border-[#dbe0e6] bg-white px-[15px] py-[7px] group">
//                     <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
//                       <p className="text-[#111418] text-sm font-medium leading-normal">What platforms does
//                         PostPilot support?</p>
//                       <div className="text-[#111418] group-open:rotate-180" data-icon="CaretDown"
//                            data-size="20px" data-weight="regular">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                              fill="currentColor" viewBox="0 0 256 256">
//                           <path
//                               d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
//                         </svg>
//                       </div>
//                     </summary>
//                     <p className="text-[#60758a] text-sm font-normal leading-normal pb-2">
//                       PostPilot is specifically designed for repurposing blog posts into social media
//                       content. It offers platform-specific formatting, built-in writing styles, and
//                       fully editable outputs, unlike the general-purpose nature of ChatGPT.
//                     </p>
//                   </details>
//                   <details
//                       className="flex flex-col rounded-lg border border-[#dbe0e6] bg-white px-[15px] py-[7px] group">
//                     <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
//                       <p className="text-[#111418] text-sm font-medium leading-normal">Is there a free
//                         trial?</p>
//                       <div className="text-[#111418] group-open:rotate-180" data-icon="CaretDown"
//                            data-size="20px" data-weight="regular">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                              fill="currentColor" viewBox="0 0 256 256">
//                           <path
//                               d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
//                         </svg>
//                       </div>
//                     </summary>
//                     <p className="text-[#60758a] text-sm font-normal leading-normal pb-2">
//                       PostPilot is specifically designed for repurposing blog posts into social media
//                       content. It offers platform-specific formatting, built-in writing styles, and
//                       fully editable outputs, unlike the general-purpose nature of ChatGPT.
//                     </p>
//                   </details>
//                 </div>
//                 <div className="@container">
//                   <div
//                       className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
//                     <div className="flex flex-col gap-2 text-center">
//                       <h1
//                           className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
//                       >
//                         Ready to Save Hours Every Week?
//                       </h1>
//                     </div>
//                     <div className="flex flex-1 justify-center">
//                       <div className="flex justify-center">
//                         <button
//                             className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
//                         >
//                           <span className="truncate">Start Your Free PostPilot Trial Today</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <footer className="flex justify-center">
//               <div className="flex max-w-[960px] flex-1 flex-col">
//                 <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
//                   <div
//                       className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
//                     <a className="text-[#60758a] text-base font-normal leading-normal min-w-40" href="#">Terms
//                       of Service</a>
//                     <a className="text-[#60758a] text-base font-normal leading-normal min-w-40" href="#">Privacy
//                       Policy</a>
//                   </div>
//                   <div className="flex flex-wrap justify-center gap-4">
//                     <a href="#">
//                       <div className="text-[#60758a]" data-icon="TwitterLogo" data-size="24px"
//                            data-weight="regular">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
//                              fill="currentColor" viewBox="0 0 256 256">
//                           <path
//                               d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
//                           ></path>
//                         </svg>
//                       </div>
//                     </a>
//                     <a href="#">
//                       <div className="text-[#60758a]" data-icon="LinkedinLogo" data-size="24px"
//                            data-weight="regular">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
//                              fill="currentColor" viewBox="0 0 256 256">
//                           <path
//                               d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"
//                           ></path>
//                         </svg>
//                       </div>
//                     </a>
//                   </div>
//                   <p className="text-[#60758a] text-base font-normal leading-normal">© 2024 PostPilot. All
//                     rights reserved.</p>
//                 </footer>
//               </div>
//             </footer>
//           </div>
//         </div>
//       </>
//   );
// };
