import React, {useContext} from 'react'
import styles from './CollapsibleSection.module.scss'
import {ThemeContext} from '@/context'

interface CollapsibleSectionProps {
	children: React.ReactNode
	index: number
	open: boolean
	title: string
	toggle: (arg: number) => void
}

export const CollapsibleSection = (props: CollapsibleSectionProps) => {
	const {children, open, index, title, toggle} = props
	const {isDarkMode} = useContext(ThemeContext)

	return (
		<div
			className={`${styles.item} ${open ? styles.open : ''} ${isDarkMode ? styles.dark : ''}`}
		>
			<div className={styles.head} onClick={() => toggle(index)}>
				<span className={styles.headTitle}>{title}</span>
				<svg
					className={styles.chevron}
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2.2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path d='M6 9l6 6 6-6' />
				</svg>
			</div>
			<div className={styles.body} style={{maxHeight: open ? '800px' : '0'}}>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	)
}
