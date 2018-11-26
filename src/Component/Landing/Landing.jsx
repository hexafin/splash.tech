import React, { Component } from 'react';
import './Landing.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as NewsLetterService from '../../services/NewsLatterService';
import * as ContactUsService from '../../services/ContactUsService';
import * as CommanService from '../../services/CommanService';
import Typist from 'react-typist'

class Landing extends Component {
    state = {
        selectedSubject:'Invest',
        subjectOptions:[
            "Feedback",
            "Partnership",
            "Press",
            "Get involved",
            "Invest"
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="sp-banner-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-sm-10 offset-sm-1 sp-colm-size-deskpot">
                                <div className="sp-banner-inner-detail">
                                    
                                    <h1>
                                      Finally, a user-friendly{" "}
                                      <Typist
                                        avgTypingDelay={100}
                                        className="landing-typist">
                                        crypto wallet
                                        <Typist.Delay ms={500} />
                                        <Typist.Backspace count={6} delay={300} />
                                        solution
                                      </Typist>
                                    </h1>
                                    
                                    <p data-aos="fade-zoom-in" data-aos-delay="3000">Mobile-first banking platform for blockchain assets</p>
                                    <div data-aos="fade-zoom-in" data-aos-delay="3000">
                                        <a href="https://brycebjork.typeform.com/to/eah5J3">Join the private beta</a>

                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-8 offset-lg-2 col-sm-10 offset-sm-1">
                                <div className="sp-banner-inner-detail">
                                    <h1 data-aos="fade-zoom-in" data-aos-delay="500">Welcome, lucas.</h1>
                                    <p data-aos="fade-zoom-in" data-aos-delay="600">We’re reserving your splashtag for 04:20 minutes. download the app to claim it.</p>
                                    <a href="https://itunes.apple.com/app/id1398891726" target="_blank" rel="noopener noreferrer" data-aos="fade-zoom-in" data-aos-delay="600">Download the app</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                <section className="sp-feture-content">
                    <div className="container">
                        <div className="row m-0">
                            <div className="col-md-6 p-0 text-center">
                                <div className="sp-feture-inner-imgblock sp-feture-inner-imgblock-left">
                                    <h3 className="sp-sub-title">Easily send, receive, and spend crypto</h3>
                                    <div className="sp-mobile-img">
                                        <img alt="feture-img" src={require("../../assets/images/fetureimg-left.jpg")}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 text-center">
                                <div className="sp-feture-inner-imgblock sp-feture-inner-imgblock-right">
                                <h3 className="sp-sub-title">You control your digital cash and assets</h3>
                                    <div className="sp-mobile-img">
                                        <img alt="feture-img" src={require("../../assets/images/fetureimg-right.jpg")}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<section className="sp-wallet-block">
                    <div className="container">
                        <div className="sp-wallet-inner">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 offset-lg-1">
                                    <div className="sp-wallet-detail">
                                        <h2 data-aos="fade-zoom-in" data-aos-offset="70" data-aos-delay="500">Make <img alt="splash" src={require("../../assets/images/splash-text.svg")}/> your company’s wallet.</h2>
                                        <p data-aos="fade-zoom-in" data-aos-offset="70" data-aos-delay="600">Let's talk partnerships.</p>
                                        <div data-aos="fade-zoom-in" data-aos-offset="70" data-aos-delay="600"> 
                                        <a href="/" onClick={(e)=>this.scrollToContact(e)}>Get in touch</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5">
                                    <div className="sp-splash-mobile-img">
                                        <img alt="feture-img" src={require("../../assets/images/splash-mobile.png")}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>*/}

                <section className="sp-browser-extension-block">
                    <div className="sp-extension-block">
                        <div className="container">
                            <div className="sp-extension-backimg">
                                <div className="sp-extension-first-img">
                                    <img alt="Extension" src={require("../../assets/images/extension-bg-01.svg")}/>
                                </div>
                                <div className="sp-extension-second-img">
                                    <img alt="Extension" src={require("../../assets/images/extension-bg-002.svg")}/>
                                </div>
                            </div>
                            <div className="sp-browser-detail">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6 offset-md-3">
                                            <div className="sp-broser-desc">
                                                <h3>Spend cryptocurrency at any website</h3>
                                                <p>Splash Extension coming soon.</p>
                                                <div className="sp-update-block" onMouseEnter={()=>this.showKeepMeUpdate()} onMouseLeave={()=>this.hideKeepMeUpdate()}>
                                                    <button id="keep-me-update-modal-btn" className="sp-keep-and-show-btn">Keep me updated</button>
                                                    <div className="sp-mail-box">
                                                        <div className="sp-mail-inner-box">
                                                            <form onSubmit={(e)=>this.submitKeepMeUpdate(e)} id="keep-me-update-form" autoComplete="off">
                                                                <div className="form-group">
                                                                    <input type="email" className="form-control subscriberEmail " id="exampleInputEmail1" aria-describedby="emailHelp" required={true} placeholder="Enter your email"/>
                                                                </div>
                                                                <button type="submit" className="sp-submit-btn">Submit</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sp-extension-img">
                                        <div className="row">
                                            <div className="col-md-8 offset-md-2 col-sm-12">
                                                <div className="sp-splash-img clearfix">
                                                    <img alt="Extension" src={require("../../assets/images/splash_3.2_02-05.png")}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sp-extension-third-img">
                                <img alt="Extension" src={require("../../assets/images/extension-bg-03.svg")}/>
                            </div>
                        </div>
                    </div>
                    <div className="sp-tag-block">
                        <div className="container">
                            <div className="sp-tag-user sp-tag-user-top clearfix">
                                <ul>
                                    <li>
                                        <div className="sp-tagimg-main">
                                            <div className="sp-tagimg">
                                                <img alt="tagicon" src={require("../../assets/images/team/matt.jpg")}/>
                                            </div>
                                        </div>
                                        <span>@matt</span>
                                    </li>
                                    <li>
                                        <div className="sp-tagimg-main">
                                            <div className="sp-tagimg">
                                                <img alt="tagicon" src={require("../../assets/images/team/jackie.jpg")}/>
                                            </div>
                                        </div>
                                        <span>@jackie</span>
                                    </li>
                                    <li>
                                        <div className="sp-tagimg-main">
                                            <div className="sp-tagimg">
                                                <img alt="daniel" src={require("../../assets/images/team/daniel.jpg")}/>
                                            </div>
                                        </div>
                                        <span>@daniel</span>
                                    </li>
                                    <li>
                                        <div className="sp-tagimg-main">
                                            <div className="sp-tagimg">
                                                <img alt="tagicon" src={require("../../assets/images/team/chiara.jpg")}/>
                                            </div>
                                        </div>
                                        <span>@chiara</span>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="sp-claimtag-box">
                                <div className="row">
                                    <div className="col-md-12 col-lg-8 offset-lg-2">
                                        <div className="sp-claim-detail">
                                            <h2>Claim a <span><img alt="splash" src={require("../../assets/images/splash-tag.svg")}/>tag</span></h2>
                                            <div className="sp-claim-desc">
                                                <span className="sp-dot-left">
                                                    <i className="sp-dots-img-one"></i>
                                                    <i className="sp-dots-img-two"></i>
                                                    <i className="sp-dots-img-three"></i>
                                                </span>
                                                <div className="sp-text-listing">
                                                    <p>24% of common first names have already been taken.</p>
                                                </div>
                                                <span className="sp-dot-right">
                                                    <i className="sp-dots-img-three"></i>
                                                    <i className="sp-dots-img-two"></i>
                                                    <i className="sp-dots-img-one"></i>
                                                </span>
                                            </div>
                                            <form action="" className="sp-splashtag-form">
                                                <div className="form-group sp-form-group">
                                                    <div className="sp-splashtag-input">
                                                        <input type="text" className="form-control" placeholder="Choose your splashtag"/>
                                                    </div>
                                                    <button className="sp-claim-button" type="button">Claim it</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="sp-welcome-section">
                                            <h2>Welcome, lucas</h2>
                                            <p>We’re reserving your splashtag for <span>04:20 minutes</span>. download the app to claim it.</p>
                                            <form action="" className="sp-splashtag-form">
                                                <div className="form-group sp-form-group">
                                                    <div className="sp-splashtag-input">
                                                        <input type="text" className="form-control" placeholder="Your phone number"/>
                                                    </div>
                                                        <button className="sp-claim-button" type="button">Text me link</button>
                                                </div>
                                            </form>
                                            <div className="sp-app-btn-main">
                                                <a href="/">
                                                    <i className="sp-apple-icon"></i>
                                                    <div className="sp-taxt-listing">
                                                        <span>Download on the</span>
                                                        <label>App store</label>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="sp-claimtag-box">
                                <div className="row">
                                    <div className="col-sm-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2 sp-colam-main">
                                    <div className="sp-welcome-section">
                                            <h2>Instant payments, no long addresses. </h2>
                                            <p>Use <span>splashtags</span> instead of long, clunky bitcoin addresses.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sp-tag-user sp-tag-user-bottom clearfix">
                                <ul>
                                    <li>
                                        <div className="sp-tagimg-main">
                                            <div className="sp-tagimg">
                                                <img alt="bryce" src={require("../../assets/images/team/bryce.jpg")}/>
                                            </div>
                                        </div>
                                        <span>@bryce</span>
                                    </li>
                                    <li>
                                        <div className="sp-tagimg-main">
                                            <div className="sp-tagimg">
                                                <img alt="tagicon" src={require("../../assets/images/team/lea.jpg")}/>
                                            </div>
                                        </div>
                                        <span>@lea</span>
                                    </li>
                                    <li>
                                        <div className="sp-tagimg-main">
                                            <div className="sp-tagimg">
                                                <img alt="tagicon" src={require("../../assets/images/team/charles.jpg")}/>
                                            </div>
                                        </div>
                                        <span>@charles</span>
                                    </li>
                                    <li>
                                        <div className="sp-tagimg-main">
                                            <div className="sp-tagimg">
                                                <img alt="tagicon" src={require("../../assets/images/team/jack.png")}/>
                                            </div>
                                        </div>
                                        <span>@jack</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="sp-team-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="sp-team-row">
                                    <h2>Our team</h2>
                                    <ul className="sp-leadership-list">
                                        <li>
                                            <div className="sp-member-img">
                                                <img alt="daniel" src={require("../../assets/images/team/daniel.jpg")}/>
                                            </div>
                                            <div className="sp-member-detail">
                                                <h4>Daniel Wainryb</h4>
                                                <div className="sp-post-row">
                                                    <span className="sp-post">Head of Product</span>
                                                    <a href="https://www.linkedin.com/in/daniel-wyb/" target="_blank" rel="noopener noreferrer">
                                                        <i className="sp-linkedin-white"></i>
                                                    </a>
                                                </div>
                                                <p>Enjoys building delightful products with smart and passionate people. Recent psychology and computer science major at McGill University. Previous co-founder at Pepperfilters. Fascinated by product, design, growth and building strong brands. Ran the NYC marathon once. That hurt, but it was worth it.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sp-member-img">
                                                <img alt="lukas" src={require("../../assets/images/team/lukas.jpg")}/>
                                            </div>
                                            <div className="sp-member-detail">
                                                <h4>Lukas Burger</h4>
                                                <div className="sp-post-row">
                                                    <span className="sp-post">CTO</span>
                                                    <a href="https://www.linkedin.com/in/lukas-burger-27521113a" target="_blank" rel="noopener noreferrer">
                                                        <i className="sp-linkedin-white"></i>
                                                    </a>
                                                </div>
                                                <p>Lukas is a is a student at Yale University and software developer. At Yale, he is the Director of Projects at Yale Code4Good, where he has worked on software projects for Khushi Baby, a medical wearables company in India, the New Haven government and other non-profits worldwide. Professionally, he joined Narmi, a NYC startup creating a white label banking app for credit unions, where he led developement on their P2P Venmo integration.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sp-member-img">
                                                <img alt="bryce" src={require("../../assets/images/team/bryce.jpg")}/>
                                            </div>
                                            <div className="sp-member-detail">
                                                <h4>Bryce Bjork</h4>
                                                <div className="sp-post-row">
                                                    <span className="sp-post">CEO</span>
                                                    <a href="https://www.linkedin.com/in/brycedbjork/" target="_blank" rel="noopener noreferrer">
                                                        <i className="sp-linkedin-white"></i>
                                                    </a>
                                                </div>
                                                <p>Bryce is an experienced entrepreneur, investor, consultant, and developer. In high school, he started an online business (hireastudent.org) connecting students with local community members for task completion. Bryce also serves as an executive board member at the Yale Student Investment Group, where he led the Small Cap investment team which returned over 60%. Bryce is a life-long coder and full-stack developer who loves hacking together applications and working with other creators (sandboxatyale.com).</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="sp-leadership-list">
                                        <li>
                                            <div className="sp-member-img">
                                                <img alt="tony" src={require("../../assets/images/team/tony.jpg")}/>
                                            </div>
                                            <div className="sp-member-detail">
                                                <h4>Tony Olivero</h4>
                                                <div className="sp-post-row">
                                                    <span className="sp-post">COO</span>
                                                    <a href="https://www.linkedin.com/in/oliveriotony/" target="_blank" rel="noopener noreferrer">
                                                        <i className="sp-linkedin-white"></i>
                                                    </a>
                                                </div>
                                                <p>Tony Oliverio is an experienced founder, consultant, and operational leader. Tony has worked at companies including Samba TV, a television data analytics company, and Monk Development, a leading digital consultancy for non-profits. Tony has been an entrepreneur from a young age, starting when he won the Planting a Seed social innovation prize in San Diego, CA. Additionally, Tony serves on the Executive Board of the Yale Undergraduate Consulting Group, advising businesses internationally on a range of strategic decisions.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sp-member-img">
                                                <img alt="tyler" src={require("../../assets/images/team/tyler.jpg")}/>
                                            </div>
                                            <div className="sp-member-detail">
                                                <h4>Tyler Caldwell</h4>
                                                <div className="sp-post-row">
                                                    <span className="sp-post">CFO</span>
                                                    <a href="https://www.linkedin.com/in/william-caldwell/" target="_blank" rel="noopener noreferrer">
                                                        <i className="sp-linkedin-white"></i>
                                                    </a>
                                                </div>
                                                <p>Tyler is a recent Yale University graduate with experience building successful startups and financing engineering projects. He has worked in business development for other startups, including BioVirtua, a telemedicine startup, where he worked on raising a seed round to building out the company's business model. In college, Tyler led the finance team for Bulldogs Racing, a championship-winning undergraduate group centered around designing and building formula race cars. A former award-winning debater, you can find Tyler debating any topic in his spare time, from politics to NBA basketball.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sp-advisor-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="sp-team-row">
                                    <h2>Advisors</h2>
                                    <ul className="sp-advisory-list">
                                        <li>
                                            <div className="sp-member-img">
                                            <img alt="tyler" src={require("../../assets/images/team/andrew.png")}/>
                                            </div>
                                            <div className="sp-member-detail">
                                                <div className="sp-post-row">
                                                    <h4>Andrew McLaughlin</h4>
                                                    <a href="https://www.linkedin.com/in/andrewmclaughlin/" target="_blank" rel="noopener noreferrer">
                                                        <i className="sp-linkedin-black"></i>
                                                    </a>
                                                </div>
                                                <span className="sp-member-subtext">Executive Director Tsai CITY</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sp-member-img">
                                                <img alt="martin" src={require("../../assets/images/team/martin.jpg")}/>
                                            </div>
                                            <div className="sp-member-detail">
                                                <div className="sp-post-row">
                                                    <h4>Martin Wainstein</h4>
                                                    <a href="https://www.linkedin.com/in/martinwainstein/" target="_blank" rel="noopener noreferrer">
                                                        <i className="sp-linkedin-black"></i>
                                                    </a>
                                                </div>
                                                <span className="sp-member-subtext">Advisor, Open Innovation Fellow Tsai CITY, Digital Currency Initiative at MIT</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sp-member-img">
                                                <img alt="daniel" src={require("../../assets/images/team/danial-wolf.png")}/>
                                            </div>
                                            <div className="sp-member-detail">
                                                <div className="sp-post-row">
                                                    <h4>Daniel DeWolf</h4>
                                                    <a href="https://www.linkedin.com/in/daniel-dewolf-1455399/" target="_blank" rel="noopener noreferrer">
                                                        <i className="sp-linkedin-black"></i>
                                                    </a>
                                                </div>
                                                <span className="sp-member-subtext">Chair, Author, VC Mintz Levin</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sp-supportedby-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>Supported By</h2>
                                <div className="sp-supportedby-icon">
                                    <ul>
                                        <li>
                                            <i className="sp-rdv"></i>
                                        </li>
                                        {/*
                                        <li>
                                            <i className="sp-jp"></i>
                                        </li>
                                        */}
                                        <li>
                                            <i className="sp-drf"></i>
                                        </li>
                                        <li>
                                            <i className="sp-tsai"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sp-getintouch-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1">
                                <div className="sp-getintouch-innerblock">
                                    <h2>Get in touch with us</h2>
                                    <form onSubmit={e => this.contactUs(e)} action="" className="sp-getintouch-form">
                                        <div className="form-group">
                                            <div className="row m-0 sp-form-border">
                                                <div className="col-md-6 p-0">
                                                    <input type="text" placeholder="Your name" className="form-control"/>
                                                </div>
                                                <div className="col-md-6 p-0">
                                                    <input type="email" placeholder="Your email" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="sp-drop-box" id="sp-subject-dropdown" >
                                                <div className="sp-select-sub">
                                                    <label>Subject</label>
                                                        <div className="sp-dropdown-box" onMouseEnter={() => this.showDropDown()} onMouseLeave={()=>this.hideDropDown()}>
                                                            <button type="button">
                                                            <span>{this.state.selectedSubject}</span>
                                                            <i className="sp-sub-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.25 10.11">
                                                                    <title>11Asset 8down-arrow</title>
                                                                    <g id="Layer_2" data-name="Layer 2">
                                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                                            <path className="cls-1" d="M4.25,9.91,8.05,6.1a.17.17,0,0,0,0-.24l-.2-.2a.17.17,0,0,0-.24,0L4.44,8.83V.37A.22.22,0,0,0,4.22.15H4a.22.22,0,0,0-.22.22V8.83L.64,5.66a.17.17,0,0,0-.24,0l-.2.2a.17.17,0,0,0,0,.24L4,9.91a.17.17,0,0,0,.24,0Z" />
                                                                            <path className="cls-1" d="M0,6H0a.32.32,0,0,1,.09-.23l.2-.2a.32.32,0,0,1,.45,0L3.66,8.47V.37A.37.37,0,0,1,4,0h.18a.37.37,0,0,1,.37.37v8.1L7.51,5.55a.32.32,0,0,1,.45,0l.2.2a.32.32,0,0,1,0,.45L4.35,10a.32.32,0,0,1-.45,0L.09,6.21A.32.32,0,0,1,0,6ZM4.29.37A.07.07,0,0,0,4.22.3H4A.07.07,0,0,0,4,.37V9.2L.53,5.77h0L.31,6V6L4.11,9.8h0L7.95,6a0,0,0,0,0,0,0l-.2-.2h0L4.29,9.2Z" />
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </i>
                                                            </button>
                                                            <ul>
                                                                {this.listingOptions()}
                                                            </ul>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <textarea placeholder="Type your message" className="form-control"></textarea>
                                        </div>
                                        <div className="text-center">
                                            <button className="sp-send-btn" type="submit">Send message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sp-social-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="sp-social-icon">
                                    <ul>
                                        <li>
                                            <a href="https://twitter.com/splashwallet" target="_blank" rel="noopener noreferrer">
                                                <i className="sp-tw"></i><span>Twitter</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/SplashWalletTech/" target="_blank" rel="noopener noreferrer">
                                                <i className="sp-fb"></i><span>Facebook</span>
                                            </a>
                                        </li>
                                       {/* <li>
                                            <a href="https://www.instagram.com/splash_wallet/" target="_blank" rel="noopener noreferrer">
                                                <i className="sp-insta"></i><span>Instagram</span>
                                            </a>
                                        </li> */}
                                        <li>
                                            <a href="https://www.linkedin.com/company/splash-tech/" target="_blank" rel="noopener noreferrer">
                                                <i className="sp-linkedin"></i><span>Linkedin</span>
                                            </a>
                                        </li>
                                        {/*<li>
                                            <a href="https://t.me/joinchat/EjQODwyF10VliZ4fQ0SL8Q" target="_blank" rel="noopener noreferrer">
                                                <i className="sp-telegram"></i><span>Telegram</span>
                                            </a>
                                        </li>*/}
                                        <li>
                                            <a href="https://medium.com/splash-wallet" target="_blank" rel="noopener noreferrer">
                                            <i className="sp-medium"></i><span>Medium</span>
                                                </a>
                                        </li>
                                        <li>
                                            <a href="https://www.crunchbase.com/organization/splash-tech" target="_blank" rel="noopener noreferrer">
                                            <i className="sp-crunchbase"></i><span>Crunchbase</span>
                                                </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }
    componentDidMount(){
        AOS.init();
    }
    // toggleDropDown(){
    //     let dropdown = document.getElementById('sp-subject-dropdown');
    //     if(dropdown){

