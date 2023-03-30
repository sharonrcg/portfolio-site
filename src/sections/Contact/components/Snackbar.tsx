import {ThemeContext} from '@/context'
import styles from './Snackbar.module.scss'
import {useContext} from 'react'

type SnackbarProps = {
	isSuccessful: boolean
	message: string
	handleClose: () => void
}

const Snackbar = (props: SnackbarProps) => {
	const {isSuccessful, message, handleClose} = props
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div
			className={`${styles.Snackbar} ${
				isSuccessful ? styles.success : styles.error
			} ${isDarkMode ? styles.dark : ''}`}
		>
			<button
				className={`${styles.closeButton} ${
					isSuccessful ? styles.success : styles.error
				}`}
				onClick={handleClose}
			>
				×
			</button>
			<p>{message}</p>
		</div>
	)
}

export default Snackbar
