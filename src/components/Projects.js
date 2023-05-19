import './Projects.css'

import { ImEarth } from "react-icons/im";
import { DiGithubBadge } from "react-icons/di";


import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div className='projects'>
            <h1>Meus Projetos</h1>
            <div className="bodyProjects">

                

                <div className='divProjects'>
                    <div className='content'>
                        <h5 className='h5Title'>
                            TaskManager
                        </h5>
                        <br />
                        <span className='spanDesc'>
                            O TaskManager permite que diferentes usuários consigam se cadastrar e fazer login no
                            sistema, além de adicionar tarefas de forma individualizada.

                        </span>

                        <div className='iconsview'>
                        <Link className='linkViewProject' to='https://github.com/ricsjs/task-manager-with-login' target='_blank'><DiGithubBadge /></Link>
                            <Link className='linkViewProject' to='https://sigmanager.netlify.app/' target='_blank'><ImEarth /></Link>
                        </div>

                    </div>
                </div>

                <div className='divProjects'>
                    <div className='content'>
                        <h5 className='h5Title'>
                            Calling System
                        </h5>
                        <br />
                        <span className='spanDesc'>
                        O Calling System consiste em uma aplicação web completa feita em ReactJS que permite a
                        criação de chamados e o acompanhamento de sua evolução.
                        </span>

                        <div className='iconsview'>
                            <Link className='linkViewProject' to='https://github.com/ricsjs/calling-system' target='_blank'><DiGithubBadge /></Link>
                            <Link className='linkViewProject' to='https://calling-system.netlify.app/' target='_blank'><ImEarth /></Link>
                        </div>

                    </div>
                </div>

                <div className='divProjects'>
                    <div className='content'>
                        <h5 className='h5Title'>
                            Git Repository
                        </h5>
                        <br />
                        <span className='spanDesc'>
                            O Git Repository é uma aplicação web que consome a API do GitHub e permite a adicionar
                            projetos existentes no github à sua lista, excluir e visualizar detalhes.

                        </span>

                        <div className='iconsview'>
                            <Link className='linkViewProject' to='https://github.com/ricsjs/repository-project' target='_blank'><DiGithubBadge /></Link>
                            <Link className='linkViewProject' to='https://gitrepository.netlify.app' target='_blank'><ImEarth /></Link>
                        </div>

                    </div>
                </div>

            </div>
            <h5 className='h5Title linkViewAllProjecth5'><Link className='linkViewAllProject' to='https://github.com/ricsjs?tab=repositories' target='_blank'>Ver mais projetos</Link></h5>
        </div>
    )
}

export default Projects;