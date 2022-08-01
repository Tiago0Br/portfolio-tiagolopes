import '../styles/components/maincontent.sass'
import { AboutContainer, TechnologiesContainer } from './index'

export default function MainContent() {
    return (
        <main id='main-content'>
            <AboutContainer />
            <TechnologiesContainer />
        </main>
    )
}