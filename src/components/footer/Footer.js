import React from "react";
import "./footer.css"

 function Footer(){
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*column*/}
                    <div className="col">
                        <h2>Innogeeks Technology</h2>
                        <ul className="list-unstyled">
                            <li>999999999</li>
                            <li>Benz circle</li>
                            <li>Vijayawada</li>
                        </ul>
                    </div>
                    {/*column*/}
                    <div className="col">
                        <h2>Call/Fax</h2>
                        <ul className="list-unstyled">
                        <li>Fax:0866-2423800</li>
                            <li>Reception: (0866) 2423500 / 600</li>
                            <li>Toll free: 18004259099</li>
                        </ul>
                    </div>
                    {/*column*/}
                    <div className="col">
                        <h2>Social Media</h2>
                        <ul className="list-unstyled">
                        <li><a href="https://www.facebook.com/KanakaDurgammatemple" target="/">Facebook</a></li>
                            <li>Twitter</li>
                            <li>Linkedin</li>
                        </ul>
                    </div>
                </div>
                <hr/>
            <div className="row">
                <p className="col-sm">
                © 2021 Sri Durga Malleswara Swamy varla Devasthanam
                </p>
            </div>
            </div>
        </div>
    )
}
export default Footer;