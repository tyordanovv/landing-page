import React from "react";
import './OrientationSurvey.css';
import SurveyPh from '../../images/survey-photo.jpg';
import '../../fonts.css';

const OrientationSurvey = () => {
    return(
        <section className="survey">
            <div>
                <img src = {SurveyPh} className="surv-img"/>
            </div>
            <div className="info">
                <h2>Accelerate your<br></br>academic journey!</h2>
                <p className="info-text-p">
                    Welcome to Accademium - the innovative SaaS solution<br></br>
                    designed to accelerate and simplify the application process.
                </p>
                <a href="/survey">
                    <button className="survey-button">Take your free career orientation survey &#10230;</button>
                </a>
            </div>
        </section>
    );

};

export default OrientationSurvey;