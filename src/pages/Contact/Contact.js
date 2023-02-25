import { useRef } from 'react'
import '../Contact/contact.css'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'process.env.REACT_APP_SERVICE_ID', //'SERVICE_ID'
      'process.env.REACT_APP_TEMPLATE_ID', //'TEMPLATE_ID'
      form.current,
      'process.env.REACT_APP_USER_ID') //PUBLIC_KEY'
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className='contact-main'>
      <div className='contact-inner'>
        <div className='contact-title'>Let's Connect 💡</div>
        <section>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text"
              placeholder="Full Name"
              name="sender_name" required />
              <input type="text"
              placeholder="Phone Number"
              name="sender_phone" required />
            <input type="email"
              placeholder="Email"
              name="user_email" required />
            <input type="text"
              placeholder="Subject"
              name="subject" required />
            <textarea name='message'
            placeholder="Message"
              cols='30' rows='10'></textarea>
            <button className='btn' type='submit'>Send</button>
          </form>
        </section>

      </div>
    </div>
  )
}