import Image from 'next/image'
import underline1 from '@/public/page-landing/hero/underline-1.png'
import underline2 from '@/public/page-landing/hero/underline-2.png'
import underline3 from '@/public/page-landing/hero/underline-3.png'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<div className='flex w-full flex-col items-center justify-center'>
			<section className='relative flex h-screen w-full items-start justify-center bg-neutral-900'>
				<div className='flex w-full flex-col items-start justify-between !gap-4 px-10 py-40 md:flex-row lg:px-20 xl:px-40'>
					<div className='flex flex-col gap-10 md:basis-1/2'>
						<Badge
							variant='secondary'
							className='text-muted rounded-sm bg-white/50 text-xs font-semibold'>
							Gelir paylaşımı modeli için pazaryerlerinden bağımsız çözüm.
						</Badge>
						<h1 className='text-muted'>
							Sürdürülebilir gelir paylaşımı sağlayan pazarlama altyapısı.
						</h1>
						<p className='text-muted flex flex-col gap-0.5'>
							<span>
								Foundby.me,
								<span className='relative ml-1 font-semibold'>
									markalara
									<Image
										src={underline3}
										alt='underline-3'
										width={200}
										height={10}
										className='absolute -right-5 -bottom-2'
									/>
								</span>{' '}
								kendi siteleri üzerinden kampanya yönetimi ve tam veri sahipliği
								sunarken;
							</span>
							<span>
								<span className='relative font-semibold'>
									içerik üreticilerine
									<Image
										src={underline2}
										alt='underline-2'
										width={170}
										height={10}
										className='absolute -bottom-1 left-0'
									/>
									<Image
										src={underline1}
										alt='underline-1'
										width={150}
										height={10}
										className='absolute -right-5 -bottom-2.5'
									/>
								</span>{' '}
								daha yüksek komisyon oranları ve güçlü markalarla doğrudan iş
								birliği fırsatı sağlar.
							</span>
						</p>
						<Button
							variant='primary'
							className='bg-accent hover:bg-accent-foreground border-accent-foreground z-10 h-[64px] w-[308px] cursor-pointer rounded-lg border-1 text-xl transition-all duration-500'>
							KAYIT OL
						</Button>
					</div>
					<div className='flex basis-1/2 items-center justify-center gap-4'>
						<Image
							src='/images/hero.png'
							alt='hero'
							fill
							className=''
						/>
					</div>
				</div>
			</section>
			<section>section1</section>
			<section>section2</section>
		</div>
	)
}
