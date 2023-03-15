import React, {useContext, useEffect} from 'react'
import {NavContext} from '../context/NavContext'

const NavLink = ({
	navLinkId,
	scrollToId,
}: {
	navLinkId: string
	scrollToId: string
}) => {
	const {activeNavLinkId} = useContext(NavContext)

	const handleClick = () => {
		document.getElementById(scrollToId)?.scrollIntoView({behavior: 'smooth'})
	}

	return (
		<span
			id={navLinkId}
			className={activeNavLinkId === navLinkId ? 'activeClass' : ''}
			onClick={handleClick}
		>
			{navLinkId}
		</span>
	)
}

export default NavLink
