import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import NavBar from "@/components/NavBar";
import "@/app/globals.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BackBtn from "@/components/adminmanage/backbtn";
import AdminManage from "./admin/manage/page";
import profile from "./[id]/profile/page";
const sourceSans3 = Source_Sans_3({
  // we have 4 options font-light, font-normal, font-semibold, font-bold
  weight: ['400', '600', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Redrice",
  description: "A Restaurant Booking Website Design with Minimal UI and Easy to Use",
};

const MainLayout = "flex min-h-screen flex-col overflow-y-scroll bg-auto bg-top"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BrowserRouter>
      <Routes>
        {/* Your application routes here */}
        <Route path="/admin/mange" element={<AdminManage/>} /> 

      </Routes>
    <html lang="en">
      <body className={`${sourceSans3.className} ${MainLayout}`}>
        <NavBar />
        <BackBtn></BackBtn>
        {children}
      </body>
    </html>
    </BrowserRouter>
  );
}