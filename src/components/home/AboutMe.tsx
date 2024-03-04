import Link from 'next/link';

export function AboutMe() {
    return (
        <main>
            <div>
                <h1>Prazer, sou &nbsp;</h1>
                <span>Tiago Lopes</span>
                <div>
                    <h2>
                        Sou um desenvolvedor web back-end apaixonado por programação, games e filmes de super heróis
                    </h2>
                    <Link href='/contatos'>
                        Converse comigo
                    </Link>
                </div>
                <ul>
                    <li style={{ backgroundColor: '#2F74C0', color: '#ffffff' }}>Typescript</li>
                    <li style={{ backgroundColor: '#6BDDFA', color: '#000000' }}>React</li>
                    <li style={{ backgroundColor: '#EFD81D', color: '#000000' }}>Javascript</li>
                    <li style={{ backgroundColor: '#000000', color: '#ffffff' }}>Next.js</li>
                </ul>
            </div>
            <div>
                <img src='https://github.com/Tiago0Br.png' alt='Foto de perfil'/>
            </div>
        </main>
    )
}