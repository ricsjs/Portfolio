import './Experience.css'; // Importando o arquivo CSS

function Experience() {
    return (
        <div className="experience">
            <h1 className="experience-title">Experiência</h1>

            <div className='experiencies'>
                <div className='experienceTitle'>
                    <ul>
                        <li>Agência Interage - Full Stack Developer</li>
                    </ul>
                </div>

                <div className='experienceDesc'>
                    <span>
                        Desenvolvi vários sites, após a aprovação do design até a entrega final do produto
                        ao cliente e participei de diversos projetos e campanhas. Alguns desses projetos
                        para empresas nacionais com grande nome, como a Brasil Park e a Edge Life
                        Sports. Na confecção de todos essas aplicações trabalhei com: PHP, HTML, CSS,
                        MySQL, JavaScript, WordPress e ReactJS.
                    </span>
                </div>
            </div>
            
        </div>
    )
}

export default Experience;