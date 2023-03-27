import styles from './Home.module.css'

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";


function Home({src, alt}){
    return(
        <div className={styles.divHome}>
            <div className="container text-center divHome">
                <div className="row">
                    <div className={styles.col}>
                        <h1>Olá, eu sou Ricardo!</h1>
                        <h4>Sou Desenvolvedor Web e graduando em Sistemas de Informação.</h4>
                        <ul>
                            <a href='https://github.com/ricsjs'><li><BsGithub></BsGithub></li></a>
                            <a href='https://instagram.com/alencaardo'><li><BsInstagram></BsInstagram></li></a>
                            <a href='https://www.linkedin.com/in/ricardo-alencar-43907420b/'><li><BsLinkedin></BsLinkedin></li></a>
                        </ul>
                        <ul>
                            <li><a href='https://wa.me/5584999705173' className={styles.btn}>Entre em Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
