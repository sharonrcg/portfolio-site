import {Nav, SectionDots} from './nav'
import {Main} from './sections'
import NavProvider from './context/NavContext'

function App() {
	return (
		<div className='appContainer'>
			<NavProvider>
				<Nav />
				<SectionDots />
				<Main />
			</NavProvider>
		</div>
	)
}

export default App
