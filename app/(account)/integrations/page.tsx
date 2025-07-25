'use client';

import {columns, Integration} from "./columns"
import { DataTable } from "./data-table"
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Integrations() {
    const [data, setData] = useState<[] | null>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/integrations', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });

            if (!res.ok) throw new Error('Failed to create integration');

            const data = await res.json();

            setData(data.data);
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto py-10">
            <div className="flex flex-wrap justify-between gap-3">
                <p className="text-[#121416] tracking-light text-[32px] font-bold leading-tight min-w-72">Integrations</p>
                <Link href="/integrations/new"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f1f2f4] text-[#121416] text-sm font-medium leading-normal">
                    <span className="truncate">Add New Integration</span>
                </Link>
            </div>

            <div className="py-3">
                <label className="flex flex-col min-w-40 h-12 w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                        <div
                            className="text-[#6a7181] flex border-none bg-[#f1f2f4] items-center justify-center pl-4 rounded-l-xl border-r-0"
                            data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                 viewBox="0 0 256 256">
                                <path
                                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                            </svg>
                        </div>
                        <input placeholder="Search integrations"
                               className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121416] focus:outline-0 focus:ring-0 border-none bg-[#f1f2f4] focus:border-none h-full placeholder:text-[#6a7181] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                               />
                    </div>
                </label>
            </div>
            <DataTable columns={columns} data={data}/>
        </div>
    )
}
