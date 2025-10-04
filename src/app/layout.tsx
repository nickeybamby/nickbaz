import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicholas Obazei - Technical Project Manager & Frontend Developer",
  description: "Experienced technical project manager and frontend developer specializing in React, Next.js, and Agile methodologies. Available for new projects and consulting opportunities.",
  icons: {
    icon: "/favicon.ico", 
  },
  keywords: [
    "Nicholas Obazei",
    "Technical Project Manager",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Agile Project Management",
    "Scrum Master",
    "Web Development",
    "Project Management",
    "Frontend Development",
    "TypeScript",
    "JavaScript"
  ],
  authors: [{ name: "Nicholas Obazei" }],
  creator: "Nicholas Obazei",
  publisher: "Nicholas Obazei",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nickobaz.ng",
    title: "Nicholas Obazei - Technical Project Manager & Frontend Developer",
    description: "Experienced technical project manager and frontend developer specializing in React, Next.js, and Agile methodologies.",
    siteName: "Nicholas Obazei Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicholas Obazei - Technical Project Manager & Frontend Developer",
    description: "Experienced technical project manager and frontend developer specializing in React, Next.js, and Agile methodologies.",
    creator: "@nickeybamby",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code if you have one
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
