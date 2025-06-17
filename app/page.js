"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

// Image Imports
import underline1 from '@/public/page-landing/hero/underline-1.png'
import underline2 from '@/public/page-landing/hero/underline-2.png'
import underline3 from '@/public/page-landing/hero/underline-3.png'
import button1 from '@/public/page-landing/hero/button-1.png'
import button2 from '@/public/page-landing/hero/button-2.png'
import productCard from '@/public/page-landing/hero/product-card.png'
import statsCard from '@/public/page-landing/hero/stats-card.png'
import semiRounded1 from '@/public/page-landing/hero/semi-rounded-1.png'
import semiRounded2 from '@/public/page-landing/hero/semi-rounded-2.png'
import bgGroup from '@/public/page-landing/section-2/bg-group.png'
import bgMobile from '@/public/page-landing/section-2/mobile-bg.png'
import avatar from '@/public/page-landing/hero/avatar.png'
import table1 from '@/public/page-landing/section-2/table-1.png'
import table2 from '@/public/page-landing/section-2/table-2.png'
import table3 from '@/public/page-landing/section-2/table-3.png'
import cardGoogleAnalytics from '@/public/page-landing/section-2/card-google-analytics.png'
import cardShopify from '@/public/page-landing/section-2/card-shopify.png'
import section3BgImage from '@/public/page-landing/section-3/image-bg.png'

// Configuration constants
const SCALING_CONFIG = {
	hero: {
		referenceWidth: 2200,
		referenceHeight: 1200,
		minScale: 0.35,
		maxScale: 1.0,
		containerSize: { width: 500, height: 570 }
	},
	section2: {
		referenceWidth: 2200,
		referenceHeight: 1200,
		minScale: 0.4,
		maxScale: 1.0,
		containerSize: { width: 1800, height: 600 }
	}
}

const HERO_ELEMENTS_CONFIG = {
	avatar: {
		width: 500,
		height: 500,
		transform: 'translate(-50%, -50%)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	button1: {
		width: 400,
		bottom: -18,
		left: -272
	},
	button2: {
		width: 320,
		bottom: -100,
		left: -152
	},
	productCard: {
		width: 600,
		bottom: -250,
		right: -300
	},
	statsCard: {
		width: 600,
		top: -40,
		left: -300
	},
	semiRounded2: {
		width: 270,
		top: -8,
		right: -180
	},
	semiRounded1: {
		width: 150,
		top: 200,
		right: -250
	}
}

const SECTION2_ELEMENTS_CONFIG = {
	table1: {
		width: 700,
		height: 280,
		left: 0,
		top: '35%',
		zIndex: 5,
		transform: 'translateX(0%) translateY(50%)'
	},
	table2: {
		width: 850,
		height: 230,
		left: '33%',
		top: '15%',
		transform: 'translateX(-40%)',
		zIndex: 4
	},
	table3: {
		width: 800,
		height: 200,
		left: '33%',
		top: '64%',
		transform: 'translateX(-50%) translateY(20%)',
		zIndex: 5
	},
	cardGoogleAnalytics: {
		width: 225,
		height: 100,
		right: '9%',
		top: '29%',
		zIndex: 5
	},
	cardShopify: {
		width: 225,
		height: 100,
		right: '15%',
		top: '50%',
		transform: 'translateX(140%)',
		zIndex: 5
	}
}

// Custom hook for responsive scaling
const useResponsiveScale = () => {
	const [scale, setScale] = useState(1)
	const [scaleSection2, setScaleSection2] = useState(1)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const calculateScale = (config) => {
			const width = window.innerWidth
			const height = window.innerHeight

			const widthScale = width / config.referenceWidth
			const heightScale = height / config.referenceHeight

			let calculatedScale = Math.min(widthScale, heightScale)
			calculatedScale = Math.max(calculatedScale, config.minScale)
			calculatedScale = Math.min(calculatedScale, config.maxScale)

			return Math.round(calculatedScale * 1000) / 1000
		}

		const updateScale = () => {
			const width = window.innerWidth
			setIsMobile(width < 768)
			setScale(calculateScale(SCALING_CONFIG.hero))
			setScaleSection2(calculateScale(SCALING_CONFIG.section2))
		}

		updateScale()
		window.addEventListener('resize', updateScale)
		return () => window.removeEventListener('resize', updateScale)
	}, [])

	return { scale, scaleSection2, isMobile }
}

