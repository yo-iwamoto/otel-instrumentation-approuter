import "@/styles/global.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
} satisfies Metadata;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
