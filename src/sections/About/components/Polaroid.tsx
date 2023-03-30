import styles from './Polaroid.module.scss'

type PolaroidProps = {
	className?: string
	displayText: string
	imageSrc: string
	imageAlt: string
}

export type Polaroid = {
	displayText: string
	imageAlt: string
	imageSrc: string
}

export const Polaroid = (props: PolaroidProps) => {
	const {className, displayText, imageSrc, imageAlt} = props

	return (
		<div className={className}>
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
