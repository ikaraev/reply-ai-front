'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const SessionContext = createContext({
    user: null,
    setUser: () => {},
    isLoading: true,
});

export function SessionProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchSession() {
            setIsLoading(true);

            try {
                const res = await fetch('/api/auth/me', {
                    credentials: 'include',
                    cache: 'no-store',
                });

                const user = await res.json();

                if (user) {
                    setUser(user);
                } else {
                    setUser(null);
                }
            } catch (err) {
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        }

        fetchSession();
    }, []);

    return (
        <SessionContext.Provider value={{ user, setUser, isLoading }}>
            {children}
        </SessionContext.Provider>
    );
}

export function useSession() {
    return useContext(SessionContext);
}
