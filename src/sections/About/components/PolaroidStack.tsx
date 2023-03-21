import {Polaroid} from './Polaroid'
import styles from '@/styles/PolaroidStack.module.scss'

type PolaroidStackProps = {
	polaroids: {
		imageSrc: string
		imageAlt: string
		displayText: string
	}[]
}

export const PolaroidStack = (props: PolaroidStackProps) => {
	const {polaroids} = props

	return (
		<div className={styles.PolaroidStack}>
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
