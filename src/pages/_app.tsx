import '@/styles/index.scss'
import '@/styles/Section.scss'
import '@/nav/Nav.module.scss'
import type {AppProps} from 'next/app'

export default function App({Component, pageProps}: AppProps) {
	return <Component {...pageProps} />
}
