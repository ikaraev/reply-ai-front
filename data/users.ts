// data/users.ts
export type User = {
    id: string
    name: string
    email: string
    status: "active" | "inactive"
}

export const users: User[] = [
    { id: "1", name: "Alice", email: "alice@example.com", status: "active" },
    { id: "2", name: "Bob", email: "bob@example.com", status: "inactive" },
    { id: "3", name: "Charlie", email: "charlie@example.com", status: "active" },
]
