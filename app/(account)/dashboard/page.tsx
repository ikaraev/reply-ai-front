'use client';

import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import data from "./data.json"
import React from "react";
import WelcomeBanner from "@/components/new/WelcomeBanner";
import QuickStats from "@/components/new/QuickStats";
import PlanUsage from "@/components/new/PlanUsage";
import ActivityFeed from "@/components/new/ActivityFeed";
import TopReplies from "@/components/new/TopReplies";

export default function Dashboard() {
  return (
        <>
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
        </>

      // <div>
      //     <WelcomeBanner name="Sarah" />
      //     <div className="px-4 py-3 flex justify-end">
      //         <button className="bg-[#2469f3] text-white px-4 py-2 rounded-xl font-bold">Automate Responses</button>
      //     </div>
      //     <h2 className="text-2xl font-bold px-4 pt-5 pb-3">Quick Stats</h2>
      //     <QuickStats />
      //     <PlanUsage usage={60} />
      //     <h2 className="text-2xl font-bold px-4 pt-5 pb-3">Recent Activity Feed</h2>
      //     <ActivityFeed />
      //     <h2 className="text-2xl font-bold px-4 pt-5 pb-3">Top Performing Replies</h2>
      //     <TopReplies />
      //     <div className="px-4 py-3 flex justify-end">
      //         <button className="bg-[#2469f3] text-white px-4 py-2 rounded-xl font-bold">Add Integration</button>
      //     </div>
      // </div>
  )
}
