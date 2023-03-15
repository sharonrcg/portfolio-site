import {useRef, useEffect} from 'react'
import createScrollSnap from 'scroll-snap'
const easeInOutCubic = (t: number) =>
	t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

export const useScrollSnap = () => {
	const containerRef = useRef<HTMLElement>(null)

	useEffect(() => {
		if (!containerRef.current) return

		const element = containerRef.current

		const {unbind} = createScrollSnap(element, {
			duration: 300,
			snapDestinationY: '100%',
			easing: easeInOutCubic,
			threshold: 0.1,
		})

		return () => {
			unbind()
		}
	}, [])

	return containerRef
}
