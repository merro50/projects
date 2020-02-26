import React, { Fragment } from 'react';
import './Sections.css';
import interview from '../../images/interview.svg';
import interview1 from '../../images/interview-1.svg';
import business from '../../images/business.svg';
import team from '../../images/team.jpg';
import onlineTran from '../../images/online-translator.jpg';
import partnership from '../../images/partnership.svg';
import translation from '../../images/translation.svg';
import bolt from '../../images/bolt.svg';
import responsive from '../../images/responsive.svg';
import wifi from '../../images/wifi.svg';
import wrench from '../../images/wrench.svg';
import Cloud from '../../images/cloud.svg';
import med from '../../images/meditating.svg';
//import Animat from './animatSections';
const Sections = () =>{
    /* End animate sections */

    let stylePrice = {
        backgroundColor: '#84CB69',
    };
    let stylePrice1 = {
        backgroundColor: '#54C0B9',
    };

    let sec2Cont = {
       paddingTop: '7%'
    };
  return(
    <Fragment>
    <section className="section1">
    <div className="section1-title">
         <h2>Built for collaboration – for any type of business</h2>
    </div>
    <div className="price-cards">
         <div className="price-card">
             <div className="price-card-img">
                <img src= { interview } height="80" width="80" alt="interview" />
             </div>
             <h3>Quick One-Click Meetings</h3>
             <h5>Great for Online Meetings</h5>
             <p>Instantly join, host or manage a video, audio or web meeting from a conference room, your desk or a remote location via your Mac, PC or mobile device.</p>
             <a href="/#"><h6>See Plans</h6></a>
         </div>
         <div className="price-card">
            <div className="price-card-img" style= { stylePrice }>
                <img src={ interview1 } height="80" width="80" alt="interview1" />
             </div>
             <h3>Turnkey Room Equipment</h3>
             <h5>Create a meeting space in minutes</h5>
             <p>Quickly turn conference rooms into collaboration centers with GoToRoom, our affordable out-of-the-box solution.</p>
             <a href="/#"><h6>See Plans</h6></a>
         </div>
         <div className="price-card">
            <div className="price-card-img" style= { stylePrice1 }>
                <img src={ business } height="80" width="80" alt="business" />
             </div>
             <h3>Quick One-Click Meetings</h3>
             <h5>Scaling to Enterprise Businesses</h5>
             <p>Transform your online events into engaging experiences you and your attendees will look forward to.</p>
             <a href="/#"><h6>See Plans</h6></a>
         </div>
    </div>
</section>
<section className="section2">

<div className="section2-container">
    <div className="sec2-team-img" id="sec2Img">
        <img src= { team } height="300px" width="450px" alt="team" />
    </div>

    <div className="sec2-text" id="sec2Text">
    <h2>Video conferencing systems first</h2>
    <p>Robita is designed to easily connect SIP and H323 video conferencing systems with browsers and smartphones.</p>
    <p>Supports all major video conferencing system manufacturers such as Cisco®, Huawei®, Polycom® or AVer®.</p>
    <p>Supports all major video conferencing system manufacturers such as Cisco®, Huawei®, Polycom® or AVer®.</p>
    </div>
</div>

    <div className="section2-container" style={ sec2Cont }>
    
    <div className="sec2-text" id="sec2Text2">
    <h2>Real time transcript and translation</h2>
        <p>Have participants from different countries speaking their own language.</p>
        <p>Robita automatically translates your video meetings in over 120 languages.</p>
        <p>Supports all major video conferencing system manufacturers such as Cisco®, Huawei®, Polycom® or AVer®.</p>
    </div>

    <div className="sec2-team-img" id="sec2Img2">
        <img src={ onlineTran } height="300px" width="450px" alt="online-translator" />
    </div>
    </div>
</section>
<section className="section3">
          <div className="sec3-container">
              <div className="sec3-h">
                <h2>High Lights</h2>
              </div>
              <div className="sec3-items">
                  <div className="sec3-items-cont">
                      <div>
                          <img src= { partnership } height="50px" width="130px" alt='participants' />
                      </div>
                      <h3>Up to 100 participants</h3>
                  </div>
                  <div className="sec3-items-cont">
                    <div>
                        <img src= { translation } height="50px" width="130px" alt='translation' />
                    </div>
                    <h3>Translation in over 120 languages</h3>
                  </div>
                  <div className="sec3-items-cont">
                    <div>
                        <img src={ bolt } height="50px" width="130px" alt="events" />
                    </div>
                    <h3>Automated meetings and events</h3>
                  </div>
                  <div className="sec3-items-cont">  
                    <div>
                        <img src={ responsive } height="50px" width="130px" alt=" interop" />
                    </div>
                    <h3>SIP/H323, WebRTC, iOS, Android interop</h3>
                  </div>                  
                  <div className="sec3-items-cont">
                    <div>
                        <img src={ wifi } height="50px" width="130px" alt="Cloud recording" />
                    </div>
                    <h3>Cloud recording and live broadcast</h3>
                </div>
                <div className="sec3-items-cont">
                    <div>
                        <img src={ wrench } height="50px" width="130px" alt="Customized virtual" />
                    </div>
                    <h3>Customized virtual rooms</h3>
                </div>
                <div className="sec3-items-cont">
                    <div>
                        <img src={ Cloud } height="50px" width="130px" alt="Nothing to install" />
                    </div>
                    <h3>Nothing to install</h3>
                </div>
                <div className="sec3-items-cont">
                    <div>
                        <img src={ med } height="50px" width="130px" alt= 'Unlimited users' />
                    </div>
                    <h3>Unlimited users</h3>
                </div>
            </div>
          </div>
      </section>
      <section className="section4">
        <h2>Improve your meeting experience</h2>
        <a href="/#"><button className="sec4-but">Get Started</button></a>
    </section>
</Fragment>
  )
}

export default Sections;
