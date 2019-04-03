import styled from 'styled-components';
import {lightblue,bluegreen,maybe,kikyo,suoh } from '../../theme/Color';
import {Relative} from '../../theme/grid';
import PlayButton from '../../components/PlayButton/PlayButton'



export const ImageButton = styled.div`
cursor : pointer;
overflow: hidden;

&>img{
transition: transform .66s
}

&hover {
  & > img{
  transform: scale(1.3);
  }
}

`;

export const Index = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  text-align: center;

  h1{
  font-size :5em;

  font-weight: bold;
  color: ${lightblue};
  opacity:0.9;
  transform: 40%;
  text-shadow: 4px 4px #ff723c;
  }

`;

export const Index2 = styled.div`
  position: absolute;
  left: 0;
  bottom:0;
  z-index: -1;
  h1{
  font-size: 5em;
  margin: 0;
  font-weight:bold;
  color: ${bluegreen};
  opacity: 0.8;
  transform: 40%;
  text-shadow: 4px 4px #ff723c;
  }
`;


export const Index3 = styled.div`
  position: absolute;
  left: 0;
  bottom:0;
  z-index: -1;
  h1{
  font-size: 5em;
  margin: 0;
  font-weight:bold;
  color: ${kikyo};
  opacity: 0.8;
  transform: 40%;
  text-shadow: 4px 4px #ff723c;
  }
`;

export const Index4 = styled.div`
  position: absolute;
  left: 0;
  bottom:0;
  z-index: -1;
  h1{
  font-size: 5em;
  margin: 0;
  font-weight:bold;
  color: ${suoh};
  opacity: 0.8;
  transform: 80%;
  text-shadow: 4px 4px #ff723c;
  }
`;
export const ImageContainer = styled.div`
width: 800px;
margin-left:auto;
margin-right: auto;
`;

export const Title = styled.h1`
color : ${maybe};
font-weight: lighter;
margin-top: 0;
display:inline-block;
font-size: 250%;
text-shadow: 4px 4px #ff723c;

`;

export const VideoContainer = styled(Relative)`
width:70%;
flex-shrink: 0;
flex-grow: 0;
`;

// export const StyledPlayButton = styled(PlayButton)`
// position: absolute;
// left: 50%;
// top:50%;
// transform: translate(-50%,50%);
// `;
