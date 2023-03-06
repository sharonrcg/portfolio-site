import React, {useContext, useEffect} from 'react'
import {NavContext} from '../context/NavContext'

const NavLink = ({
	navLinkId,
	scrollToId,
}: {
	navLinkId: string
	scrollToId: string
}) => {
	const {activeNavLinkId, setActiveNavLinkId} = useContext(NavContext)

	const handleClick = () => {
		setActiveNavLinkId(navLinkId)
		document.getElementById(scrollToId)?.scrollIntoView({behavior: 'smooth'})
	}

	useEffect(() => {
		document.getElementById('homeContainer')?.scrollIntoView()
	}, [])

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
