import '../Contact/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Contact = () => {

  useEffect(() => {
    ScrollReveal().reveal('.contact-title', { delay: 500, origin: 'top', distance: '10rem', duration: 2000 });
    ScrollReveal().reveal('.contact-card', { delay: 800, origin: 'left', distance: '10rem', duration: 1000 });
    ScrollReveal().reveal('.form', { delay: 800, origin: 'right', distance: '10rem', duration: 1000 });
  }, []);

  return (
    <div className='contact-main'>
      <div className='contact-inner'>
        <div className='contact-title'>CONTACT ME<hr></hr></div>
        <div className='contact-body'>
          <div className='contact-card'>
            <p className='contact-info-message'><strong>Let's Stay Connected</strong></p>
            <br />

            <p className='contact-name'><strong>Long Hoang</strong></p>
            <br />
            <div className='contact-info'>
              <p><FontAwesomeIcon className="icon" icon={faMobileScreen} /><strong> Phone: </strong>(510) 219 - 7788</p>
              <br />
              <p><FontAwesomeIcon className="icon" icon={faEnvelope} /><strong> Email: </strong> <a className='email-link' href={"mailto:hoangcodes@gmail.com"}>Hoangcodes@gmail.com</a></p>
              <br />
              <div className='resume'><p><FontAwesomeIcon className="icon" icon={faDownload} /><strong> Resume: </strong></p><a className='btn' id='download-btn' href="../assets/Long_Hoang_Resume.pdf" download>Download</a></div>
              <br />
            </div>
            <p className='contact-message'><strong>I look forward to collaborating with you!</strong></p>
          </div>
          <div className='form'>
            <div className='form-message'><strong>Leave Me A Message</strong></div>
            <br />
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <input name="bot-field" />
              </div>

              <div className='form-inputs'>
                <div>
                  <label>First name<br />
                    <input type="text" name="first-name" required />
                  </label>
                </div>
                <div>
                  <label>Last name<br />
                    <input type="text" name="last-name" required />
                  </label>
                </div>
                <div>
                  <label htmlFor="email">Email</label><br />
                  <input id="email" type="email" name="email" required />
                </div>
                <div>
                  <label>Message<br />
                    <textarea name="message" required cols={30} rows={10} ></textarea>
                  </label>
                </div>
              </div>
              <button className='btn' id='contact-button' type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact




