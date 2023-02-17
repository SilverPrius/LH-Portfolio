import { useRef } from 'react'
import '../Contact/contact.css'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'process.env.REACT_APP_SERVICE_ID', //'YOUR_SERVICE_ID'
      'process.env.REACT_APP_TEMPLATE_ID', //'YOUR_TEMPLATE_ID'
      form.current,
      'process.env.REACT_APP_USER_ID') //YOUR_PUBLIC_KEY'
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
            <input type="email"
              placeholder="Email"
              name="sender_email" required />
            <input type="text"
              placeholder="Subject"
              name="subject" required />
            <textarea name='message'
              cols='30' rows='10'></textarea>
            <button className='btn' type='submit'>Send</button>
          </form>
        </section>

      </div>
    </div>
  )
}