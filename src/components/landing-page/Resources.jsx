import React from "react";
import './Resources.css';
import '../../fonts.css';

const Resources = () => {
    return(
    <div className="resources">
        <h className="h11">
            <center>Resources to help you kickstart your academic journey</center>
        </h>
        {/* TODO create one card and pass data */}
        <div className="cards"> 
            <div className="comps">
                <h className='h10'>What is the application <br></br> process?</h>
                <p className="p11">
                    Explore the essential steps <br></br>
                    of applying to universities <br></br>
                    abroad, from research to <br></br>
                    admissions, ensuring you're <br></br>
                    ready for your academic <br></br>
                    journey.
                </p>
                <a href="#">
                    <button className="button">Read the article &#10230;</button>
                </a>
            </div>
            <div className="comps">
                <h className='h10'>Managing Finances While <br></br> Studying Abroad?</h>
                <p className="p11">
                    Discover effective strategies <br></br>
                    for budgeting and maximizing <br></br>
                    finnancial resources during <br></br>
                    your study abroad <br></br>
                    experience.
                </p>
                <a href="#">
                    <button className="button">Watch the video &#10230;</button>
                </a>
            </div>
            <div className="comps">
                <h className='h10'>How to find accomodation <br></br> while you are abroad</h>
                <p className="p11">
                    Navigate finding accomodation <br></br>
                    abroad confidently with practical <br></br>
                    advice on researching housing, <br></br>
                    securing leases, and settling in, <br></br>
                    making yourself feel at home.
                </p>
                <a href="#">
                <button className="button">Read the guide &#10230;</button>
                </a>
            </div>
        </div>
    </div>
    );

}

export default Resources;