import {Polaroid} from './Polaroid'
import styles from '@/styles/PolaroidStack.module.scss'
import {ThemeContext} from '@/context'
import {useContext} from 'react'

type PolaroidStackProps = {
	polaroids: {
		imageSrc: string
		imageAlt: string
		displayText: string
	}[]
}

export const PolaroidStack = (props: PolaroidStackProps) => {
	const {polaroids} = props
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div className={`${styles.PolaroidStack} ${isDarkMode ? styles.dark : ''}`}>
			{polaroids.length > 0 &&
				polaroids.map((polaroid, idx) => (
					<Polaroid
						className={styles.polaroid}
						displayText={polaroid.displayText}
						key={idx}
						imageAlt={polaroid.imageAlt}
						imageSrc={polaroid.imageSrc}
					/>
				))}
		</div>
	)
}
