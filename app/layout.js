import { Outfit } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
				<header className='fixed top-0 right-0 left-0 z-50 bg-neutral-900'>
					<div className='mx-auto flex items-center justify-between px-10 py-4 xl:px-40'>
						<Link href='/'>
							<Image
								src={logo}
								alt='logo'
								width={200}
								height={200}
								quality={100}
								className='h-auto w-auto'
							/>
						</Link>
						<div className='flex items-center gap-2'>
							<Button
								variant='ghost'
								size='lg'
								className='text-muted rounded-lg px-5 py-2.5 font-semibold shadow-xs'
								asChild>
								<Link href='/sign-in'>Giriş Yap</Link>
							</Button>
							<Button
								variant='primary'
								size='lg'
								className='text-muted rounded-lg px-5 py-2.5 font-semibold shadow-xs'
								asChild>
								<Link
									href='/sign-up'
									className='bg-muted text-primary hover:bg-secondary/80 flex items-center gap-1 rounded-lg px-5 py-2.5 font-semibold shadow-xs'>
									Kayıt Ol
									<ChevronRight
										className='h-6 w-6'
										strokeWidth={1}
									/>
								</Link>
							</Button>
						</div>
					</div>
				</header>
				<main className='flex h-screen w-full flex-col items-center'>
					{children}
				</main>
			</body>
		</html>
	)
}