// Utility function for calculating scaled styles
const getScaledStyles = (element, scale) => {
	const styles = {}

	// Scale dimensions
	if (element.width) styles.width = `${element.width * scale}px`
	if (element.height) styles.height = `${element.height * scale}px`

	// Scale positions
	const scalePosition = (value) => {
		if (typeof value === 'string') return value
		return `${value * scale}px`
	}

	if (element.top !== undefined) styles.top = scalePosition(element.top)
	if (element.bottom !== undefined) styles.bottom = scalePosition(element.bottom)
	if (element.left !== undefined) styles.left = scalePosition(element.left)
	if (element.right !== undefined) styles.right = scalePosition(element.right)

	// Copy other properties
	if (element.transform) styles.transform = element.transform
	if (element.zIndex) styles.zIndex = element.zIndex

	return styles
}

// Reusable animated element component
const AnimatedElement = ({
	src,
	alt,
	elementConfig,
	scale,
	className = 'absolute',
	animation = {},
	style = {}
}) => {
	const scaledStyles = getScaledStyles(elementConfig, scale)
	const imageStyles = {
		width: '100%',
		height: elementConfig.height ? 'auto' : 'auto',
		objectFit: 'contain'
	}

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -100 }}
				transition={{ duration: 1, ease: "easeOut", ...animation }}
				className={className}
				style={{ ...scaledStyles, ...style }}
			>
				<Image
					src={src}
					alt={alt}
					width={elementConfig.width}
					height={elementConfig.height || elementConfig.width}
					quality={100}
					style={imageStyles}
				/>
			</motion.div>
		</AnimatePresence>
	)
}

