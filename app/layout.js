import { Outfit } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'
import { ChevronRight, Instagram } from 'lucide-react'
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
				<main className='flex h-screen w-full flex-col items-center'>
					<header className='w-full bg-neutral-900'>
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
					{children}
					<footer className='flex flex-col items-center justify-between bg-neutral-900 w-full text-muted/70 font-medium md:text-sm text-xs gap-10 md:px-40 px-10 md:py-20 py-10 whitespace-nowrap'>
						<div className='flex flex-col items-center justify-between gap-10 w-full'>
							<div className='w-full'>
								<Link href='/' className='w-40'>
									<Image
										src={logo}
										alt='logo'
										width={500}
										height={500}
										quality={100}
										className='h-auto w-auto'
									/>
								</Link>
							</div>
							<div className='flex md:flex-row flex-col md:items-center items-start gap-10 justify-between w-full'>
								<div className='flex flex-col items-start gap-1 w-full'>
									<Link href='#'>Blog</Link>
									<Link href='#'>Sıkça Sorulan Sorular</Link>
									<Link href='#'>Entegrasyon Seçenekleri</Link>
								</div>
								<div className='flex flex-col md:items-end items-start justify-between gap-2 h-full w-min'>
									<Instagram className='h-6 w-6' />
									<span>destek@foundby.me</span>
								</div>
							</div>
						</div>
						<div className='flex md:flex-row flex-col w-full justify-between md:items-center items-start md:gap-10 gap-2'>
							<Link href='#'>Gizlilik Politikası</Link>
							<Link href='#'>Kullanıcı Sözleşmesi</Link>
							<Link href='#'>KVKK Aydınlatma Metni</Link>
						</div>
					</footer>
				</main>
			</body>
		</html>
	)
}
