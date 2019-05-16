import React, {Component} from 'react';
import {Background} from './App.styled';
import NavigationBar from '../../components/Navigator/NavigationBar.js';
import Footer  from '../../components/Footer/Footer.js';
import '../../components/Footer/Footer.css';
import ScrollUpButton from "react-scroll-up-button";
class App extends Component {
    render() {
        return (
            <div>
                <Background/>
                <NavigationBar/>

                {this.props.children}
                <div className='wrapper'>
                        <footer className='site-footer'>
                            <div className='footer-social'>
                                <ul>
                                <ScrollUpButton />
                                    <li>
                                        <Footer />
                                    </li>
                                </ul>
                            </div>

                            <div className='identity'>
                                <p>
                                &#10084; © Designed by Kristy Yang 2019  &#10084;{' '}
                                </p>
                            </div>
                        </footer>
                    </div>
            </div>
        );
    }
}

export default App;
