import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import NavBar from '@/components/NavBar';
import '@/app/globals.css';
import NextAuthProvider from '@/provider/NextAuthProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOption';

const sourceSans3 = Source_Sans_3({
    // we have 4 options font-light, font-normal, font-semibold, font-bold
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Redrice',
    description:
        'A Restaurant Booking Website Design with Minimal UI and Easy to Use',
};

const MainLayout =
    'flex min-h-screen flex-col overflow-y-scroll bg-auto bg-top';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);

    return (
        <html lang="en">
            <body className={`${sourceSans3.className} ${MainLayout}`}>
                <NextAuthProvider session={session}>
                    <NavBar />
                    {children}
                </NextAuthProvider>
            </body>
        </html>
    );
}
