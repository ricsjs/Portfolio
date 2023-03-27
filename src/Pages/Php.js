import styles from './Techs.module.css';
import { Link } from 'react-router-dom';

import { DiPhp, DiHtml5, DiCss3, DiBootstrap, DiReact, DiWordpress } from 'react-icons/di';

function Php(){
    return(
        <div className={styles.divTechs}>
            <div className={styles.acordeao}>
                <div className="container text-left">
                    <div className="row">
                        <div>
                            <h1>PHP</h1>
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
                            <p>O PHP é uma linguagem de programação de código aberto amplamente utilizada para desenvolver aplicativos web dinâmicos e interativos. É uma linguagem do lado do servidor, o que significa que o código é executado no servidor antes que a página seja carregada no navegador do usuário.</p>
                            <p>Como desenvolver, tenho dois anos de experiência em programação PHP. Já trabalhei desenvolvendo diversos projetos, desde sistemas de alta perfomance até sistemas simples com apenas CRUD's. Meu conhecimento na linguagem inclui desde as funcionalidades básicas até as estruturas mais avançadas, além de conexão com banco de dados.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Php;