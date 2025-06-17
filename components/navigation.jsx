'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'


function Navigation() {
    const pathname = usePathname()
    const isLoginPage = pathname === '/sign-in'
    const isSignUpPage = pathname === '/sign-up'

    return (
        <header className='w-full bg-primary'>
            <div className='mx-auto flex items-center justify-between md:px-10 px-4 py-4 xl:px-40'>
                <Link href='/'>
                    <Image
                        src={logo}
                        alt='logo'
                        width={500}
                        height={500}
                        quality={100}
                        className='h-auto w-auto'
                    />
                </Link>
                <div className='flex items-center gap-2'>
                    {!isLoginPage && <Button
                        variant='ghost'
                        size='lg'
                        className='text-muted rounded-lg px-5 py-2.5 font-semibold shadow-xs hover:bg-muted/40 hover:text-muted'
                        asChild>
                        <Link href='/sign-in'>Giriş Yap</Link>
                    </Button>}
                    {!isSignUpPage && <Button
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
                    </Button>}
                </div>
            </div>
        </header>
    )
}

export default Navigation