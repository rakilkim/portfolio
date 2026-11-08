import type { Metadata } from "next";
import { Cause } from "next/font/google";
import "./globals.css";

const cause = Cause({
  variable: "--font-cause-family",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rakil Kim's portfolio",
  description: "my website, for myself and my projects, and maybe recruiters?",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cause.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
