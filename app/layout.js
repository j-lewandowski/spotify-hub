import "./globals.css";
import { Montserrat } from "next/font/google";

import { Header } from "@/components/Header";
import SessionProvider from "../components/SessionProvider";
import { getServerSession } from "next-auth";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify stats",
  description: "Stats for spotify",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${font.className} relative flex flex-col`}>
        <SessionProvider session={session}>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
