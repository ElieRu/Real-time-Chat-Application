import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real-time Chat-Application",
  description: "...",
};
import { UserProvider } from "@auth0/nextjs-auth0/client";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
