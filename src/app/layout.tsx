import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "WinteryFox",
  description: "Learn Technology Everyday and Everywhere",
  icons: ["/icons/favicon.ico?v=4"],
  apple: ["/icons/apple-touch-icon.png?v=4"],
  shortcut: ["/icons/apple-touch-icon.png"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
          font.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
