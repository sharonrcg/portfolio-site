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
		document.getElementById(scrollToId)?.scrollIntoView({behavior: 'smooth'})
		onClick()
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
