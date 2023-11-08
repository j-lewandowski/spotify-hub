import "./globals.css";
import { Montserrat } from "next/font/google";

import { Header } from "@/components/Header";
import SessionProvider from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import { DataContextProvider } from "@/context/DataContext";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Hub",
  description: "Stats for spotify",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${font.className} relative flex flex-col`}>
        <SessionProvider session={session}>
          <DataContextProvider>
            <Header />
            {children}
          </DataContextProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
