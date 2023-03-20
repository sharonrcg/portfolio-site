import {Polaroid} from './Polaroid'
import styles from '@/styles/PolaroidStack.module.scss'
import sharon from '../../../../public/images/sharon.jpg'
import kai from '../../../../public/images/kai.jpg'
import sharon_and_juan from '../../../../public/images/sharon_and_juan.jpg'

export const PolaroidStack = () => {
	const polaroids = [
		{
			displayText: 'Me',
			imageAlt: 'A polaroid of me',
			imageSrc: sharon.src,
		},
		{
			displayText: 'My pup, Kai',
			imageAlt: 'A polaroid of my dog, Kai',
			imageSrc: kai.src,
		},
		{
			displayText: 'Me and my husband, Juan',
			imageAlt: 'A polaroid of me and my husband, Juan',
			imageSrc: sharon_and_juan.src,
		},
	]

	return (
		<div className={styles.PolaroidStack}>
			{polaroids.length > 0 &&
				polaroids.map((polaroid, idx) => (
					<Polaroid
						key={idx}
						displayText={polaroid.displayText}
						imageAlt={polaroid.imageAlt}
						imageSrc={polaroid.imageSrc}
					/>
				))}
		</div>
	)
}
