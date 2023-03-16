import {Nav, SectionDots} from './nav'
import {Main} from './sections'
import {NavProvider} from './context'
import {ThemeProvider} from './context'

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
