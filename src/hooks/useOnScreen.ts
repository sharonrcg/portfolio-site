import {useState, useEffect, RefObject} from 'react'

export const useOnScreen = (ref: RefObject<HTMLElement>) => {
	const [isOnScreen, setOnScreen] = useState(false)

	const observer =
		typeof window !== 'undefined'
			? new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), {
					threshold: [0.25, 0.5, 0.75],
			  })
			: {observe: () => {}, disconnect: () => {}}

	useEffect(() => {
		if (ref.current) observer.observe(ref.current)
		return () => {
			observer.disconnect()
		}
	})

	return isOnScreen
}
