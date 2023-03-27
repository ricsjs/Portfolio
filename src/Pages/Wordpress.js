import styles from './Techs.module.css';
import { Link } from 'react-router-dom';

import { DiPhp, DiHtml5, DiCss3, DiBootstrap, DiReact, DiWordpress } from 'react-icons/di';

function WordPress(){
    return(
        <div className={styles.divTechs}>
            <div className={styles.acordeao}>
                <div className="container text-left">
                    <div className="row">
                        <div>
                            <h1>WordPress</h1>
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
                        <p>Nível de conhecimento - intermediário/avançado</p>
                        <p>O WordPress é um sistema de gerenciamento de conteúdo (CMS) de código aberto que permite criar sites e blogs de forma fácil e rápida. Com o WordPress, é possível escolher entre uma variedade de temas e plug-ins para personalizar e estender as funcionalidades do site. Ele é especialmente popular para criação de blogs, mas também pode ser usado para criar sites comerciais, portfólios e lojas online.</p>
                        <p>Com o WordPress, já desenvolvi uma infinidade de sites, incluindo simples landing pages até sites mais complexos, com programação interna e funcionalidades exclusivas do cliente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordPress;