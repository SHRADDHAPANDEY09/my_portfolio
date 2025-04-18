import React from 'react';
import './works.css';
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
    return (
        <section id="works">
            <h1 className="worksTitle">My Portfolio</h1>
            <span className="worksDesc">
                I take pride in paying attention to the smallest details and functionality.
            </span>
            <div className="worksImgs">
                <img src={portfolio1} alt="Portfolio 1" className="worksImg" />
                <img src={portfolio2} alt="Portfolio 2" className="worksImg" />
                <img src={portfolio3} alt="Portfolio 3" className="worksImg" />
                <img src={portfolio4} alt="Portfolio 4" className="worksImg" />
                <img src={portfolio5} alt="Portfolio 5" className="worksImg" />
                <img src={portfolio6} alt="Portfolio 6" className="worksImg" />
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
};

export default Works;
