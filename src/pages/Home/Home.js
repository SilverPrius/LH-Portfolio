import '../Home/home.css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


const Home = () => {

  useEffect(() => {
    ScrollReveal().reveal('.my-name', { origin: 'top', distance: '30rem', duration: 2000});
    ScrollReveal().reveal('.your', { delay: 2000, origin: 'left', distance: '1rem', duration: 2000});
    ScrollReveal().reveal('.wrapper', { delay: 4000, scale: 0.5, duration: 2000});
  }, []);

  return (
    <div className="home-main">
      <div className="my-name">
        <p className='hi'>Hi, I'm <strong>Long Hoang</strong>.</p>
        <p className='your'>Your friendly, neighborhood</p>
        {/* <h1>LONG HOANG</h1> */}
      </div>
      <div class="wrapper">
        <div class="rotating-words">
          <span>Software Engineer.</span>
          <span>Web Developer.</span>
          <span>Frontend Developer.</span>
          <span>Fullstack Developer.</span>
          <span>Software Engineer.</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
