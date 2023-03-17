import {useContext, useState} from 'react'
import styles from '@/styles/ContactForm.module.scss'
import {ThemeContext} from '../../../context'
import Snackbar from './Snackbar'

const ContactForm = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')
	const {isDarkMode} = useContext(ThemeContext)

	const defaultErrors = {
		email: false,
		message: false,
	}

	const [errors, setErrors] = useState(defaultErrors)
	const [isSending, setIsSending] = useState(false)
	const [showSnackbar, setShowSnackbar] = useState(false)
	const [isSuccessful, setIsSuccessful] = useState(false)

	const resetForm = () => {
		setName('')
		setEmail('')
		setSubject('')
		setMessage('')
	}

	const handleValidation = () => {
		const tempErrors = defaultErrors

		let isValid = true

		if (email.length <= 0) {
			tempErrors.email = true
			isValid = false
		}

		if (message.length <= 0) {
			tempErrors.message = true
			isValid = false
		}

		if (!isValid) setErrors({...tempErrors})

		return isValid
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault()

		const isValidForm = handleValidation()

		if (isValidForm) {
			setIsSending(true)
			const res = await fetch('/api/sendgrid', {
				body: JSON.stringify({
					email: email,
					name: name,
					subject: subject,
					message: message,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
			})

			const {error} = await res.json()

			if (error) {
				setIsSuccessful(false)
				setIsSending(false)
				return
			}

			setErrors(defaultErrors)
			setIsSuccessful(true)
			setIsSending(false)
			resetForm()
		}

		setShowSnackbar(true)
	}

	return (
		<>
			<div className={`${styles.ContactForm} ${isDarkMode ? styles.dark : ''}`}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<h1 className={styles.formTitle}>Send a message</h1>

					<label className={styles.label} htmlFor='name'>
						Name
					</label>
					<input
						className={styles.input}
						type='text'
						value={name}
						onChange={(e) => {
							setName(e.target.value)
						}}
						name='name'
					/>

					<label className={styles.label} htmlFor='email'>
						E-mail<span>*</span>
					</label>
					<input
						className={styles.input}
						type='email'
						name='email'
						value={email}
						onChange={(e) => {
							setEmail(e.target.value)
						}}
					/>

					{errors?.email && (
						<p className={styles.error}>Please enter a valid email address</p>
					)}

					<label className={styles.label} htmlFor='subject'>
						Subject
					</label>
					<input
						className={styles.input}
						type='text'
						name='subject'
						value={subject}
						onChange={(e) => {
							setSubject(e.target.value)
						}}
					/>

					<label className={styles.label} htmlFor='message'>
						Message<span>*</span>
					</label>
					<textarea
						className={styles.message}
						name='message'
						value={message}
						onChange={(e) => {
							setMessage(e.target.value)
						}}
						rows={5}
					></textarea>
					{errors?.message && <p className={styles.error}>Please enter a message</p>}

					<div className={styles.submitButton}>
						<button disabled={isSending} type='submit'>
							Send
						</button>
					</div>
				</form>
			</div>

			{showSnackbar && (
				<Snackbar
					isSuccessful={isSuccessful}
					message={
						isSuccessful ? 'Message sent!' : 'Something went wrong. Please try again'
					}
					handleClose={() => {
						setShowSnackbar(false)
						setIsSuccessful(false)
					}}
				/>
			)}
		</>
	)
}

export default ContactForm
