import '../Home/home.css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


const Home = () => {

  useEffect(() => {
    ScrollReveal().reveal('.my-name', { origin: 'top', distance: '30rem', duration: 2000 });
    ScrollReveal().reveal('.your', { delay: 2000, origin: 'left', distance: '1rem', duration: 2000 });
    ScrollReveal().reveal('.wrapper', { delay: 4000, scale: 0.75, duration: 2000 });
    ScrollReveal().reveal('.home-message', { delay: 8000, origin: 'top', distance: '15rem', duration: 2000 });
    ScrollReveal().reveal('.spiderman', { delay: 9000, origin: 'top', distance: '15rem', duration: 2000, afterReveal: function (domEl) {
        domEl.classList.add('swing');
    }});
  }, []);

  return (
    <div className="home-main">
      <div className="my-name">
        <p className='hi'>Hi, I'm <strong>Long Hoang</strong>.</p>
        </div>
        <p className='your'>Your friendly, neighborhood</p>
      
      <div class="wrapper">
        <div class="rotating-words">
          <span>Software Engineer.</span>
          <span>Web Developer.</span>
          <span>Frontend Developer.</span>
          <span>Fullstack Developer.</span>
          <span>Software Engineer.</span>
        </div>
      </div>
      <div className='save'>
        <p className='home-message'>Let's save the web together.</p>
        <img src="https://i.postimg.cc/5tmzT0tv/15b98f4047091fe00d5c44438e9f9dc6-removebg-preview.png" alt="img-spiderman" class="spiderman" />
      </div>
    </div>
  );
};

export default Home;
