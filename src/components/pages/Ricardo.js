import './Ricardo.css'

import { DiHtml5, DiCss3, DiJavascript, DiReact, DiPhp, DiMysql, DiFirebase, DiWordpress, DiBootstrap } from "react-icons/di";

import logo from '../../assets/r.png'
import imgPeople from '../../assets/people.png'

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

            <div className='apresentationContainer'>

                <div className='apresentation'>
                    <h1 className='welcome'>Bem-vindo!</h1>
                    <span className='span'>
                        Me chamo Ricardo, sou desenvolvedor web full-stack com foco em front-end.
                        Estou diariamente interagindo com a comunidade, trocando informações e conhecimentos.
                        Sou apaixonado por tecnologia e busco me aperfeiçoar ainda mais no desenvolvimento web.
                    </span>

                    <div className='techs'>
                        <h5 className='hardskills'>Habilidades:</h5>
                        <DiHtml5 className='iconstechs' />
                        <DiCss3 className='iconstechs' />
                        <DiJavascript className='iconstechs' />
                        <DiReact className='iconstechs' />
                        <DiPhp className='iconstechs' />
                        <DiMysql className='iconstechs' />
                        <DiFirebase className='iconstechs' />
                        <DiWordpress className='iconstechs' />
                        <DiBootstrap className='iconstechs' />
                    </div>

                </div>

                <div className='imgApresentation'>
                    <img src={imgPeople} alt='People' height={450} />
                </div>
            </div>

            <Projects />
            <Experience />
            <Education />
            <Contact />

        </div>


    )
}

export default Ricardo;