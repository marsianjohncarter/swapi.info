import "./globals.css"

import type { Metadata } from "next"
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import Image from "next/image"

import QuickLinks from "@/components/QuickLinks"
import Footer from "./_components/Footer"
import { AllSystemsNormal } from "./_components/all-systems-normal"
import NewNavbar from "./_components/new-navbar"
import { Providers } from "./providers"

const jetBrainsMono = IBM_Plex_Mono({
	subsets: ["latin"],
	display: "swap",
	preload: true,
	style: "normal",
	weight: ["400", "700"],
	variable: "--font-ibm-plex-mono",
})

const mulish = IBM_Plex_Sans({
	subsets: ["latin"],
	display: "swap",
	preload: true,
	style: "normal",
	weight: ["400", "500", "600", "700"],
	variable: "--font-ibm-plex-sans",
})

export const metadata: Metadata = {
	title: {
		default: "SWAPI Reborn - Star Wars APIs & Explorer",
		template: "%s | SWAPI Reborn - Star Wars APIs & Explorer",
	},
	description: `The Star Wars API, or "swapi" (Swah-pee)!. All the Star Wars data you've ever wanted. A simpler alternative to swapi.dev. Access it via a CDN-powered, Wicked-fast, Unrestricted Star Wars data API provider.`,
	metadataBase: new URL("https://swapi.info"),
	alternates: { canonical: "https://swapi.info" },
	keywords: [
		"star wars",
		"star wars api",
		"star wars api explorer",
		"swapi",
		"sw-api",
		"nextjs 13",
		"cloudflare",
		"swapi.dev alternative",
		"swapi.co alternative",
		"alternative",
	],
	openGraph: {
		title: {
			default: "SWAPI Reborn - Star Wars APIs & Explorer",
			template: "%s | SWAPI Reborn - Star Wars APIs & Explorer",
		},
		description: `The Star Wars API, or "swapi" (Swah-pee)!. All the Star Wars data you've ever wanted. A simpler alternative to swapi.dev. Access it via a CDN-powered, Wicked-fast, Unrestricted Star Wars data API provider.`,
		type: "website",
		siteName: "SWAPI.INFO",
		url: "https://swapi.info",
		locale: "en_US",
	},
	twitter: {
		title: {
			default: "SWAPI Reborn - Star Wars APIs & Explorer",
			template: "%s | SWAPI Reborn - Star Wars APIs & Explorer",
		},
		description: `The Star Wars API, or "swapi" (Swah-pee)!. All the Star Wars data you've ever wanted. A simpler alternative to swapi.dev. Access it via a CDN-powered, Wicked-fast, Unrestricted Star Wars data API provider.`,
		card: "summary_large_image",
		creator: "@SivaramPg",
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${jetBrainsMono.variable} ${mulish.variable} font-sans className="bg-[#f5f5f5] text-[#121212] dark:bg-[#121212] dark:text-[#f5f5f5]`}
			>
				<Providers>
					<Image
						priority
						src={"/icons/sprite.svg"}
						width={0}
						height={0}
						alt="Prefetch SVG Sprites"
						className="hidden"
					/>
					<main className="w-full min-h-screen">
						<NewNavbar />
						<main className="w-full min-h-[calc(100vh-64px)] relative">
							{children}
							<QuickLinks />
						</main>
						<Footer />
					</main>
				</Providers>
				<AllSystemsNormal className="fixed bottom-6 right-6" />
			</body>
		</html>
	)
}
