import React, {useContext} from 'react'
import styles from '@/styles/CollapsibleSection.module.scss'
import {ThemeContext} from '@/context'

interface CollapsibleSectionProps {
	children: React.ReactNode
	index: number
	open: boolean
	title: string
	toggle: (arg?: number) => void
}

const upSymbol = '↑'
const downSymbol = '↓'

export const CollapsibleSection = (props: CollapsibleSectionProps) => {
	const {children, open, index, title, toggle} = props
	const {isDarkMode} = useContext(ThemeContext)

	const handleOpenSection = () => {
		toggle(index)
	}

	return (
		<div
			className={`${styles.CollapsibleSection} ${isDarkMode ? styles.dark : ''}`}
		>
			<div>
				<button
					type='button'
					className={styles.collapsibleSummary}
					onClick={handleOpenSection}
				>
					<h4 className={styles.summaryTitle}>{title}</h4>
					<span className={styles.arrow}>{!open ? downSymbol : upSymbol}</span>
				</button>
			</div>

			<div
				className={`${styles.detailsContainer} ${
					open ? styles.detailsContainerOpen : ''
				}`}
			>
				<div>
					<div className={styles.collapsibleDetails}>{children}</div>
				</div>
			</div>
		</div>
	)
}
