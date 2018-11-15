import React, { Component } from 'react';
import './Footer.scss';
import {Link, Redirect} from 'react-router-dom';
import * as NewsLetterService from '../../services/NewsLatterService';
import * as CommanService from '../../services/CommanService';

class Footer extends Component {
    constructor(){
        super()
        this.updateDimensions = this.updateDimensions.bind(this);
        this.redirectToLanding = this.redirectToLanding.bind(this);
        this.state={
            footerHeight:'',
            toLanding: false,
        }
    }
    render() {
        if (this.state.toLanding === true) {
              return <Redirect to='/' />
        }
        return (
            <React.Fragment>
            <div className="sp-footer" style={{height:this.state.footerHeight}}>
            </div>
            <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="sp-footer-logo" data-aos="fade-zoom-in" data-aos-delay="400">
                                    <Link to="/" onClick={(e)=>this.goToTop(e)}>
                                        <img alt="tagicon" src={require("../../assets/images/footer-logo.svg")}/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="sp-footer-menu" data-aos="fade-zoom-in" data-aos-delay="600">
                                    <h5>Explore</h5>
                                    <ul>
                                        <li><a href="https://medium.com/splash-wallet/splash-lets-make-using-crypto-easy-25303b456a6b" target="_blank" rel="noopener noreferrer">Learn more</a></li>
                                        <li><Link to="/" onClick={(e)=>this.goToFeatures(e)}>Features</Link></li>
                                        {/* <li><a href="{null}">About us</a></li> */}
                                        <li><Link to="/" onClick={(e)=>this.goToAboutus(e)}>About us</Link></li>
                                        <li><Link to="/" onClick={(e)=>this.goToContactus(e)}>Contact us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="sp-footer-menu" data-aos="fade-zoom-in" data-aos-delay="600">
                                    <h5>Resources</h5>
                                    <ul>
                                        {/*<li><a href="https://itunes.apple.com/app/id1398891726" target="_blank" rel="noopener noreferrer">Download app</a></li> */}
                                        {/*<li><Link to="/">Claim your Splash tag</Link></li> */}
                                        <li><a href="https://t.me/joinchat/EjQODwyF10VliZ4fQ0SL8Q" target="_blank" rel="noopener noreferrer">Join the Telegram</a></li>
                                        <li><Link to="legal">Legal</Link></li>
                                    </ul>
                                    <h5 className="sp-receive-hide pt-5">Receive the latest news —</h5>
                                </div>
                            </div>
                            <div className="col-md-5" data-aos="fade-zoom-in" data-aos-delay="800">
                                <div className="sp-news-block">
                                    <form className="sp-form" onSubmit={(e)=> this.subscribeNewslatter(e)}>
                                        <div className="form-group sp-news-group">
                                            <div className="sp-news-inputblock">
                                                <input type="email" className="form-control subscriberEmail" ref="subscriberEmail" id="subscriberEmail" placeholder="Enter your email"/>
                                            </div>
                                            <button className="sp-btn-update" type='submit' >Keep me updated</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="sp-darkroom-link">
                                    <div className="">
                                        <span>Site by <a href="/">Darkroom</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
    componentDidMount () {
        window.addEventListener('resize', this.updateDimensions);
        let footer = document.querySelector('footer');
        this.setState({footerHeight:footer.clientHeight});
    }
    updateDimensions() {
        let footer = document.querySelector('footer');
        // console.log(this.state)
        this.setState({
            footerHeight:footer.clientHeight
        })
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    redirectToLanding(func) {
        this.setState({toLanding: true}, () => {
            func()
            this.setState({toLanding:false})
        })
    }
    goToAboutus(e){
        // let data = "";
        // console.log(data = document.getElementsByClassName('sp-getintouch-block')[0]);
        this.redirectToLanding(() => {
            e.preventDefault()
            let element = document.getElementsByClassName('sp-team-block')[0];
            if(element){
                element.scrollIntoView({behavior: 'smooth',block:'start'});
            }
        })
    }
    goToFeatures(e){
        this.redirectToLanding(() => {
            e.preventDefault()
            let element = document.getElementsByClassName('sp-feture-content')[0];
            if(element){
                element.scrollIntoView({behavior: 'smooth',block:'start'});
            }
        })
    }
    goToContactus(e){
        this.redirectToLanding(() => {
            e.preventDefault()
            let element = document.getElementsByClassName('sp-getintouch-block')[0];
            if(element){
                element.scrollIntoView({behavior: 'smooth',block:'start'});
            }
        })
    }
    goToTop(e){
        this.redirectToLanding(() => {
            e.preventDefault()
            let element = document.body;
            if(element){
                element.scrollIntoView({block:'start'});
            }
        })
    }
    subscribeNewslatter(e){
        e.preventDefault();
        let body= {
            email:e.target.getElementsByClassName('subscriberEmail')[0].value
        };
        NewsLetterService.subscribeList(body).then((res) => {
            CommanService.showToaster('success',"Thanks for your interest in Splash! We’ll keep you in the loop.");
        })
        .catch((res) => {
            CommanService.showToaster(res.response.status,res.message);
            console.error('contactRequest =>', res)
        });;
        e.target.reset();
    }
}

export default Footer;