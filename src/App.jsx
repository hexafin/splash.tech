import React, { Component } from 'react';
import createBrowserHistory from "history/createBrowserHistory";

//Component Import Start//

import Landing from './Component/Landing/Landing';
import Legal from './Component/Legal/Legal';
import Footer from './Component/Footer/Footer' ;
import Toaster from './Component/Toaster/Toaster';
import Navbar from './Component/Navbar/Navbar';
// import * as CommanService from './services/CommanService';
//Component Import End//


import './App.scss';
import {
  Router,
  Route,
  Switch
  // Redirect
} from "react-router-dom";
const history = createBrowserHistory();

class App extends Component {
    toastUnlisten;
    state = {
        toaster: {
            type:'',
            msg:'',
            isShowToast:false
        }
    }
  render() {
    return (
      <Router history={history}>
        <React.Fragment>
        <Toaster toaster={this.state.toaster} />
          <Navbar></Navbar>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/legal" component={Legal} />
                {/* <Route component={NotFound404} /> */}
            </Switch>
            <Footer />
        </React.Fragment>
      </Router>
    );
  }
  componentDidMount(){
    this.toastUnlisten = document.addEventListener("showToast", (e) => {
        // console.log('addEventListener' ,e.detail);

        let toasterObj = JSON.parse(JSON.stringify(this.state.toaster));
        toasterObj.type = e.detail.type
        toasterObj.msg = e.detail.msg
        toasterObj.isShowToast = e.detail.isShowToast;
        this.setState({toaster:toasterObj});

        setTimeout(() => {
            // toasterObj.type = '';
            // toasterObj.msg = '';
            toasterObj.isShowToast = false;
            this.setState({toaster:toasterObj});
        }, 10000);
    });
  }
  componentWillUnmount(){
    this.unlisten();
  }

}

export default App;
