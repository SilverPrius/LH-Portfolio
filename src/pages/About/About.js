import '../About/about.css'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const About = () => {
    useEffect(() => {
        ScrollReveal().reveal('.about-main', { delay: 500, origin: 'top', distance: '10rem', duration: 1000, easing: 'ease-in-out'});
      }, []);
    return (
        <div className="about-main">
            <div className='about-inner'>
                <div className="about-title">ABOUT ME<hr></hr></div>
                
                <br/><br/>
                <div className='about-text'>
                    <p>Hey there, I am a recent graduate of Per Scholas' Software Engineering bootcamp. I am skilled in HTML, CSS, Javascript, React, MongoDB, and Node. In the near future, I plan on expanding my knowledge and learning Java, Python , Springboot and other languages/frameworks.</p> <br/>
                    <p>I've always had a knack for problem solving and have consistently collaborated well in teams, so naturally pursuing a career in the tech industry seemed like the right fit. In my previous work as a trainer, I was able to present and instruct safety topics to a classroom, but I also strived to deliver fun and engaging exercises, so I understand the importance of providing users with the best experience possible.</p>
                </div>
            </div>
        </div>
    )
}

export default About