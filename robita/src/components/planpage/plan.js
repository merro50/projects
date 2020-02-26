import React, { Fragment } from 'react';
import './plan.css';
import Footer from '../footer/footer';

const Plan = ()=>{
    let priceCard1 = {
        display: 'flex',
        flexDirection: 'column'
    },
     priceCard2 = {
        fontSize: '40'
    }
    , priceCard3 = {
        textAlign: 'center',
        paddingTop: '7px'
    }, cardBut = {
        textAlign: 'center',
        fontWeight: 'bold'
    }, contact = {
        fontSize: '50'
    }
    , shadow = {
        boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'
    };
  return(
      <Fragment>
    <section className="header-section-plan">
        <div className="header-plan">
            <div className="container">
                <h6>PLANS & PRICING</h6>
                <h1>Pick the plan that's best for your business.</h1>
                <h4>Start a free trial with up to 250 participants – no credit card required.</h4>
                <a href="/#"><h3>Start My Free Days</h3></a>
            </div>
        </div>
  </section>
 <section className="sectionOne">
     <div className="container">
             <div className="price-card-plan">
              <div className="card-content">
                  <h1>PROFESSIONAL</h1>
                  <div style= { priceCard1 }>
                    <h1 style={ priceCard2 }>$12/Mo</h1>
                    <h4 style={ priceCard3 }>Billed Monthly</h4>
                  </div>
                  <div className="card-but">
                      <a href="/#" style={ cardBut }>Buy</a>
                  </div>
             </div>
             </div>
             <div className="price-card-plan" style={ shadow }>
                 <h3>MOST POPULAR</h3>
                 <div className="card-content">
                      <h1>BUSINESS</h1>
                      <div style={ priceCard1 }>
                        <h1 style={ priceCard2 }>$17/Mo</h1>
                        <h4 style={ priceCard3 }>Billed Monthly</h4>
                      </div>
                      <div className="card-but">
                          <a href="/#" style={ cardBut }>Buy</a>
                      </div>
                 </div>
              </div>
              <div className="price-card-plan">
                  <div className="card-content">
                      <h1>BUSINESS</h1>
                      <div style={ priceCard1 }>
                        <h1 style={ priceCard2 }>$25/Mo</h1>
                        <h4 style={ priceCard3 }>Billed Monthly</h4>
                      </div>
                      <div className="card-but">
                          <a href="/#" style={ cardBut }>Buy</a>
                      </div>
                 </div>
              </div>
     </div>
 </section>
  <section class="sectionTwo">
     <div class="container">
                  <div className="contact-card">
                      <div className="phon-icon">
                          <i className="fas fa-phone-volume" style={ contact }></i>
                      </div>
                      <h1>Talk to a specialist</h1>
                      <p>Speak directly to one of our sales</p>
                      <p>representatives by calling.</p>
                      <div className="contact-but">
                      <a href="/#" style={ cardBut }>1455 94 3635</a>
                  </div>
              </div>
              <div className="contact-card">
                  <div className="phon-icon">
                      <i className="fas fa-comments" style={ contact }></i>
                  </div>
                  <h1>Contact Us</h1>
                  <p>Got questions? Want to see a live demo?</p>
                  <p>We'll be in touch within 24 hours.</p>
                  <div className="contact-but">
                  <a href="/#" style={ cardBut }>Contact Sales</a>
              </div>
              </div>
              <div className="contact-card">
                  <div className="phon-icon">
                      <i className="fas fa-question-circle" style={ contact }></i>
                  </div>
                  <h1>Support</h1>
                  <p>Check out our help centre for answers to</p>
                  <p>common questions.</p>
                  <div className="contact-but">
                  <a href="/#" style={ cardBut }>Support</a>
              </div>
          </div>
     </div>
  </section>
  <Footer/>
  </Fragment>
  )
}

export default Plan;