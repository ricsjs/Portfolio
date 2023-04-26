import './Ricardo.css'

import { DiHtml5, DiCss3, DiJavascript, DiReact, DiPhp, DiMysql, DiFirebase, DiWordpress, DiBootstrap } from "react-icons/di";

import logo from '../../assets/r.png'

import NavBar from '../layout/NavBar';
import Projects from '../Projects';
import Experience from '../Experience';
import Education from '../Education';
import Contact from '../Contact';

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
            <div className='techs'>
                <h5 className='hardskills'>Habilidades:</h5>
                <DiHtml5 className='iconstechs'/>
                <DiCss3 className='iconstechs'/>
                <DiJavascript className='iconstechs'/>
                <DiReact className='iconstechs' />
                <DiPhp className='iconstechs' />
                <DiMysql className='iconstechs'/>
                <DiFirebase className='iconstechs'/>
                <DiWordpress className='iconstechs'/>
                <DiBootstrap className='iconstechs'/>
            </div>

            <Projects />
            <Experience />
            <Education />
            <Contact />

        </div>
    )
}

export default Ricardo;