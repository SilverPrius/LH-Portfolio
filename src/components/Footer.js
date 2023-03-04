import '../components/footer.css'

import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



export default function Footer() {
    return (
        <div>
            <Container>
                <div className='footer'>
                    <a className='footer-icons' href='https://github.com/SilverPrius'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className='footer-icons' href='https://www.linkedin.com/in/hoangcodes/'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </Container>
        </div>
    )
}

