import "./header.css"
import logo from "../../../assets/r.png"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function Header() {
    return (
        <div className="ctn-header">

            <div className="header-left">
                <div>
                    <img src={logo} height={120} />
                </div>
                <div>
                    <span>Ricardo Alencar</span>
                </div>
            </div>

            <div className="header-right">
                <a href="https://github.com/ricsjs" target="_blank"><FaGithub size={28}/></a>
                <a href="https://www.linkedin.com/in/ricardo-alencar-43907420b/" target="_blank"><FaLinkedin size={28}/></a>
                <a href="https://wa.me/5584999705173" target="_blank"><IoLogoWhatsapp size={28}/></a>
                <a href="mailto:ricfilho0007@gmail.com" target="_blank"><MdEmail size={28}/></a>
            </div>

        </div>
    )
}