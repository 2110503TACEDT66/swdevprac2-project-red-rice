import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { login } from '@/lib/auth';

const authOptions: AuthOptions = {
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
              const res = await login(credentials.email, credentials.password);
              
              if (res.status !== 200) {
                  throw new Error("" + res.status); // Converting status code to string
              }
          
              return res.user || null;
          }
        }),
    ],
    pages: {
        signIn: '/auth/login',
    },
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
            session.user = token as any;
            return session;
        },
    },
};

const handler = NextAuth({
    ...authOptions,
    session: { strategy: 'jwt' },
});

export { handler as GET, handler as POST };
