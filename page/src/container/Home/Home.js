import React, { Component, PropTypes } from 'react';
import { Container } from '../../theme/grid';
import View from '../../components/View/View';
import {
    KristyImage,
    Flash1,
    Image
} from './Home.style';
import './Scroll/scroll_button.css';
import './Scroll/scroll_button.js';
import Media from 'react-media';





export default class Home extends Component {
    static propTypes = {};

    render() {
        return (
            <Container>
                <KristyImage>
                    {/*  <h2>Kristy Yang</h2> */}
                    <div className="typewriter">
                        <h1>Hi, I'm Kristy</h1>
                    </div>
                    <h3>I'm just a developer, designer, painter, and foodie of fried chicken.</h3>
                </KristyImage>
                <section>
                    {/* <p>SCROLL DOWN CSS</p> */}
                    <a href="#" className="scroll-down" address="true" ></a>
                </section>
                <section className="ok">
                    <div className="titulo-mod2">
                        <div className="container">
                            <div className="col-lg-12">
                                <h2 className="text-center">TECHNICAL</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <View >
                                {({ isInView }) =>
                                    <div className="photobox">
                                        <Flash1 hide={!isInView}>
                                            <a href="https://github.com/kristyyang/bc-game-jam-2019">
                                                <img
                                                    src={require('../../asserts/gamejam.jpg')}
                                                    alt="dark_s"

                                                />
                                            </a>
                                        </Flash1>
                                        <h4>Escape</h4>
                                        <p>A mini 2D advanture game built with Godot engine</p>
                                    </div>

                                }
                            </View>
                        </div>


                        <div className="column">
                            <View>
                                {({ isInView }) =>
                                    <div className="photobox">
                                        <Flash1 hide={!isInView}>
                                            <a href="">
                                                <img
                                                    src={require('../../asserts/save_on_food.png')}
                                                    alt="dark_s" />
                                            </a>
                                        </Flash1>
                                        <h4>HCI Save_On_Food</h4>
                                        <p>UX search and design project on Save-on-foods web Interface</p>
                                    </div>

                                }
                            </View>
                        </div>
                    </div>
                    <div className="row1">
                        <div className="column">
                            <View>
                                {({ isInView }) =>
                                    <div className="photobox">
                                        <Flash1 hide={!isInView}>
                                            <a href="https://github.com/kristyyang/SQL-Project">
                                                <img
                                                    src={require('../../asserts/304_small.png')}
                                                    alt="dark_s" />
                                            </a>
                                        </Flash1>
                                        <h4>Real Estate Website</h4>
                                    </div>
                                }
                            </View>
                        </div>
                        <div className="column">
                            <View>
                                {({ isInView }) =>
                                    <div className="photobox">
                                        <Flash1 hide={!isInView}>
                                            <a href="https://github.com/kristyyang/Foodist">
                                                <img
                                                    src={require('../../asserts/304.1.png')}
                                                    alt="dark_s" />
                                            </a>
                                        </Flash1>
                                        <h4>Foodist</h4>
                                    </div>
                                }
                            </View>
                        </div>
                    </div>
                </section>

            </Container>

        );
    }
}
