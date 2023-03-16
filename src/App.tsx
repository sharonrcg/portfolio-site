import {Nav, SectionDots} from './nav'
import {Main} from './sections'
import NavProvider from './context/NavContext'
import ThemeProvider from './context/ThemeContext'

function App() {
	return (
		<ThemeProvider>
			<NavProvider>
				<Nav />
				<SectionDots />
				<Main />
			</NavProvider>
		</ThemeProvider>
	)
}

export default App
