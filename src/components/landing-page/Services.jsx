import React from "react";
import './Services.css';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import '../../fonts.css';

const Services = () => {
    return(
        <section className="survey-info">
            <div className="service"> 
                <div className="icon-title">
                    <img src={image1} alt="" className="image"/>
                    <h3>Interactive experience</h3>
                </div>
            <p className="p1">
                Accademium's interactive interface <br></br>
                revolutionizes the application process,<br></br>
                providing a streamlined and engaging<br></br>
                experience that goes beyond what<br></br>
                traditional manual methods can ofer.
            </p>
            </div>
            <div className="service"> 
                <div className="icon-title">
                    <img src={image2} alt="" className="image"/>
                    <h3>Individual treatment</h3>
                </div>
            <p className="p1">
                Accademium's AI-driven platform provides <br></br>
                unmatched personalized assistance, using<br></br>
                advanced algorithms to understand each<br></br>
                user's unique needs, ensuring a tailored<br></br>
                application experience for maximum success.
            </p>
            </div>
            <div className="service"> 
                <div className="icon-title">
                    <img src={image3} alt="" className="image"/>
                    <h3>Expert mentorship</h3>
                </div>
                <p className="p1">
                    Accademium's expert mentorship program <br></br>
                    provides tailored support for users who<br></br>
                    prioritize expert guidance, connecting them<br></br>
                    with industry professionals to navigate the<br></br>
                    application journey with confidence.
                </p>
            </div>
        </section>
    );
}
export default Services;