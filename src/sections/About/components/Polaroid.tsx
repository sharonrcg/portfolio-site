import styles from '@/styles/Polaroid.module.scss'

type PolaroidProps = {
	imageSrc: string
	imageAlt: string
	displayText: string
}

export const Polaroid = (props: PolaroidProps) => {
	const {displayText, imageSrc, imageAlt} = props

	return (
		<div className={styles.Polaroid}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				className={styles.image}
				src={imageSrc}
				alt={imageAlt}
				width={200}
				height={300}
			/>
			<div className={styles.imageShadow}></div>
			<p className={styles.displayText}>{displayText}</p>
		</div>
	)
}
