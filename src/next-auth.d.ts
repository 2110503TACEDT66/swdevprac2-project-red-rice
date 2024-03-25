import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            tel: string;
            role: string;
            token: string;
        };
    }
}
