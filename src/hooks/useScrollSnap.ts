import {useRef, useEffect} from 'react'
import createScrollSnap from 'scroll-snap'

export const useScrollSnap = () => {
	const containerRef = useRef<HTMLElement>(null)

	useEffect(() => {
		if (!containerRef.current) return

		const element = containerRef.current

		const {unbind} = createScrollSnap(element, {
			duration: 500,
			snapDestinationY: '100%',
			timeout: 50,
		})

		return () => {
			unbind()
		}
	}, [])

	return containerRef
}
