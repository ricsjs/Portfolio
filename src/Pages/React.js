import styles from './Techs.module.css';
import { Link } from 'react-router-dom';

import { DiPhp, DiHtml5, DiCss3, DiBootstrap, DiReact, DiWordpress } from 'react-icons/di';

function React(){
    return(
        <div className={styles.divTechs}>
            <div className={styles.acordeao}>
                <div className="container text-left">
                    <div className="row">
                        <div>
                            <h1>React</h1>
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
                        <p>Nível de conhecimento - básico</p>
                        <p>React JS é uma biblioteca de código aberto de JavaScript, utilizada para desenvolver interfaces de usuário (UI) para aplicações web. Criado pelo Facebook, ele permite aos desenvolvedores criar componentes reutilizáveis para a construção de UIs complexas e interativas de forma mais fácil e eficiente.</p>
                        <p>Como desenvolvedor, estou sempre de olho nas novas tendências de mercado e atualmente estou aprendendo React JS. O React é uma biblioteca popular e poderosa, o que torna a ferramenta valiosa para qualquer desenvolvedor. Ao aprender React, estou me atualizando e adquirindo um conhecimento valioso e estou entusiasmado em continuar aprendendo e aplicando esses conhecimentos em projetos futuros.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React;