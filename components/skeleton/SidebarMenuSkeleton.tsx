'use client';

import {
    SidebarProvider,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton, SidebarInset,
} from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { IconDotsVertical } from "@tabler/icons-react";
import React from "react";
import {AppSidebar} from "@/components/app-sidebar";
import {SiteHeader} from "@/components/site-header";
import { Skeleton } from "@/components/ui/skeleton"

export function SidebarMenuSkeleton() {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <Skeleton className="rounded-xl" />
                        <Skeleton className="rounded-xl" />
                        <Skeleton className="rounded-xl" />
                    </div>
                    <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
                </div>
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col space-y-3">
                            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>


            {/*<SidebarMenu>*/}
            {/*    <SidebarMenuItem>*/}
            {/*        <DropdownMenu>*/}
            {/*            <DropdownMenuTrigger asChild>*/}
            {/*                <SidebarMenuButton*/}
            {/*                    size="lg"*/}
            {/*                    disabled*/}
            {/*                    className="cursor-default animate-pulse bg-muted text-muted-foreground"*/}
            {/*                >*/}
            {/*                    <Avatar className="h-8 w-8 rounded-lg bg-muted">*/}
            {/*                        <AvatarFallback className="rounded-lg">--</AvatarFallback>*/}
            {/*                    </Avatar>*/}
            {/*                    <div className="grid flex-1 text-left leading-tight gap-0.5 ml-2">*/}
            {/*                        <div className="h-4 w-24 rounded bg-muted" />*/}
            {/*                        <div className="h-3 w-32 rounded bg-muted" />*/}
            {/*                    </div>*/}
            {/*                    <IconDotsVertical className="ml-auto size-4 opacity-30" />*/}
            {/*                </SidebarMenuButton>*/}
            {/*            </DropdownMenuTrigger>*/}
            {/*        </DropdownMenu>*/}
            {/*    </SidebarMenuItem>*/}
            {/*</SidebarMenu>*/}
        </SidebarProvider>
    );
}
