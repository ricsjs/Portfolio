import "./apresentation.css"
import ImgApresentation from "../../assets/img.jpg"
import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaDocker, FaWordpress } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { DiJavascript, DiMysql, DiPostgresql } from "react-icons/di";

export default function Apresentation() {
    return(
        <div className="ctn-apresentation">

            <div className="img-apresentation">
                <img src={ImgApresentation}/>
            </div>

            <div className="txt-apresentation">

                <span className="title">Ricardo Alencar</span><br />
                <span className="subtitle">Desenvolvedor Full Stack</span><br /><br />
                <span className="description">Desenvolvedor Full Stack com dois anos de experiência em PHP e MySQL. Sou comprometido
                com a entrega de soluções inovadoras e eficientes, constantemente estou buscando aprimorar minhas habilidades para
                enfrentar desafios cada vez mais complexos. Além disso, possuo proficiência em React e Golang comprovada em projetos.
                </span><br /><br />
                <div className="techs">
                    <div>
                        <span>Tecnologias: </span>
                    </div>
                    <div>
                        <FaHtml5 size={25}/> <FaCss3Alt size={25}/> <DiJavascript size={25}/> <FaReact size={25}/> <FaPhp size={25}/> <FaGolang size={25}/> <FaDocker size={25}/> <DiMysql size={25}/> <DiPostgresql size={25}/> <FaWordpress size={25}/>
                    </div>
                </div>
            </div>

        </div>
    )
}