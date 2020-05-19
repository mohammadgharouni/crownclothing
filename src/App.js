import React, {Component} from 'react';
import './App.css';
import ShopPage from "./pages/shop/shop.component"
import HomePage from './pages/homepage/homepage.component';
import SignInsignUp from "./pages/signIn-signUp/signIn-singUp.component"
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from "./components/header/header.component"
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import * as actions from "./redux/user/user.actions"
import { selectCurrentUser } from './redux/user/user.selectors';
import Checkout from './pages/checkout/checkout.component';
import { createStructuredSelector } from 'reselect';


class App extends Component {
   
  unsubscribeFromAuth = null;
 
    componentDidMount() {
      
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);
            
            userRef.onSnapshot(snapShot => {
              this.props.setCurrentUser({
              
                  id: snapShot.id,
                  ...snapShot.data()
                
              });
              
            });
          }
          
          this.props.setCurrentUser( userAuth );
        });
      }
    componentWillUnmount() {
        this.unsubscribeFromAuth()
      }

    render() {
      return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route exact path="/signin" render={()=>this.props.currentUser?(<Redirect to="/"/>):(<SignInsignUp/>)}/>
                    <Route exact path="/checkout" component={Checkout}/>
                    
                </Switch>

            </div>

        )
    }
}

const mapStateToProps = createStructuredSelector ({

  currentUser: selectCurrentUser,
})
  





const mapDispatchToProps = dispatch=>{
  return{

    setCurrentUser: (user)=>dispatch(actions.setCurrentUser(user))
  }
      
  
}


export default connect(mapStateToProps,mapDispatchToProps) (App);
