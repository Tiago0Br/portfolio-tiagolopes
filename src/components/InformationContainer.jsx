import { AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'
import { SiWhatsapp } from 'react-icons/si'
import '../styles/components/informationcontainer.sass'

export default function InformationContainer() {
    return (
        <section id='information'>
            <div className='info-card'>
                <SiWhatsapp id='phone-icon' />
                <div>
                    <h3>Whatsapp</h3>
                    <p>(19) 98970-9529</p>
                </div>
            </div>
            <div className='info-card'>
                <AiOutlineMail id='email-icon' />
                <div>
                    <h3>E-mail</h3>
                    <p>tiagoltavares2002@gmail.com</p>
                </div>
            </div>
            <div className='info-card'>
                <AiFillEnvironment id='pin-icon' />
                <div>
                    <h3>Localização</h3>
                    <p>Americana / SP</p>
                </div>
            </div>
        </section>
    )
}