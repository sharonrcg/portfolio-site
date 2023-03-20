import {Polaroid} from './Polaroid'
import styles from '@/styles/PolaroidStack.module.scss'
import sharon from '../../../../public/images/sharon.jpg'
import kai from '../../../../public/images/kai.jpg'
import sharon_and_juan from '../../../../public/images/sharon_and_juan.jpg'

export const PolaroidStack = () => {
	const polaroids = [
		{
			imageSrc: sharon.src,
			imageAlt: 'A polaroid of me',
		},
		{
			imageSrc: kai.src,
			imageAlt: 'A polaroid of my dog, Kai',
		},
		{
			imageSrc: sharon_and_juan.src,
			imageAlt: 'A polaroid of me and my husband, Juan',
		},
	]

	return (
		<div className={styles.PolaroidStack}>
			{polaroids.length > 0 &&
				polaroids.map((polaroid, idx) => (
					<Polaroid
						key={idx}
						imageSrc={polaroid.imageSrc}
						imageAlt={polaroid.imageAlt}
					/>
				))}
		</div>
	)
}
