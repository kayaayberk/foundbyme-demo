"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import underline1 from '@/public/page-landing/hero/underline-1.png'
import underline2 from '@/public/page-landing/hero/underline-2.png'
import underline3 from '@/public/page-landing/hero/underline-3.png'
import button1 from '@/public/page-landing/hero/button-1.png'
import button2 from '@/public/page-landing/hero/button-2.png'
import productCard from '@/public/page-landing/hero/product-card.png'
import statsCard from '@/public/page-landing/hero/stats-card.png'
import semiRounded1 from '@/public/page-landing/hero/semi-rounded-1.png'
import semiRounded2 from '@/public/page-landing/hero/semi-rounded-2.png'
import avatar from '@/public/page-landing/hero/avatar.png'
import { AnimatePresence, motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Home() {
	const [scale, setScale] = useState(1)

	// Base dimensions and positions (reference values at scale = 1)
	const baseContainerSize = { width: 500, height: 570 }

	const baseElements = {
		avatar: {
			width: 500,
			height: 500,
			transform: 'translate(-50%, -50%)',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},
		button1: {
			width: 360,
			bottom: 88,
			left: -192
		},
		button2: {
			width: 320,
			bottom: 0,
			left: -112
		},
		productCard: {
			width: 550,
			bottom: -128,
			right: -264
		},
		statsCard: {
			width: 550,
			top: -52,
			left: -260
		},
		semiRounded2: {
			width: 220,
			top: -8,
			right: -72
		},
		semiRounded1: {
			width: 100,
			top: 160,
			right: -104
		}
	}

	useEffect(() => {
		const updateScale = () => {
			const width = window.innerWidth
			const height = window.innerHeight

			// Calculate scale based on available space
			const referenceWidth = 2200
			const referenceHeight = 1200
			const minScale = 0.35
			const maxScale = 1.0

			// Scale based on both width and height, using the smaller ratio
			const widthScale = width / referenceWidth
			const heightScale = height / referenceHeight

			let calculatedScale = Math.min(widthScale, heightScale)

			// Apply bounds
			calculatedScale = Math.max(calculatedScale, minScale)
			calculatedScale = Math.min(calculatedScale, maxScale)

			// Round for performance
			setScale(Math.round(calculatedScale * 1000) / 1000)
		}

		updateScale()
		window.addEventListener('resize', updateScale)
		return () => window.removeEventListener('resize', updateScale)
	}, [])

	// Helper function to calculate scaled styles
	const getScaledStyles = (element) => {
		const styles = {}

		// Scale dimensions
		if (element.width) styles.width = `${element.width * scale}px`
		if (element.height) styles.height = `${element.height * scale}px`

		// Scale positions
		if (element.top !== undefined) {
			if (typeof element.top === 'string') {
				styles.top = element.top
			} else {
				styles.top = `${element.top * scale}px`
			}
		}
		if (element.bottom !== undefined) {
			styles.bottom = `${element.bottom * scale}px`
		}
		if (element.left !== undefined) {
			if (typeof element.left === 'string') {
				styles.left = element.left
			} else {
				styles.left = `${element.left * scale}px`
			}
		}
		if (element.right !== undefined) {
			styles.right = `${element.right * scale}px`
		}
		if (element.transform) {
			styles.transform = element.transform
		}

		return styles
	}

	const containerStyles = {
		width: `${baseContainerSize.width * scale}px`,
		height: `${baseContainerSize.height * scale}px`,
		position: 'relative',
		transition: 'all 300ms ease-out',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}

	return (
		<div className='flex w-full flex-col items-center justify-center'>
			<section className='relative flex w-full items-start justify-center bg-neutral-900'>
				<div className='flex w-full flex-col items-start justify-between md:gap-4 gap-20 px-5 md:py-40 py-28 md:flex-row lg:px-20 xl:px-40'>
					{/* HERO LEFT */}
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
					{/* HERO RIGHT */}
					<div className='flex w-full md:basis-1/2 basis-full items-center justify-center'>
						<div style={containerStyles}>
							<AnimatePresence>
								{/* Avatar - Center */}
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -100 }}
									transition={{ duration: 1 }}
									className='absolute z-[1]'
									style={getScaledStyles(baseElements.avatar)}
								>
									<Image
										src={avatar}
										alt='hero'
										width={baseElements.avatar.width}
										height={baseElements.avatar.height}
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'contain'
										}}
									/>
								</motion.div>
							</AnimatePresence>

							{/* Button 1 */}
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -100 }}
									transition={{ duration: 1, delay: 0.25 }}
									className='absolute z-[2]'
									style={getScaledStyles(baseElements.button1)}
								>
									<Image
										src={button1}
										alt='hero'
										width={baseElements.button1.width}
										height={baseElements.button1.width}
										style={{
											width: '100%',
											height: 'auto',
											objectFit: 'contain'
										}}
									/>
								</motion.div>
							</AnimatePresence>

							{/* Button 2 */}
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -100 }}
									transition={{ duration: 1, delay: 0.5 }}
									className='absolute z-[2]'
									style={getScaledStyles(baseElements.button2)}
								>
									<Image
										src={button2}
										alt='hero'
										width={baseElements.button2.width}
										height={baseElements.button2.width}
										quality={100}
										style={{
											width: '100%',
											height: 'auto',
											objectFit: 'contain'
										}}
									/>
								</motion.div>
							</AnimatePresence>

							{/* Product Card */}
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -100 }}
									transition={{ duration: 1, delay: 0.75 }}
									className='absolute z-[3]'
									style={getScaledStyles(baseElements.productCard)}
								>
									<Image
										src={productCard}
										alt='hero'
										width={baseElements.productCard.width}
										height={300}
										quality={100}
										style={{
											width: '100%',
											height: 'auto',
											objectFit: 'contain'
										}}
									/>
								</motion.div>
							</AnimatePresence>

							{/* Stats Card */}
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -100 }}
									transition={{ duration: 1, delay: 0.5 }}
									className='absolute z-[3]'
									style={getScaledStyles(baseElements.statsCard)}
								>
									<Image
										src={statsCard}
										alt='hero'
										width={baseElements.statsCard.width}
										height={300}
										quality={100}
										style={{
											width: '100%',
											height: 'auto',
											objectFit: 'contain'
										}}
									/>
								</motion.div>
							</AnimatePresence>

							{/* Semi Rounded 2 */}
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -100 }}
									transition={{ duration: 1, delay: 1 }}
									className='absolute'
									style={getScaledStyles(baseElements.semiRounded2)}
								>
									<Image
										src={semiRounded2}
										alt='hero'
										width={baseElements.semiRounded2.width}
										height={baseElements.semiRounded2.width}
										style={{
											width: '100%',
											height: 'auto',
											objectFit: 'contain'
										}}
									/>
								</motion.div>
							</AnimatePresence>

							{/* Semi Rounded 1 */}
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -100 }}
									transition={{ duration: 1, delay: 1.25 }}
									className='absolute'
									style={getScaledStyles(baseElements.semiRounded1)}
								>
									<Image
										src={semiRounded1}
										alt='hero'
										width={baseElements.semiRounded1.width}
										height={baseElements.semiRounded1.width}
										style={{
											width: '100%',
											height: 'auto',
											objectFit: 'contain'
										}}
									/>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</section>
			<section>section1</section>
			<section>section2</section>
		</div>
	)
}