// Hero section component
const HeroSection = ({ scale }) => {
	const containerStyles = {
		width: `${SCALING_CONFIG.hero.containerSize.width * scale}px`,
		height: `${SCALING_CONFIG.hero.containerSize.height * scale}px`,
		position: 'relative',
		transition: 'all 300ms ease-out',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}

	return (
		<section className='relative flex w-full items-start justify-center bg-neutral-900'>
			<div className='flex w-full flex-col items-start justify-between md:gap-4 gap-20 px-5 md:py-40 py-28 md:flex-row lg:px-20 xl:px-40'>
				<HeroContent />
				<div className='flex w-full md:basis-1/2 basis-full items-center justify-center'>
					<div style={containerStyles}>
						<AnimatedElement
							src={avatar}
							alt='hero'
							elementConfig={HERO_ELEMENTS_CONFIG.avatar}
							scale={scale}
							className='absolute z-[1]'
							animation={{ delay: 0 }}
						/>
						<AnimatedElement
							src={button1}
							alt='hero'
							elementConfig={HERO_ELEMENTS_CONFIG.button1}
							scale={scale}
							className='absolute z-[2]'
							animation={{ delay: 0.25 }}
						/>
						<AnimatedElement
							src={button2}
							alt='hero'
							elementConfig={HERO_ELEMENTS_CONFIG.button2}
							scale={scale}
							className='absolute z-[2]'
							animation={{ delay: 0.5 }}
						/>
						<AnimatedElement
							src={productCard}
							alt='hero'
							elementConfig={HERO_ELEMENTS_CONFIG.productCard}
							scale={scale}
							className='absolute z-[3]'
							animation={{ delay: 0.75 }}
						/>
						<AnimatedElement
							src={statsCard}
							alt='hero'
							elementConfig={HERO_ELEMENTS_CONFIG.statsCard}
							scale={scale}
							className='absolute z-[3]'
							animation={{ delay: 0.5 }}
						/>
						<AnimatedElement
							src={semiRounded2}
							alt='hero'
							elementConfig={HERO_ELEMENTS_CONFIG.semiRounded2}
							scale={scale}
							className='absolute'
							animation={{ delay: 1 }}
						/>
						<AnimatedElement
							src={semiRounded1}
							alt='hero'
							elementConfig={HERO_ELEMENTS_CONFIG.semiRounded1}
							scale={scale}
							className='absolute'
							animation={{ delay: 1.25 }}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

// Hero content component
const HeroContent = () => (
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
			className='bg-accent hover:bg-accent-foreground border-accent-foreground z-10 h-[64px] md:w-[308px] w-full cursor-pointer rounded-lg border-1 text-xl transition-all duration-500'>
			KAYIT OL
		</Button>
	</div>
)

// Section 2 animated elements component
const Section2AnimatedElements = ({ scaleSection2, isMobile }) => {
	const containerStyles = {
		width: `${SCALING_CONFIG.section2.containerSize.width * scaleSection2}px`,
		height: `${SCALING_CONFIG.section2.containerSize.height * scaleSection2}px`,
		position: 'absolute',
		transition: 'all 300ms ease-out',
		bottom: isMobile ? '150px' : '60px',
		left: '50%',
		transform: 'translateX(-50%)',
		display: isMobile ? 'none' : 'flex',
		zIndex: 4
	}

	const AnimatedSection2Element = ({ src, alt, elementKey, delay }) => (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: elementKey === 'table2' ? 100 : 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: elementKey === 'table2' ? 100 : 50 }}
				transition={{ duration: 1, delay, ease: "easeOut" }}
				viewport={{ once: true, amount: 0.3 }}
				className='absolute'
				style={getScaledStyles(SECTION2_ELEMENTS_CONFIG[elementKey], scaleSection2)}
			>
				<Image
					src={src}
					alt={alt}
					width={SECTION2_ELEMENTS_CONFIG[elementKey].width}
					height={SECTION2_ELEMENTS_CONFIG[elementKey].height}
					style={{
						width: '100%',
						height: 'auto',
						objectFit: 'contain'
					}}
				/>
			</motion.div>
		</AnimatePresence>
	)

	return (
		<div style={containerStyles}>
			<AnimatedSection2Element src={table1} alt='table1' elementKey='table1' delay={0.25} />
			<AnimatedSection2Element src={table2} alt='table2' elementKey='table2' delay={0} />
			<AnimatedSection2Element src={table3} alt='table3' elementKey='table3' delay={0.75} />
			<AnimatedSection2Element src={cardGoogleAnalytics} alt='google analytics card' elementKey='cardGoogleAnalytics' delay={1} />
			<AnimatedSection2Element src={cardShopify} alt='shopify card' elementKey='cardShopify' delay={1.25} />
		</div>
	)
}

// Section 2 content component
const Section2Content = () => (
	<div className='z-[40] flex flex-col gap-10 md:basis-1/2 basis-full'>
		<Badge
			variant='secondary'
			className='text-primary rounded-sm bg-purple-100 text-xs font-semibold'>
			Markalar için
		</Badge>
		<h1>Gelir paylaşımı kampanyalarınızı doğrudan kendi siteniz üzerinden kurgulayın.</h1>
		<p className='text-primary/70'>
			Foundby.me mevcut sisteminize kolayca entegre olur; komisyon oranlarını belirlemenize, geniş influencer ağıyla kampanyaları hızlıca başlatmanıza, performansları anlık olarak izlemenize ve ödemeleri tek fatura üzerinden kolayca yönetmenize imkân tanır.
		</p>
		<p className='text-primary/70'>
			Tüm trafik doğrudan sitenize yönlenir. Böylece ziyaretçi ve müşteri verilerinize tam erişim sağlar, yeniden hedefleme kampanyaları oluşturabilirsiniz. Pazaryerlerine ödenen ekstra komisyonlar olmadan, yalnızca kendi belirlediğiniz oranlar üzerinden ödeme yaparsınız.
		</p>
		<Button
			variant='primary'
			size='lg'
			className='text-primary font-semibold p-8 flex items-center gap-4 bg-accent hover:bg-accent-foreground border-accent-foreground w-min z-10 cursor-pointer rounded-lg border-1 text-xl transition-all duration-500'>
			Kayıt Ol
			<ChevronRight className='!w-6 !h-6' />
		</Button>
	</div>
)

