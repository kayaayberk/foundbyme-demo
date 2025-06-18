import { useEffect, useState } from 'react'
import { SCALING_CONFIG } from '@/constants'

export const useResponsiveScale = () => {
	const [scale, setScale] = useState(1)
	const [scaleSection2, setScaleSection2] = useState(1)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const calculateScale = config => {
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
