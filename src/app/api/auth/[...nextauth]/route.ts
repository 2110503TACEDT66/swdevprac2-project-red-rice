import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { login } from '@/lib/auth';

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
              if (!credentials) {
                  throw new Error('No credentials provided');
              }
              const user = await login(credentials.email, credentials.password);
              
          
              return user || null;
          }
        }),
    ],
    session: { strategy: 'jwt' },
    callbacks: {
        async jwt({ token, user }: { token: any; user: any }) {
            return { ...token, ...user };
        },
        async session({
            session,
            token,
            user,
        }: {
            session: any;
            token: any;
            user: any;
        }) {
            session.user = token as string;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, handler as PUT, handler as DELETE};
