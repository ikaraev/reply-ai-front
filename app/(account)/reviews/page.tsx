'use client';

import React from "react";

import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        // ...
    ]
}

export default function Page() {
    return (
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <DataTable columns={columns} data={[]} />
        </div>
    )
}
