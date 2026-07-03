import type { Metadata, Viewport } from 'next';
import { Hanken_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';

import SmoothScroll from '@/components/smooth-scroll';
import LoadingScreen from '@/components/loading-screen';
import CursorGlow from '@/components/animated/cursor-glow';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-jakarta',
    display: 'swap',
});

const hanken = Hanken_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-hanken',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://israt.dev'),
    title: {
        default: 'Israt Jahan — Frontend Developer & UI Engineer',
        template: '%s · Israt Jahan',
    },
    description:
        'Frontend developer building delightful, performant web experiences with React, Next.js, TypeScript, and modern animation tools.',
    keywords: [
        'Frontend Developer',
        'Next.js',
        'React',
        'TypeScript',
        'Portfolio',
        'UI Engineer',
        'Framer Motion',
        'GSAP',
    ],
    authors: [{ name: 'Israt Jahan' }],
    creator: 'Israt Jahan',
    openGraph: {
        type: 'website',
        title: 'Israt Jahan — Frontend Developer & UI Engineer',
        description:
            'Frontend developer building delightful, performant web experiences with React, Next.js, TypeScript, and modern animation tools.',
        siteName: 'Israt Jahan',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Israt Jahan — Frontend Developer & UI Engineer',
        description:
            'Frontend developer building delightful, performant web experiences with React, Next.js, TypeScript, and modern animation tools.',
        creator: '@isratsamanta21',
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = {
    themeColor: '#0f0a19',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${jakarta.variable} ${hanken.variable}`}>
            <body className="font-body bg-surface text-on-surface antialiased">
                <LoadingScreen />
                <CursorGlow />
                <SmoothScroll>
                    <div className="noise-overlay" aria-hidden />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
