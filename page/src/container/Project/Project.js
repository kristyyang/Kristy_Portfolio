import React, { Component } from 'react';
import {
    Container,
    Relative,
    Flix,
} from '../../theme/grid';
import Zoomy from 'react-zoomy';
import {
    ImageButton,
    Index,
    ImageContainer,
    Index2,
    Title,
    Index3,
    Index4,
    VideoContainer,
} from '../Project/Project.styled.js';
import {
    A,
    B
} from '../../theme/typo';
import ParallaxImage from 'react-image-parallax2';
import ReactPlayer from 'react-player';
import '../Project/Jumpbar.css';
// import PlayButton from "../../components/PlayButton/PlayButton";


class Project extends Component {
    render() {
        return (
            <Container>
                {/* <Title>-----------Technical------------</Title> */}
                <Relative marginBottom="50px" marginTop="50px">
                    <Index>
                        <h1 >01</h1>
                    </Index>
                    <div className="con">
                        <div className="con-tooltip right">
                            <h1 ><A href="https://github.com/kristyyang/bc-game-jam-2019">Escape</A>
                            </h1>
                            <div className="tooltip">
                                <p>Source code</p>
                            </div>
                        </div>
                    </div>
                </Relative>
                <VideoContainer>
                    <ReactPlayer
                        width="100%"
                        controls
                        url={require('../../asserts/escape.mp4')}
                        playing></ReactPlayer>
                </VideoContainer>
                {/* <Flix justify={'center'} marginBottom="5em">
                    <Zoomy
                        imageUrl={require('../../asserts/player_demo.jpg')}
                        renderThumbnail={({showImage}) =>
                            <ImageButton onClick={showImage}>
                                <img
                                    src={require('../../asserts/gamejam_small.jpg')}
                                    alt="dark_s"/>
                            </ImageButton>
                        }
                        scale={[1.0, 1.0]
                        }
                        imageProps={{
                            style: {
                                width: '80vw',
                                height: 'auto'
                            }
                        }}/>
                </Flix> */}
                <Relative marginBottom="100px" marginTop="150px">
                    <Index2 >
                        <h1 >02</h1>
                    </Index2>
                    <div className="con">
                        <div className="con-tooltip bottom">
                            <h1> <B href="#">HCI Save-on-food</B></h1>
                            <div className="tooltip">
                                <p>Source code</p>
                            </div>
                        </div>
                    </div>
                </Relative>
                <VideoContainer>
                    <ReactPlayer
                        width="100%"
                        controls
                        url={require('../../asserts/save_on.mp4')}></ReactPlayer>
                </VideoContainer>
                <Relative marginBottom="100px" marginTop="150px" align="right">
                    <Index3>
                        <h1>03</h1>
                    </Index3>
                    <div className="con">
                        <div className="con-tooltip bottom">
                            <h1><B href="">Computer Graphic Project</B></h1>
                            <div className="tooltip">
                                <p>Source code</p>
                            </div>
                        </div>
                    </div>
                </Relative>
                <VideoContainer>
                    <ReactPlayer
                        width="100%"
                        controls
                        url={require('../../asserts/314.mp4')}></ReactPlayer>
                </VideoContainer>
                <Relative marginBottom="100px" marginTop="150px" align="right">
                    <Index4>
                        <h1>04</h1>
                    </Index4>
                    <div className="con">
                        <div className="con-tooltip bottom">
                            <h1><B href="">Real Estate Website</B></h1>
                            <div className="tooltip">
                                <p>source code</p>
                            </div>
                        </div>
                    </div>
                </Relative>
                <Flix justify={'center'} marginBottom="5em">
                    <Zoomy
                        imageUrl={require('../../asserts/304.png')}
                        renderThumbnail={({ showImage }) =>
                            <ImageButton onClick={showImage}>
                                <img
                                    src={require('../../asserts/304_small.png')}
                                    alt="dark_s" />
                            </ImageButton>
                        }
                        scale={[1.0, 1.0]
                        }
                        imageProps={{
                            style: {
                                width: '80vw',
                                height: 'auto'
                            }
                        }} />
                </Flix>
            </Container>
        );
    }
}

export default Project;
