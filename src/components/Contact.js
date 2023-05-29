import { Link } from 'react-router-dom';
import './Contact.css'

function Contact() {
    return (
        <div className='containercontact'>


            <div className='contact'>
                <div className='title'>
                    <h1>Contato</h1>
                </div>

                <div className='contactDesc'>
                    <span>
                        Que bom que chegou até aqui!
                        Se você tem alguma pergunta ou deseja entrar em contato comigo para discutir um projeto ou oportunidade de colaboração, por favor, clique no botão abaixo e eu responderei você o mais rápido possível.
                    </span>
                </div>

                <h5 className='linkViewAllProjecth5'>
                    <Link className='linkViewAllProject' to='https://wa.me/5584999705173' target='_blank'>
                        Entrar em Contato
                    </Link>
                </h5>

            </div>
        </div>
    )
}

export default Contact;
