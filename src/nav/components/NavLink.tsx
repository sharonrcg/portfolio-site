import React, {useContext} from 'react'
import {NavContext} from '@/context/NavContext'

const NavLink = ({
	navLinkId,
	scrollToId,
	className,
	onClick,
}: {
	navLinkId: string
	scrollToId: string
	className: string
	onClick: () => void
}) => {
	const {activeNavLinkId} = useContext(NavContext)

	const handleClick = () => {
		if (document.getElementById(scrollToId)) {
			console.log('scrollToId', scrollToId)
			console.log(
				'document.getElementById(scrollToId)',
				document.getElementById(scrollToId),
			)
			document.getElementById(scrollToId)?.scrollIntoView()
			onClick()
		} else {
			console.log('no scrollToId', scrollToId)
			console.log(
				'no document.getElementById(scrollToId)',
				document.getElementById(scrollToId),
			)
		}
	}

	return (
		<button
			id={navLinkId}
			className={`${activeNavLinkId === navLinkId ? className : ''}`}
			onClick={handleClick}
		>
			{navLinkId}
		</button>
	)
}

export default NavLink
