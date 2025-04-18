
import React from 'react';
import './intro.css'; 
import bg from '../../assets/image.png';
import{ Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
const Intro = () => {
    return (
    <div id="intro">
        <section >
            <div className="introContent">
                <span className="hello">Hello,</span><br />
                <span className="introText">I'm <span className="introName">Shraddha Pandey</span> <br /> Web Designer</span>
                <p className="introPara">I am a web designer with a passion for creating beautiful and functional websites..</p>
            <Link><button className="btn"> <img src={btnImg} alt="hire me" className="buttonImg" /> HIRE ME </button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
        </section>
    </div>
    );
}

export default Intro;

