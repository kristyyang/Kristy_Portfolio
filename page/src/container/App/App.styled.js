import styled from 'styled-components';


export const Background = styled.div`
position: fixed;
left: 10vw;
width: 80vw;
top: 10vh;
height: 88vh;
background-image: url(${require('../../asserts/hero2.jpg')});
background-size: 99%;
background-repeat: no-repeat;
background-position:center;
z-index: -99;
opacity:0.35;

display: flex;
flex-direction: column;
justify-content: center;

text-align: center;
color: black;

`;