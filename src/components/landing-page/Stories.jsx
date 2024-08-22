import React from "react";
import './Stories.css';
import '../../fonts.css';

const Stories = () => {
    return(
        <section className="stories">
            <h6>Accademium helped 25,000+ students secure <br></br>
                university acceptance
            </h6>
            <p className='story-text'>
                Accademium has facilitated the successful application and acceptance of <br></br>
                over 25,000 students into universities worldwide, equipping them with the <br></br>
                tools and uidance needed to fulfill their academic goals. 
            </p>
            <a href="#">
                <button className="read-stories">Read their story &#10230;</button>
            </a>
        </section>
    );
}
export default Stories;