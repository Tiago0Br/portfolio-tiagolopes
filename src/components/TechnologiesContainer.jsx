import { DiReact, DiJava, DiHtml5, DiCss3 } from 'react-icons/di'
import { SiJavascript, SiCypress } from 'react-icons/si'
import '../styles/components/technologiescontainer.sass'

const technologies = [
    { 
        id: 'cypress', 
        name: 'Cypress', 
        icon: <SiCypress />,
        description: 'Framework para automação de testes E2E na linguagem Javascript/Typescript.' 
    },
    { 
        id: 'react', 
        name: 'React', 
        icon: <DiReact />,
        description: 'Biblioteca muito utilizada para desenvolvimento Web front-end.' 
    },
    { 
        id: 'html', 
        name: 'HTML5', 
        icon: <DiHtml5 />,
        description: 'Linguagem de marcação para a criação de sites e aplicações Web.' 
    },
    { 
        id: 'css', 
        name: 'CSS3', 
        icon: <DiCss3 />,
        description: 'Linguagem de estilização em cascata utilizada para deixar a interface da aplicação mais bonita e moderna.' 
    },
    { 
        id: 'javascript', 
        name: 'Javascript', 
        icon: <SiJavascript />,
        description: 'Uma das linguagens de programação mais usadas no mundo, essencial para o desenvolvimento Web.' 
    },
    { 
        id: 'java', 
        name: 'Java', 
        icon: <DiJava />,
        description: 'Outra linguagem de programação super popular e robusta, muito usada para desenvolvimento Web e Mobile.' 
    }
]

export default function TechnologiesContainer() {
    return (
        <section id='technologies-container'>
            <h2>Tecnologias</h2>

            <div className="technologies-grid">
                { technologies.map(tech => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        { tech.icon }
                        <div className="technology-info">
                            <h3>{ tech.name }</h3>
                            <p>{ tech.description }</p>
                        </div>
                    </div>
                )) }
            </div>
        </section>
    )
}