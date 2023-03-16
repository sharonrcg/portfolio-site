import React, {useContext} from 'react'
import {NavContext} from '../context/NavContext'

const NavLink = ({
	navLinkId,
	scrollToId,
	className,
}: {
	navLinkId: string
	scrollToId: string
	className: string
}) => {
	const {activeNavLinkId} = useContext(NavContext)

	const handleClick = () => {
		document.getElementById(scrollToId)?.scrollIntoView({behavior: 'smooth'})
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
