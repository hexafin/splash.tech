import React, {Component} from 'react';
import './Navbar.scss';
import {Link, Redirect} from 'react-router-dom';

class Navbar extends Component {
    constructor(){
        super()
        this.redirectToLanding = this.redirectToLanding.bind(this)
        this.toggleNavBar = this.toggleNavBar.bind(this)
        this.goToContact = this.goToContact.bind(this)
        this.goToFeatures = this.goToFeatures.bind(this)        
        this.state={
            toLanding: false,
        }
    }

    redirectToLanding(func) {
        this.setState({toLanding: true}, () => {
            func()
            this.setState({toLanding:false})
        })
    }

    goToContact(e) {
        this.redirectToLanding(() => {
            e.preventDefault()
            // let data = "";
            // console.log(data = document.getElementsByClassName('sp-getintouch-block')[0]);
            let element = document.getElementsByClassName('sp-getintouch-block')[0];
            if(element){
                element.scrollIntoView({behavior: 'smooth',block:'start'});
            }
        })
    }
    goToFeatures(e) {
        this.redirectToLanding(() => {
            e.preventDefault()
            // let data = "";
            // console.log(data = document.getElementsByClassName('sp-getintouch-block')[0]);
            let element = document.getElementsByClassName('sp-feture-content')[0];
            if(element){
                element.scrollIntoView({behavior: 'smooth',block:'start'});
            }
        })
    }
    toggleNavBar(e) {
        let navbar = document.getElementById('navbarNavDropdown');
        let navbarIcon = document.getElementsByClassName('navbar-toggler');
        if(navbar && navbar.classList.contains('show')){
            navbar.classList.remove('show');
        }else{
            navbar.classList.add('show');
        }
        if(navbarIcon[0] && navbarIcon[0].classList.contains('navbar-open')){
            navbarIcon[0].classList.remove('navbar-open');
        }else{
            navbarIcon[0].classList.add('navbar-open');
        }
    }

    render() {
        if (this.state.toLanding === true) {
              return <Redirect to='/' />
        }
        return (
            <React.Fragment>
                <header className="sp-header">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 sp-order-logo col-4">
                                    <Link className="navbar-brand" to="/">
                                        <div className="header-logo-first">
                                            <img alt="Splash" src={require("../../assets/images/header-logo-01.svg")}/>
                                        </div>
                                        <div className="header-logo-second">
                                            <img className="logo-icon" alt="Splash" src={require("../../assets/images/logo-icon.svg")}/>
                                            <img className="logo-text" alt="Splash" src={require("../../assets/images/header-logo-03.svg")}/>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-6 col-4 sp-navmenu-static">
                                    <button className="navbar-toggler" type="button" onClick={(e)=>this.toggleNavBar(e)}>
                                        {/* <span className="navbar-toggler-icon"></span> */}
                                            <span className="navbar-toggler-menu-icon"></span>
                                            <span className="navbar-toggler-menu-icon"></span>
                                            <span className="navbar-toggler-menu-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sp-menu-toggler justify-content-md-center" id="navbarNavDropdown">
                                        <ul className="navbar-nav text-md-center sp-navbar-nav">
                                            <li className="nav-item">
                                            <i className="sp-learn-icon"></i><a className="nav-link sp-learn-more" href="https://medium.com/splash-wallet/splash-lets-make-using-crypto-easy-25303b456a6b" target="_blank" rel="noopener noreferrer">Learn more</a>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/" onClick={(e)=>this.goToFeatures(e)}>Features</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/" onClick={(e)=>this.goToContact(e)}>Contact us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="col-md-3 sp-order-icon col-4">
                                    <div className="sp-telegram-btn">
                                        <a href="https://t.me/joinchat/EjQODwyF10VliZ4fQ0SL8Q" target="_blank" rel="noopener noreferrer"><img alt="Splash" src={require("../../assets/images/send-icon.svg")}/><span>Join the Telegram</span><i className="sp-arrow-right-up"></i></a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        );
        }
    }

export default Navbar;
