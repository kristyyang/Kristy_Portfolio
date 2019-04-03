import styled from 'styled-components';
import {css} from 'styled-components';
import {shion} from "../../theme/Color";


export const Image = styled.img`
width: 100%;
`;

export const KristyImage = styled.div`
height: 100vh;
width: 155vh;
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
background-position: center;
position: 'absolute';




display: flex;
flex-direction: column;
align-content: center;
justify-content: center;


margin-top:-100px;
margin-bottom:80px;
margin-left:-21px;

font-size: 1.5em;

/* Setting heading title size, feature and color  */
h1{
  /* font-family: 'Germania One', cursive; */
    padding-left: 200px;
    color: ${shion};
    font-weight:bold;
    color: #483D8B;
    text-shadow: 4px 4px #ffd53c;
};

.typewriter h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.005em; /* Adjust as needed */
  animation:
    typing 2s steps(40, end),
    blink-caret .75s step-end infinite;
}
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}

h3{
    padding-top:50px;
    text-align:center;
    font-size:30px;
}



`;

// setting color content and effect for the paragraph
export const Flash1 = styled.p`
position: relative;
background-image: white;

&:after{
content: ' ';
position: absolute;
top:0;
left:0;
width: 100%;
height: 100%;
background-color:#483D8B;


transform-origin: left;
transform: rotateY(90deg);

transition: transform 3s;
}

${({hide}) => hide && css`
&:after{
transform: rotateY(0deg);
}
`}

`;


export const ImageButton = styled.div`
cursor : pointer;
overflow: hidden;

&>img{
transition: transform .66s

}

&hover {
  &> img{
  transform: scale(1.3);

  }
}

`;
