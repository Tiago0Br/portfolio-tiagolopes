import SocialNetworks from './SocialNetworks'
import Avatar from '../images/perfil.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

export default function Sidebar() {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Tiago Lopes" />
            <p className="title">Analista de Testes/QA</p>
            <SocialNetworks />
            <InformationContainer />
            {/* <a href="#" className="btn">
                Download do currículo
            </a> */}
        </aside>
    )
}