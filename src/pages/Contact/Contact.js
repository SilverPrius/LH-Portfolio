import '../Contact/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='contact-main'>
      <div className='contact-inner'>
        <div className='contact-title'>Contact Me<hr></hr></div>
        <div className='contact-body'>
            <address>
              <p className='contact-info-message'>Let's Stay Connected</p>
              <br />
              
              <p className='contact-name'><strong>Long Hoang</strong></p>
              <br />
              <p><FontAwesomeIcon className="mobile-icon" icon={faMobileScreen} /><strong> Phone: </strong>(510) 219 - 7788</p>
              <br />
              <p><FontAwesomeIcon className="envelope-icon" icon={faEnvelope} /><strong> Email: </strong> <a className='contact-link' href={"mailto:hoangcodes@gmail.com"}>hoangcodes@gmail.com</a></p>
              <br />
              <p className='contact-message'>I look forward to collaborating with you!</p>
        </address>
        <div className='form'>
          <div className='form-message'>Leave Me A Message</div>
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