    //         if(dropdown.classList.contains('show')){
    //             dropdown.classList.remove('show');
    //         }else{

    //             dropdown.classList.add('show')
    //         }
    //     }
    // }
    showDropDown() {
        // e.stopPropagation();
        let dropdown = document.getElementById('sp-subject-dropdown');
        if(dropdown){
            if(!dropdown.classList.contains('show')){
                dropdown.classList.add('show')
            }
        }
    }
    hideDropDown(){
        // e.stopPropagation();
        let dropdown = document.getElementById('sp-subject-dropdown');
        if(dropdown){
            dropdown.classList.remove('show');
        }
    }
    selectSubject(e,subject){
        // console.log("object");
        this.setState({selectedSubject:subject},function(){
            this.hideDropDown()
        });
    }
    listingOptions(){
        if ( this.state.subjectOptions ) {
            return  this.state.subjectOptions.map((option,i) => {
                if(option && option!==this.state.selectedSubject){
                    return(
                        <li key={i}><button type="button" onClick={(e) => this.selectSubject(e,option)}>{option}</button></li>
                    )
                }else{
                    return('');
                }
            });
        }else{
            return ("");
        }
    }
    showKeepMeUpdate(){
        var mailbox = document.getElementsByClassName('sp-update-block');
        if(mailbox[0]){
            mailbox[0].classList.add('sp-mail-box-show');
        }
    }
    hideKeepMeUpdate(){
        var mailbox = document.getElementsByClassName('sp-update-block');
        if(mailbox[0] && mailbox[0].classList.contains('sp-mail-box-show')){
                mailbox[0].classList.remove('sp-mail-box-show');
        }
    }
    contactUs(e) {
        e.preventDefault();
        const forms = document.getElementsByClassName("form-control")
        const data = {
            name: forms[1].value,
            email: forms[2].value,
            text: forms[3].value,
            subject: this.state.selectedSubject
        }
        if (data.name && data.email && data.subject && data.text) {
            ContactUsService.sendMessage(data).then(() => {
                CommanService.showToaster('success',"Thanks for your interest in Splash! We’ll keep you in the loop.");
            }).catch(e => {
                CommanService.showToaster(e.response.status, e.message);
            })
        } else {
            CommanService.showToaster('failure','Please fill in all info.');
        } 
    }
    submitKeepMeUpdate(e){
        e.preventDefault();
        var modalButton = document.getElementById('keep-me-update-modal-btn');
        let body= {
            email:e.target.getElementsByClassName('subscriberEmail')[0].value
        };
        NewsLetterService.subscribeList(body).then((res) => {
            CommanService.showToaster('success',"Thanks for your interest in Splash! We’ll keep you in the loop.");
            modalButton.classList.add('sp-done-active');
            modalButton.innerText = "Done";
        })
        .catch((res) => {
            CommanService.showToaster(res.response.status,res.message);
            console.error('contactRequest =>', res)
        });;
        e.target.reset();
        this.hideKeepMeUpdate()

    }
    scrollToContact(e){
        this.setState({selectedSubject:'Partnership'});
        let element = document.getElementsByClassName('sp-getintouch-block')[0];
        if(element){
            console.log(element);
            element.scrollIntoView({behavior: 'smooth',block:'start'});
        }
        e.preventDefault();
    }

}

export default Landing;