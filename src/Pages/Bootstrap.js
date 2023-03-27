import styles from './Techs.module.css';
import { Link } from 'react-router-dom';

import { DiPhp, DiHtml5, DiCss3, DiBootstrap, DiReact, DiWordpress } from 'react-icons/di';

function Bootstrap(){
    return(
        <div className={styles.divTechs}>
            <div className={styles.acordeao}>
                <div className="container text-left">
                    <div className="row">
                        <div>
                            <h1>Bootstrap</h1>
                            <div className={styles.acordeao}></div>

                            
                            <ul>
                                <li>
                                    <a className={styles.btn}>                   
                                        <Link to="/php"><DiPhp></DiPhp></Link>
                                    </a>
                                </li>
                                <li>
                                   <a className={styles.btn}>
                                        <Link to="/html"><DiHtml5></DiHtml5></Link>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a className={styles.btn}>
                                        <Link to="/css"><DiCss3></DiCss3></Link>
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.btn}>
                                        <Link to="/bootstrap"><DiBootstrap></DiBootstrap></Link>
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.btn}>
                                        <Link to="/react"><DiReact></DiReact></Link>
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.btn}>
                                        <Link to="/wordpress"><DiWordpress></DiWordpress></Link>
                                    </a>
                                </li>
                            </ul>           
                        </div>
                        <p>Nível de conhecimento - intermediário/avançado</p>
                        <p>Bootstrap é um framework de código aberto criado pela equipe do Twitter, que consiste em um conjunto de ferramentas de design para criar sites e aplicativos responsivos e mobile-first. Ele inclui uma série de estilos CSS pré-definidos e componentes JavaScript, que permitem criar layouts responsivos, menus de navegação, botões, formulários, alertas e muito mais.</p>
                        <p>Adoro utilizar o bootstrap nas minhas páginas, por ser um framework capaz de agilizar o processo de desenvolvimento, além de ser fácil de editar e deixar as páginas responsivas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bootstrap;