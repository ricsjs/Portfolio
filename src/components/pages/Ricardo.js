import './Ricardo.css'

import logo from '../../assets/r.png'

import NavBar from '../layout/NavBar';

function Ricardo(){
    return(
        <div className="bodyContainer">
            <NavBar src={logo} alt='logo'/>
            <div className='linhaVertical'></div>
            <h1 className='welcome'>Bem-vindo.</h1>
            <h4 className='span'>
                Sou desenvolvedor web Full-Stack, com foco atual em Front-End<br/>
                utilizando a biblioteca ReactJS. Diariamente interagindo com a comunidade,<br/>
                trocando conhecimento sobre o mercado e suas tecnologias, trabalhando em equipe<br/>
                e utilizando metodologias ágeis para criar e manter aplicações web.
            </h4>
        </div>
    )
}

export default Ricardo;