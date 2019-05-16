import React, {Component} from 'react';
import {Container} from "../../theme/grid";
import {Title} from "./AboutMe.styled";
import {H2, P} from "../../theme/typo"
import {Flix} from "../../theme/grid";

class AboutMe extends Component {
    render() {
        return (
            <Container>
                <Title> About Me </Title>
                <H2 align="right">Do you love food and also cook? yeah I do :)</H2>
                <Flix>
                    <P align="left">well, I have crazy and lots of story to talk about it?</P>
                </Flix>
            </Container>
        )
    };
}

export default AboutMe;
