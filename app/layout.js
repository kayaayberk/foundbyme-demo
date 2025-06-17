import { Outfit } from 'next/font/google'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import './globals.css'

const outfit = Outfit({
	variable: '--font-outfit',
	subsets: ['latin'],
	weight: ['100', '200', '400', '600', '700', '900'],
})

export const metadata = {
	title: 'Foundby.me',
	description: 'Sürdürülebilir gelir paylaşımı sağlayan pazarlama altyapısı.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${outfit.variable} antialiased`}>
				<main className='flex h-screen w-full flex-col items-center'>
					<Navigation />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	)
}
