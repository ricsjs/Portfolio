import { Link } from 'react-router-dom';
import './Contact.css'

function Contact(){
    return(
        <div className="containerContact">
            <h1 className='contactTitle'>Contato</h1>
            <span className='spanContact'>
                Que bom que chegou até aqui!
                Se você tem alguma pergunta ou deseja entrar em contato comigo <br/>para discutir um projeto ou oportunidade de colaboração, por favor, clique no botão abaixo e <br/>eu responderei você o mais rápido possível.
            </span>
            <Link className='linkViewProject' to='https://wa.me/5584999705173' target='_blank'>Entrar em Contato</Link>
        </div>
    )
}

export default Contact;