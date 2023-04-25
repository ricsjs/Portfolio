import './Education.css'

function Education(){
    return(
        <div className="education">
            <h1 className="education-title">Formação</h1>

            <div className='educations'>
                <div className='educationTitle'>
                    <ul>
                        <li>IFRN - Instituto Federal de Educação, Ciência e Tecnologia do RN</li>
                    </ul>
                </div>

                <div className='educationDesc'>
                    <span>
                        Técnico em Informática | 2017 - 2021
                    </span>
                </div>

                <div className='educationTitle'>
                    <ul>
                        <li>UFRN - Universidade Federal do Rio Grande do Norte</li>
                    </ul>
                </div>

                <div className='educationDesc'>
                    <span>
                    Sistemas de Informação | 2021 - atual
                    </span>
                </div>

            </div>
            
        </div>
    )
}

export default Education;