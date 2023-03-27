import styles from './Techs.module.css';
import { Link } from 'react-router-dom';

import { DiPhp, DiHtml5, DiCss3, DiBootstrap, DiReact, DiWordpress } from 'react-icons/di';

function Css(){
    return(
        <div className={styles.divTechs}>
            <div className={styles.acordeao}>
                <div className="container text-left">
                    <div className="row">
                        <div>
                            <h1>CSS</h1>
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
                        <p>CSS (Cascading Style Sheets) é uma linguagem de estilo usada para definir a aparência e o layout de conteúdo em páginas web. O CSS permite que os desenvolvedores criem estilos e formatos para elementos HTML, como fontes, cores, tamanhos, margens, espaçamento, entre outros.</p>
                        <p>Também com três anos de experiência utilizando o CSS.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Css;