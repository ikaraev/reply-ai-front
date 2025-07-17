'use client';

// import React from "react";
// import { WithAuth } from "@/app/lib/WithAuth";
// import { AppSidebar } from "@/components/app-sidebar"
// import { SessionProvider } from '@/app/providers/SessionProvider';
// import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
// import {SiteHeader} from "@/components/site-header";
// import {SectionCards} from "@/components/section-cards";
// import {ChartAreaInteractive} from "@/components/chart-area-interactive";
// import {DataTable} from "@/components/data-table";
// import data from "@/app/(admin)/dashboard/data.json";

// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//
//     const ProtectedContent = WithAuth(() => (
//         <SidebarProvider
//             style={
//                 {
//                     "--sidebar-width": "calc(var(--spacing) * 72)",
//                     "--header-height": "calc(var(--spacing) * 12)",
//                 } as React.CSSProperties
//             }
//         >
//             <AppSidebar variant="inset" />
//             <SidebarInset>
//                 <SiteHeader />
//                 <div className="flex flex-1 flex-col">
//                     <div className="@container/main flex flex-1 flex-col gap-2">
//                         {children}
//                     </div>
//                 </div>
//             </SidebarInset>
//         </SidebarProvider>
//     ));
//
//     return (
//         <SessionProvider>
//             <ProtectedContent />
//         </SessionProvider>
//     );
// }


import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { WithAuth } from "@/app/lib/WithAuth";
import { Separator } from "@/components/ui/separator"
import { SessionProvider } from '@/app/providers/SessionProvider';
import {SiteHeader} from "@/components/site-header";

import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import Sidebar from "@/components/new/Sidebar";
import Header from "@/components/new/Header";
import WelcomeBanner from "@/components/new/WelcomeBanner";
import QuickStats from "@/components/new/QuickStats";
import PlanUsage from "@/components/new/PlanUsage";
import ActivityFeed from "@/components/new/ActivityFeed";
import TopReplies from "@/components/new/TopReplies";
import React from "react";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
    // const ProtectedContent = WithAuth(() => (
    //     <SidebarProvider>
    //         <AppSidebar/>
    //         <SidebarInset>
    //             <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
    //                 <SidebarTrigger className="-ml-1" />
    //                 <Separator
    //                     orientation="vertical"
    //                     className="mr-2 data-[orientation=vertical]:h-4"
    //                 />
    //                 <Breadcrumb>
    //                     <BreadcrumbList>
    //                         <BreadcrumbItem className="hidden md:block">
    //                             <BreadcrumbLink href="#">
    //                                 Building Your Application
    //                             </BreadcrumbLink>
    //                         </BreadcrumbItem>
    //                         <BreadcrumbSeparator className="hidden md:block" />
    //                         <BreadcrumbItem>
    //                             <BreadcrumbPage>Data Fetching</BreadcrumbPage>
    //                         </BreadcrumbItem>
    //                     </BreadcrumbList>
    //                 </Breadcrumb>
    //             </header>
    //             <div className="flex flex-1 flex-col">
    //                 <div className="@container/main flex flex-1 flex-col gap-2">
    //                     {children}
    //                 </div>
    //
    //             </div>
    //         </SidebarInset>
    //     </SidebarProvider>
    // ));

    const ProtectedContent = WithAuth(() => (
        <div
            className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
        >
            <div className="layout-container flex h-full grow flex-col">
                <div className="gap-1 px-6 flex flex-1 justify-center py-5">
                    <Sidebar/>
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <Header/>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));


    return (
        <SessionProvider>
            <ProtectedContent/>
        </SessionProvider>
    );
}


