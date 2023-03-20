import styles from '@/styles/Polaroid.module.scss'

type PolaroidProps = {
	imageSrc: string
	imageAlt: string
}

export const Polaroid = (props: PolaroidProps) => {
	const {imageSrc, imageAlt} = props

	return (
		<>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				className={styles.image}
				src={imageSrc}
				alt={imageAlt}
				width={200}
				height={300}
			/>
		</>
	)
}
