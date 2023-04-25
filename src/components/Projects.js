import './Projects.css'

import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div className='projects'>
            <h1>Meus Projetos</h1>
            <div className="bodyProjects">

                <div className='divProjects'>
                    <div className='content'>
                        <h5 className='h5Title'>
                            Sistema de Votação
                        </h5>
                        <br />
                        <span className='spanDesc'>
                            O sistema de votação foi um projeto desenvolvido para a disciplina de projeto de
                            software, no IFRN. Esse sistema possibilita cadastrar chapas e realizar votações.
                        </span>

                        <Link className='linkViewProject' to='https://github.com/ricsjs/SistemaVotacao' target='_blank'>Ver Projeto</Link>


                    </div>
                </div>

                <div className='divProjects'>
                    <div className='content'>
                        <h5 className='h5Title'>
                        PrimeFlix
                        </h5>
                        <br />
                        <span className='spanDesc'>
                        O PrimeFlix é um sistema feito em react js de catálogo de filmes, onde você
                        consegue ver os 10 filmes que estão em catálogo e adicionar filmes à sua lista.

                        </span>

                        <Link className='linkViewProject' to='https://github.com/ricsjs/prime-flix' target='_blank'>Ver Projeto</Link>

                    </div>
                </div>

                <div className='divProjects'>
                    <div className='content'>
                        <h5 className='h5Title'>
                            Gerenciador de Tarefas
                        </h5>
                        <br />
                        <span className='spanDesc'>
                        O Gerenciador de Tarefas foi um pequeno projeto pessoal feito com a biblioteca
                         className='linkViewProject'ReactJS e banco de dados Firebase no início dos meus estudos em React.
                        </span>

                        <Link className='linkViewProject' to='https://github.com/ricsjs/SistemaVotacao' target='_blank'>Ver Projeto</Link>

                    </div>
                </div>

            </div>
            <h5 className='h5Title linkViewAllProjecth5'><Link className='linkViewAllProject' to='https://github.com/ricsjs?tab=repositories' target='_blank'>Ver mais projetos</Link></h5>
        </div>
    )
}

export default Projects;