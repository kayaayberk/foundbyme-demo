import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'
import { Instagram } from 'lucide-react'

function Footer() {
	return (
		<footer className='bg-primary text-muted/70 flex w-full flex-col items-center justify-between gap-10 px-10 py-10 text-xs font-medium whitespace-nowrap md:px-40 md:py-20 md:text-lg'>
			<div className='flex w-full flex-col items-center justify-between gap-10'>
				<div className='w-full'>
					<Link
						href='/'
						className='w-40'>
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
				<div className='flex w-full flex-col items-start justify-between gap-10 md:flex-row md:items-center'>
					<div className='flex w-full flex-col items-start gap-1'>
						<Link href='#'>Blog</Link>
						<Link href='#'>Sıkça Sorulan Sorular</Link>
						<Link href='#'>Entegrasyon Seçenekleri</Link>
					</div>
					<div className='flex h-full w-min flex-col items-start justify-between gap-2 md:items-end'>
						<Instagram className='h-6 w-6' />
						<span>destek@foundby.me</span>
					</div>
				</div>
			</div>
			<div className='flex w-full flex-col items-start justify-center gap-2 md:flex-row md:items-center md:gap-10'>
				<Link href='#'>Gizlilik Politikası</Link>
				<Link href='#'>Kullanıcı Sözleşmesi</Link>
				<Link href='#'>KVKK Aydınlatma Metni</Link>
			</div>
		</footer>
	)
}

export default Footer
