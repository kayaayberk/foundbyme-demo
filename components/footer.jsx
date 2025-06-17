import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'
import { Instagram } from 'lucide-react'

function Footer() {
    return (
        <footer className='flex flex-col items-center justify-between bg-primary w-full text-muted/70 font-medium md:text-sm text-xs gap-10 md:px-40 px-10 md:py-20 py-10 whitespace-nowrap'>
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
    )
}

export default Footer