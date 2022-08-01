import { FaLinkedin, FaGithub } from 'react-icons/fa'
import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: 'linkedin', icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tiago-lopes-7ab0b71a4/" },
    { name: 'github', icon: <FaGithub />, link: "https://github.com/Tiago0Br" }
]

export default function SocialNetworks() {
    return (
        <section id='social-networks'>
            { socialNetworks.map(network => (
                <a href={network.link} 
                    className='social-btn' 
                    id={network.name} 
                    key={network.name}
                    target='_blank'
                >
                    {network.icon}
                </a>
            )) }
        </section>
    )
}