// Section 2 background images component
const Section2Background = () => (
	<>
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			exit={{ opacity: 0, y: 50 }}
			transition={{ duration: 1, ease: "easeOut" }}
			viewport={{ once: true, amount: 0.3 }}
			className='z-[1] md:basis-1/2 basis-full h-full min-h-[1000px] hidden md:block'
		>
			<Image src={bgGroup} alt='hero' width={1400} height={500} />
		</motion.div>
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			exit={{ opacity: 0, y: 50 }}
			transition={{ duration: 1, ease: "easeOut" }}
			viewport={{ once: true, amount: 0.3 }}
			className='z-[1] md:basis-1/2 basis-full h-full md:min-h-[1000px] block md:hidden'
		>
			<Image src={bgMobile} alt='hero' width={1400} height={500} />
		</motion.div>
	</>
)

const Section3Content = () => (
	<div className='z-[40] flex flex-col gap-10 md:basis-1/2 basis-full'>
		<Badge
			variant='secondary'
			className='text-primary rounded-sm bg-purple-100 text-xs font-semibold'>
			İçerik üreticileri için
		</Badge>
		<h1>Favori markalarınızla komisyona dayalı iş birlikleri kurun.</h1>
		<p className='text-primary/70'>
			Foundby.me, pazaryerlerine bağlı kalmadan kampanyalara katılmanıza, daha yüksek komisyonlu iş birlikleri yapmanıza  ve performansınızı anlık olarak takip etmenize olanak tanır.
		</p>
		<p className='text-primary/70'>
			Katı kayıt kriterleri olmadan sisteme kolayca dahil olursunuz. Ödemeler düzenli ve şeffaf şekilde yapılır. Markalarla doğrudan çalışarak daha özgür, adil ve sürdürülebilir bir gelir modeliyle kazancınızı artırırsınız.
		</p>
		<Button
			variant='primary'
			size='lg'
			className='text-primary font-semibold p-8 flex items-center gap-4 bg-accent hover:bg-accent-foreground border-accent-foreground w-min z-10 cursor-pointer rounded-lg border-1 text-xl transition-all duration-500'>
			Kayıt Ol
			<ChevronRight className='!w-6 !h-6' />
		</Button>
	</div>
)

const Section3Background = () => (
	<>
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			exit={{ opacity: 0, y: 50 }}
			transition={{ duration: 1, ease: "easeOut" }}
			viewport={{ once: true, amount: 0.3 }}
			className='z-[1] md:basis-1/2 basis-full'
		>
			<Image src={section3BgImage} alt='hero' width={1400} height={500} />
		</motion.div>
	</>
)

// Main page component
export default function Home() {
	const { scale, scaleSection2, isMobile } = useResponsiveScale()

	return (
		<div className='flex w-full flex-col items-center justify-center'>
			<HeroSection scale={scale} />

			<section className='relative w-full bg-[#FFFDF9]'>
				<div className='relative flex w-full flex-col items-start justify-between md:gap-10 gap-10 px-5 md:py-40 md:pb-0 py-28 md:flex-row lg:px-20 xl:pr-10 xl:px-40'>
					<Section2Content />
					<Section2Background />
					<Section2AnimatedElements scaleSection2={scaleSection2} isMobile={isMobile} />
				</div>
			</section>

			<section className='relative w-full bg-purple-100'>
				<div className='relative flex w-full flex-col items-center justify-between md:gap-20 gap-10 px-5 md:py-40 md:pb-0 py-28 md:flex-row lg:px-20 xl:px-40'>
					<Section3Background />
					<Section3Content />
					{/* <Section2AnimatedElements scaleSection2={scaleSection2} isMobile={isMobile} /> */}
				</div>
			</section>
		</div>
	)
}
