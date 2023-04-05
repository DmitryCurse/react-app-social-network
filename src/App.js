import React, {Suspense, lazy, useEffect} from "react";
import "./App.css";
import Navbar from "./Сomponents/Navbar/Navbar.jsx";
import {HashRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./Сomponents/Users/UsersContainer";
import HeaderContainer from "./Сomponents/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Сomponents/commons/Preloader/Preloader";
import store from "./redux/redux-store";
import Login from "./Сomponents/Login/Login";

const ProfileContainer = lazy(() => import('./Сomponents/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import("./Сomponents/Dialogs/DialogsContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Suspense fallback={<div><Preloader/></div>}>
                        <Routes>
                            <Route path="/profile/:userID" element={<ProfileContainer/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}/>
                            <Route exact path="/dialogs" element={<DialogsContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<Login/>}/>
                            {/*<Route path="news" element={<News/>}/>*/}
                            {/*<Route path="/music" element={<Music/>}/>*/}
                            {/*<Route path="/settings" element={<Settings/>}/>*/}
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


let AppContainer = compose(
    //withRouter,
    connect(mapStateToProps, {initializeApp})(App))

const FirstProjectReactJS = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default FirstProjectReactJS

// D:\react-app\content
