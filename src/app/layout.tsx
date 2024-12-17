import './globals.css'
import { ReactNode } from 'react';
import Header from '@/components/header';


export const metadata = {
    title: "Andtech",
    description: ""
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                {/* Header */}
                <Header />
                <main className="flex-group">
                    {children}
                </main>

            </body>
        </html>
    );
}
