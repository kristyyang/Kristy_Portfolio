import React, {Component} from 'react';
import {
    NavigationContainer,
    NavigationIndex
} from './NavigationBar.styled.js';



class NavigationBar extends Component {
    render() {
        return (
            <NavigationContainer>
                <NavigationIndex to="/">Home</NavigationIndex>
                <NavigationIndex to="/project">Projects</NavigationIndex>
                <NavigationIndex to="/resume">Resume</NavigationIndex>
                <NavigationIndex to="/aboutme" >About Me</NavigationIndex>
            </NavigationContainer>
        );
    }
}

export default NavigationBar;
