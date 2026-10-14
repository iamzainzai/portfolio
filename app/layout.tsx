import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Muhammad Zain | Senior Full Stack Web Developer', description: 'Senior Full Stack Web Developer specializing in Laravel, Angular, React, Next.js and custom WordPress development. Based in Karachi, Pakistan.', openGraph: { title: 'Muhammad Zain — Senior Full Stack Web Developer', description: 'Building fast, reliable, scalable digital experiences.' } };
export default function RootLayout({children}:{children: React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
