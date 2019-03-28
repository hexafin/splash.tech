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
        selectedSubject:'Partnership',
        subjectOptions:[
            "Feedback",
            "Partnership",
            "Press",
            "Get involved",
        ]
    }
    render() {
        return (
            <React.Fragment>
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