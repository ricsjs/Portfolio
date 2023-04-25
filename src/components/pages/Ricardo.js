import './Ricardo.css'

import logo from '../../assets/r.png'

import NavBar from '../layout/NavBar';
import Projects from '../Projects';

function Ricardo() {
    return (
        <div className="bodyContainer">
            <NavBar src={logo} alt='logo' />
            <div className='linhaVertical'></div>
            <div className='linhaVerticalRight'></div>
            <h1 className='welcome'>Bem-vindo.</h1>
            <h4 className='span'>
                Sou desenvolvedor web Full-Stack, com foco atual em Front-End
                utilizando a biblioteca ReactJS. Diariamente interagindo com a comunidade,
                trocando conhecimentos sobre o mercado e suas tecnologias, trabalhando em equipe
                e utilizando metodologias ágeis para criar e manter aplicações web.
            </h4>

            <Projects />

        </div>
    )
}

export default Ricardo;