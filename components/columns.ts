// components/columns.ts
import { ColumnDef } from "@tanstack/react-table"
import { User } from "@/data/users"
import { Badge } from "@/components/ui/badge"
export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
]
