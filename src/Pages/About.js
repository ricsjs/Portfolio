import styles from './About.module.css';

function About(){
    return(
        <div className={styles.divAbout}>
            <div className="container text-left">
                <div className="row">
                    <div>
                        <h1>Sobre Mim</h1>
                        <br></br><br></br>
                        <p>Sou graduando em Sistemas de Informação pela Universidade Federal do Rio Grande do Norte e trabalho como desenvolvedor web fullstack na Agência Interage.</p>
                            
                            <p>Tenho um bom conhecimento em PHP, HTML e CSS, e utilizo frequentemente o framework Bootstrap para desenvolver projetos web. Além disso, estou sempre em busca de atualizações e me mantendo informado sobre as novas tecnologias do mercado.</p>
                            
                            <p>Recentemente, comecei a estudar React, uma das bibliotecas JavaScript mais populares no desenvolvimento de aplicações web modernas. Acredito que essa nova habilidade irá complementar ainda mais o meu conjunto de habilidades, tornando-me mais completo e capaz de enfrentar qualquer desafio que surja no meu trabalho.</p>
                            
                            <p>Ao longo da minha carreira, já tive a oportunidade de desenvolver diversos sites utilizando WordPress, o que me trouxe uma experiência significativa em projetos de CMS (sistemas de gerenciamento de conteúdo). Essa habilidade é essencial no mercado atual, já que muitas empresas utilizam o WordPress para gerenciar seus conteúdos online.</p>
                            
                            <p>Como desenvolvedor fullstack, estou sempre buscando aprimorar minhas habilidades e estar atualizado com as tendências do mercado, para entregar soluções web de qualidade para os meus clientes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;