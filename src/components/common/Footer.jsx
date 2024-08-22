import React from "react";
import './Footer.css';
import IGicon from '../../images/insta-icon.png';
import Xicon from '../../images/x-icon.png';
import YTicon from '../../images/yt-icon.png';
import INicon from '../../images/linkedin-icon.png';
import Logo from '../../images/Accademium_Logo_Cropped.png';
import '../../fonts.css';

const Footer = () => {
    return(
        <footer className="foot-container">
            <div className="upper-part">
                <div className="up-part-1">
                    <img src={Logo} className="footer-logo"/>
                    <p className="footer-p">The leading platform for streamlining <br></br>
                    the study abroad journey and <br></br>
                    enabling academic success
                    </p>
                    <div className="soc-med-icons">
                        <a href="#">
                            <img src={INicon}/>
                        </a>
                        <a href="#">
                            <img src={Xicon} />
                        </a> 
                        <a href="#">
                            <img src={IGicon} />
                        </a>
                        <a href="#">
                            <img src={YTicon} />
                        </a>
                    </div>
                </div>
                <div className="resource-container">
                    <div className="section-containers">
                        <h1 className="section-h">
                            Company
                        </h1>
                        <a href="#"><p className="section-p">About Accademium</p></a>
                        <a href="#"><p className="section-p">Careers</p></a>
                        <a href="#"><p className="section-p">Customers</p></a>
                        <a href="#"><p className="section-p">Partnerships</p></a>
                        <a href="#"><p className="section-p">Contact</p></a>
                        <a href="#"><p className="section-p">Data security & privacy</p></a>
                    </div>
                    <div className="section-containers">
                        <h1 className="section-h">
                            Resources
                        </h1>
                        <a href="#"><p className="section-p">Resources Hub</p></a>
                        <a href="#"><p className="section-p">Newsroom</p></a>
                        <a href="#"><p className="section-p">Blog</p></a>
                        <a href="#"><p className="section-p">Guides and Checklists</p></a>
                        <a href="#"><p className="section-p">Webinars</p></a>
                        <a href="#"><p className="section-p">StudyFinder</p></a>
                    </div>
                    <div className="section-containers">
                        <h1 className="section-h">Product</h1>
                        <a href="#"><p className="section-p">Features</p></a>
                        <a href="#"><p className="section-p">Product Updates</p></a>
                        <a href="#"><p className="section-p">User Guides</p></a>
                        <a href="#"><p className="section-p">Troubleshooting</p></a>
                        <a href="#"><p className="section-p">Support Center</p></a>
                        <a href="#"><p className="section-p">Product Roadmap</p></a>
                    </div>
                    <div className="section-containers">
                        <h1 className="section-h">Popular Links</h1>
                        <a href="#"><p className="section-p">Top Universities</p></a>
                        <a href="#"><p className="section-p">Degree Programs</p></a>
                        <a href="#"><p className="section-p">Internship Opportunities</p></a>
                        <a href="#"><p className="section-p">Exchange Programs</p></a>
                        <a href="#"><p className="section-p">Health Insurance Options</p></a>
                        <a href="#"><p className="section-p">Student Organization</p></a>
                    </div>
                </div>
            </div>
            <div className="lower-part">
                <div className="left-text">
                    <h className="lower-part-h">Accademium &#169; 2024</h>
                    <p className="lower-part-p1">g.k Vuzrazhdane, 1A 8000, Burgas,Bulgaria</p>
                </div>
                <div className="law-text">
                    <a href="#"className="lower-part-p3">Privacy Policy</a>
                    <a href="#" className="lower-part-p3">Accessibility</a>
                    <a href="#" className="lower-part-p3">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;