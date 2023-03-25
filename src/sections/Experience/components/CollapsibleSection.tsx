import React from 'react'
import styles from '@/styles/CollapsibleSection.module.scss'

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

	const handleOpenSection = () => {
		toggle(index)
	}

	return (
		<div className={styles.CollapsibleSection}>
			<div>
				<button
					type='button'
					className={styles.collapsibleSummary}
					onClick={handleOpenSection}
				>
					<h4>{title}</h4>
					<span className={styles.arrow}>{!open ? downSymbol : upSymbol}</span>
				</button>
			</div>

			<div>
				<div>
					{open && <div className={styles.collapsibleDetails}>{children}</div>}
				</div>
			</div>
		</div>
	)
}
