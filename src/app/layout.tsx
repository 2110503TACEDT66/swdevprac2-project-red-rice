import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import NavBar from "@/components/NavBar";
import "@/app/globals.css"

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans3.className} ${MainLayout}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
