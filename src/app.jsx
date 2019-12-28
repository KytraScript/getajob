import React from "react";
import ReactDOM from "react-dom";
import Home from './components/Home.jsx';
import MyStory from './components/MyStory.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import {BrowserRouter as Router, Route, Switch, useParams, Link} from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Router>
                <div className={'navbar fixed'}>
                    <div className={'tentwentyfour'}>
                        <div className={'nav-link'} id={'home'}>
                            <Link to="/">Home</Link>
                        </div>
                        <div className={'nav-link-wrapper'}>
                            <div className={'nav-link'} id={'myStory'}>
                                <Link to="/myStory">About Me</Link>
                            </div>
                            <div className={'nav-link'} id={'portfolio'}>
                                <Link to="/portfolio">Portfolio</Link>
                            </div>
                            <div className={'nav-link'} id={'contact'}>
                                <Link to="/contact">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'container'}>
                    <div className={'center-column'}>
                        <Switch>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            <Route path="/myStory">
                                <MyStory/>
                            </Route>
                            <Route path="/portfolio">
                                <Portfolio/>
                            </Route>
                            <Route path="/contact">
                                <Contact/>
                            </Route>
                        </Switch>
                    </div>
                </div>
                <div className={'footer fixed'}>
                    <div className={'tentwentyfour-footer'}>
                        <div className={'social-wrapper'}>
                            <a href={'http://www.github.com/kytrascript'}>
                                <div className={'social-icon'}>
                                    <div id={'github'}></div>
                                </div>
                            </a>
                            <a href={'http://www.linkedin.com/in/kytrascript'}>
                                <div className={'social-icon'}>
                                    <div id={'linkedin'}></div>
                                </div>
                            </a>
                            <a href={'http://www.linkedin.com/in/kytrascript'}>
                                <div className={'social-icon'}>
                                    <div id={'facebook'}></div>
                                </div>
                            </a>
                            <a href={'http://www.linkedin.com/in/kytrascript'}>
                                <div className={'social-icon'}>
                                    <div id={'resume'}></div>
                                </div>
                            </a>
                        </div>
                        <div className={'copyright-icon'}>
                            <div id={'copyright'}>&#169; 2019 &#8212; Kytra Murphree</div>
                        </div>
                    </div>
                </div>
            </Router>

        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));