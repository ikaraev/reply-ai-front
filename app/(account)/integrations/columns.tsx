"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useRouter } from 'next/navigation';


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Integration = {
    domain: string
    platform: string
    name: string
    status: "pending" | "processing" | "active" | "failed" | "stoped"
    tone: 'friendly' | 'professional' | 'neutral' | 'enthusiastic' | 'sarcastic' | 'apologetic' | 'humorous' | 'urgent' | 'casual',
    // lastSync: string
    // autoResponses: number
}

export const columns: ColumnDef<Integration>[] = [
    {
        accessorKey: "platform",
        header: "Platform",
    },
    {
        accessorKey: "name",
        header: "Store Name",
    },
    {
        accessorKey: "domain",
        header: "Store Name",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({row}) =>{
            const status = row.original.status
            return (
                <Badge variant={'secondary'} asChild>
                    <span>{status}</span>
                </Badge>
            );
        }
    },
    {
        accessorKey: "tone",
        header: "Tone",
        cell: ({row}) =>{
            const tone = row.original.tone
            return (
                <Badge variant={'secondary'} asChild>
                    <span>{tone}</span>
                </Badge>
            );
        }
    },
    // {
    //     accessorKey: "lastSync",
    //     header: "Last Sync",
    // },
    // {
    //     accessorKey: "autoResponses",
    //     header: "Automated Responses",
    // },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const integration = row.original
            const router = useRouter();

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            // onClick={() => navigator.clipboard.writeText(integration.id)}
                            onClick={() => router.push(`/integrations/${integration.id}`)}
                        >
                            View Integration
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    }
]
