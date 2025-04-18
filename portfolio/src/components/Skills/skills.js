import React from 'react';
import './skills.css';
import UiDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillsTitle">What I Do</span>
            <span className="skillDesc">
                I am a skilled and passionate web designer who is enthusiastic about creating innovative websites with a more user-friendly environment.
            </span>

            <div className="skillsBars">
                <div className='skillBar'>
                    <img src={UiDesign} alt="UI Design" className="skillBarImage" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text, you can write your text here.</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={WebDesign} alt="Web Design" className="skillBarImage" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>Designing beautiful and functional websites.</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={AppDesign} alt="App Design" className="skillBarImage" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>Creating user-friendly and modern mobile app designs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
