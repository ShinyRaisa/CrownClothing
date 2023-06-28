// import React from 'react';
// import './App.css';
// import {Switch, Route, Redirect} from 'react-router-dom';
// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from "./pages/shop/shop.component";
// import Header from "./components/header/header.component";
// import SignInAndSignUpComponent from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
// import {auth, createUserProfileDocument} from './firebase/firebase.utils';
// import {connect} from "react-redux";
// import {setCurrentUser} from "./redux/user/user.actions";
//
// class App extends React.Component {
//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         currentUser: ''
//     //     }
//     // }//is done by redux
//
//     unsubscribeFromAuth = null;
//
//     componentDidMount() {
//         //open subscription
//         //method on auth library
//         // auth.onAuthStateChanged(async user=>{
//         //     this.setState({currentUser : user})
//         //     await createUserProfileDocument(user);
//         //     console.log('componentDidMount ',user);
//         //
//         // })
//
//         const {setCurrentUser} = this.props;
//         this.unsubscribeFromAuth = auth.onAuthStateChanged((async userAuth => {
//             if (userAuth) {
//                 const userRef = await createUserProfileDocument(userAuth);
//
//                 userRef.onSnapshot(snapshot => {
//                     //console.log('snapshot', snapshot.data());
//
//                     // this.setState({
//                     //     currentUser: {
//                     //         id:snapshot.id,
//                     //         ...snapshot.data()
//                     //     }
//                     // }, ()=>{
//                     //     console.log('currentstate', this.state);
//                     // })
//
//                     setCurrentUser({
//                         id: snapshot.id,
//                         ...snapshot.data()
//                     });
//
//                 })
//             }
//             // this.setState({currentUser: userAuth });//user signed out
//             setCurrentUser(userAuth);//user signed out
//
//         }))
//     }
//
//     componentWillUnmount() {
//         this.unsubscribeFromAuth();//to prevent memory leak
//     }
//
//     render() {
//         return (
//             <div>
//                 {/*/!*<Header currentUser={this.state.currentUser}/>*!/being done by reducer*/}
//                 <Header/>
//                 <Switch>
//                     <Route exact path='/' component={HomePage}></Route>
//                     <Route path='/shop' component={ShopPage}></Route>
//                     <Route path='/signin' component={SignInAndSignUpComponent}></Route>
//                     {/*<Route*/}
//                     {/*    exact*/}
//                     {/*    path='/signin'*/}
//                     {/*    render={() => this.props.currentUser ?*/}
//                     {/*        (<Redirect to='/' />) :*/}
//                     {/*        (<SignInAndSignUpComponent/>)*/}
//                     {/*    }/>*/}
//                 </Switch>
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = ({user}) => ({
//     currentUser: user.constructor
// })
// const mapDispatchToProps = dispatch => ({
//     setCurrentUser: user => dispatch(setCurrentUser(user))
// })
// export default connect(mapStateToProps, mapDispatchToProps)(App);


import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth , createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });

            }

            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route
                        exact
                        path='/signin'
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to='/' />
                            ) : (
                                <SignInAndSignUpPage />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}
                    //state/user.reducer
const mapStateToProps = ({ user }) => ({//read
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({//write
    setCurrentUser: user => dispatch(setCurrentUser(user))//goes up to provider
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);//<App setCurrentUser currentUser=store.user.currentUser }/>
