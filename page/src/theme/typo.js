import styled from 'styled-components';
import {maybe,yellow} from "./Color";


export const A = styled.a`
color : ${maybe};
text-decoration: none;
position: relative;

&:after {
content: ' ';
position: absolute;
left: 0;
bottom: 0;
height: 10%;
width: 100%;
background-color: ${yellow};
z-index: -1;
}

&: hover:after {
height: 20%;
background-color: ${yellow};
}
`;

export const B = styled.b`
color : ${maybe};
text-decoration: none;
position: relative;

&:after{
content: ' ';
position:absolute;
left 0;
bottom: 0;
height: 10%;
width: 100%;
background-color: ${yellow};
z-index: -1;
}

&:hover:after{
height: 20%;
background-color: ${yellow};
}
`;


export const [H1,H2,H3,H4,H5,H6,P,BlockQuote,Code]=['h1','h2', 'h3', 'h4','h5', 'h6','p','blockquote','code']
.map((tag)=> styled[tag]`
 ${({align})=> align && `text-align: ${align};`}
`);
