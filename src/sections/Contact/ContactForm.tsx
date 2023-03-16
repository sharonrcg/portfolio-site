import {useContext, useState} from 'react'
import styles from '../../styles/ContactForm.module.scss'
import {ThemeContext} from '../../context'

const ContactForm = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div className={`${styles.ContactForm} ${isDarkMode ? styles.dark : ''}`}>
			<form className={styles.form} onSubmit={() => {}}>
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

				<div className={styles.submitButton}>
					<button type='submit'>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default ContactForm
