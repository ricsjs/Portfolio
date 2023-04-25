import './NavBar.css'

import { Link } from 'react-router-dom'

import { SiGmail, SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

function NavBar({src, alt}){
    return(
        <div className="container">
            <div className="divLeft">
                <Link to='/'><img className='imgLogo' src={src} alt={alt}/></Link>
            </div>
            <div className="divRight">
                <Link to='mailto:ricfilho0007@gmail.com'><SiGmail className='icons'/></Link>
                <Link to='https://github.com/ricsjs' target='_blank'><SiGithub className='icons'/></Link>
                <Link to='https://www.linkedin.com/in/ricardo-alencar-43907420b/' target='_blank'><SiLinkedin className='icons'/></Link>
                <Link to='https://wa.me/5584999705173' target='_blank'><SiWhatsapp className='icons'/></Link>
            </div>
        </div>
    )
}

export default NavBar;