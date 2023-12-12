import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.scss'
import MainProvider from '@/providers/MainProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		template: '%s | Cinema TV',
		default: 'Watch movies online | Cinema TV',
	},
	description: 'Watch MovieApp movies and Tv shows online!',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<MainProvider>{children}</MainProvider>
			</body>
		</html>
	)
}
