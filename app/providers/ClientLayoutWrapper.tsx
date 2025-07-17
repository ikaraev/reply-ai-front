'use client';

import { SessionProvider } from './SessionProvider';

export default function ClientLayoutWrapper({ user, children }: { user: any, children: React.ReactNode }) {
    return (
        <SessionProvider user={user}>
            {children}
        </SessionProvider>
    );
}
