import styles from './Contact.module.css';

function Contact(){
    return(
        <div className={styles.divContact}>
            <div className="container text-left">
                <div className="row">
                    <div>
                        <h1>Contato</h1>
                        <br></br><br></br>
                        <p>Olá! Se você chegou até aqui, é porque quer entrar em contato comigo. Fico feliz em saber disso e estou ansioso para ouvir o que você tem a dizer.
                            <br></br><br></br>
                            Se você tem alguma pergunta sobre meu trabalho ou gostaria de discutir uma possível colaboração, fique à vontade para me enviar uma mensagem. Eu adoro trabalhar em projetos interessantes e estou sempre em busca de novas oportunidades.
                            <br></br><br></br>
                            Para entrar em contato, basta clicar no botão abaixo.
                            <br></br><br></br>
                            Obrigado por visitar meu portfolio e espero ter a chance de trabalhar com você em breve!</p>
                    </div>
                        <ul>
                            <li><a href='https://wa.me/5584999705173' className={styles.btn}>Entre em Contato</a></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact;