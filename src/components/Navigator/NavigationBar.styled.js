import styled from 'styled-components';
import {Flix,Div} from "../../theme/grid";
import {kikyo,yellow,maroon} from "../../theme/Color";
import { Link } from 'react-router';

export const NavigationContainer = styled(Flix)`
position: absolute;
right: 3em;
top: 0.5em;
cursor: pointer;

`;

export const NavigationIndex =styled(Link)`
margin-right: 30px;
margin-top: 0px;
margin-bottom: 40px;
font-size:1.2em;
color: ${kikyo};
position: relative;

&:hover{
color:${yellow};
&:after{
content: ' ';
position:absolute;
left:0;
top: 0;
width: 100%;
height: 100%;
background-color: ${maroon};
z-index: -1;
transform: scale(1.3);

}

`;
