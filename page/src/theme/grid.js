import styled from 'styled-components';
import {css} from 'styled-components';

export const Div = styled.div`

${({marginBottom}) => marginBottom && css`
margin-bottom: ${marginBottom};
`}

${({marginTop}) => marginTop && css`
margin-top:${marginTop};
`}

${({marginLeft})=> marginLeft &&css `
margin-left:${marginLeft};
`}

${({marginRight})=>marginRight && css`
margin-right: ${marginRight};
`}

`;


export const Container = styled(Div)`
padding-top: 30px;
padding-left: 120px;
padding-right: 120px;
margin: 80px;
`;

export const Relative = styled(Div)`
position:relative;

`;

export const Flix = styled(Div)`
display: flex;

${({justify}) => justify && css`
justify-content: ${justify};
`}

${({align}) => align && css`
align-content: ${align};
`}

${({column}) => column && css`
flex-direction:column;`}
`;
