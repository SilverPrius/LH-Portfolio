import '../components/footer.css'

import { Container } from 'react-bootstrap'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer() {
    return (
        <div>
            <Container>
                <div className='footer'>
                    <a href='https://github.com/SilverPrius'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href='https://www.linkedin.com/in/hoangcodes/'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </Container>
        </div>
    )
}

