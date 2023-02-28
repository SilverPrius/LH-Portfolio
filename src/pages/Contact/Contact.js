// import { useRef } from 'react'
// import '../Contact/contact.css'
// import emailjs from '@emailjs/browser';

// export default function Contact() {
//   const form = useRef()

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'process.env.REACT_APP_SERVICE_ID', //'SERVICE_ID'
//       'process.env.REACT_APP_TEMPLATE_ID', //'TEMPLATE_ID'
//       form.current,
//       'process.env.REACT_APP_USER_ID') //PUBLIC_KEY'
//       .then((result) => {
//         console.log(result.text);
//       }, (error) => {
//         console.log(error.text);
//       });
//       e.target.reset()
//   };

//   return (
//     <div className='contact-main'>
//       <div className='contact-inner'>
//         <div className='contact-title'>Let's Connect 💡</div>
//         <section>
//           <form ref={form} onSubmit={sendEmail}>
//             <input type="text"
//               placeholder="Full Name"
//               name="sender_name" required />
//               <input type="text"
//               placeholder="Phone Number"
//               name="sender_phone" required />
//             <input type="email"
//               placeholder="Email"
//               name="user_email" required />
//             <input type="text"
//               placeholder="Subject"
//               name="subject" required />
//             <textarea name='message'
//             placeholder="Message"
//               cols='30' rows='10'></textarea>
//             <button className='btn' type='submit'>Send</button>
//           </form>
//         </section>

//       </div>
//     </div>
//   )
// }

// import { useState } from "react";
// import './contact.css'

// function Contact() {

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
//     const mailToLink = `mailto:hoangcodes@gmail.com?subject=Contact Request&body=${encodeURIComponent(body)}`;
//     window.location.href = mailToLink;
//     setName('');
//     setEmail('');
//     setMessage('');

//     alert(`Your message has been sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

//   }


//   return (
//     <div className='contact-main'>
//       <div className='contact-inner'>
//         <div className='contact-title'>Let's Connect 💡</div>
//         <section>
//           <form onSubmit={sendEmail}>
//             <input
//               type="text"
//               placeholder="Full Name"
//               id="name"
//               name="name"
//               value={name}
//               onChange={e => setName(e.target.value)}
//               required
//             />
//             <input 
//               type="text"
//               placeholder="Phone Number"
//               name="phone" 
//               required 
//               />
//             <input 
//               type="email"
//               placeholder="Email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               required 
//               />
//             <input 
//               type="text"
//               placeholder="Subject"
//               name="subject" 
//               required 
//               />
//             <textarea 
//               name='message'
//               id="message"
//               placeholder="Message"
//               cols='30' rows='10'
//               value={message}
//               onChange={e => setMessage(e.target.value)}
//               required
//               ></textarea>
//             <button className='btn' type='submit'>Send</button>
//           </form>
//         </section>

//       </div>
//     </div>
//   )
// }

// export default Contact;


import '../Contact/contact.css'

const Contact = () => {
  return (
    <div className='contact-main'>
      <div className='contact-inner'>
        <div className='contact-title'>Contact Me<hr></hr></div>
        <div className='contact-body'>
          {/* <div className='contact-info'> */}
            <address>
              <p className='contact-info-message'>Let's Stay Connected</p>
              <br />
              
              <p className='contact-name'><strong>Long Hoang</strong></p>
              <br />
              <p><strong>Phone: </strong>(510) 219 - 7788</p>
              <br />
              <p><strong>Email: </strong> <a className='contact-link' href={"mailto:hoangcodes@gmail.com"}>hoangcodes@gmail.com</a></p>
              <br />
              <p><strong>LinkedIn: </strong> <a className='contact-link' href={"https://www.linkedin.com/in/hoangcodes/"}>linkedin.com/in/hoangcodes</a></p>
              <br />
              <p><strong>GitHub: </strong> <a className='contact-link' href={"https://github.com/SilverPrius"}>github.com/silverprius</a></p>
              <br />
              <p className='contact-message'>I look forward to collaborating with you!</p>
          {/* </div> */}
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




