import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className="dark"
        >
            <body
                className={cn(
                    GeistSans.variable,
                    GeistMono.variable,
                    "min-h-screen bg-background font-sans antialiased",
                )}
            >
                {children}
                <TailwindIndicator />
            </body>
        </html>
    );
}

export function TailwindIndicator() {
    if (process.env.NODE_ENV === "production") return null;

    return (
        <div className="fixed bottom-1 left-1 z-[9999] m-gr-xxs grid size-6 place-items-center rounded-gr-xs bg-foreground font-mono text-sm font-bold text-background">
            <div className="block sm:hidden">xs</div>
            <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
                sm
            </div>
            <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
            <div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
            <div className="hidden xl:block 2xl:hidden">xl</div>
            <div className="hidden 2xl:block">2xl</div>
        </div>
    );
}
