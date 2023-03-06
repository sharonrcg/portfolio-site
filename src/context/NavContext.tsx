import React, {useState} from 'react'

export const NavContext = React.createContext<{
	activeNavLinkId: string
	setActiveNavLinkId: React.Dispatch<React.SetStateAction<string>>
}>({activeNavLinkId: '', setActiveNavLinkId: () => {}})

const NavProvider = ({children}: {children: React.ReactNode}) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('')

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
	}

	return (
		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
	)
}

export default NavProvider
