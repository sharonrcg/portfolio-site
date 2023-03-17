import styles from '@/styles/Snackbar.module.scss'

type SnackbarProps = {
	isSuccessful: boolean
	message: string
	handleClose: () => void
}

const Snackbar = (props: SnackbarProps) => {
	const {isSuccessful, message, handleClose} = props

	return (
		<div
			className={`${styles.Snackbar} ${
				isSuccessful ? styles.success : styles.error
			}`}
		>
			<p>{message}</p>
			<button onClick={handleClose}>x</button>
		</div>
	)
}

export default Snackbar
