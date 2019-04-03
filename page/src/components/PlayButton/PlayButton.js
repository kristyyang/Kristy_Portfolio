import React from 'react';

export default function PlayButton(props) {
    return(
        <svg width='580' height='400' xmlns='http://www.w3.org/2000/svg'>
    <rect fill='#fff' id='canvas_background' height='402' width='582' y='-1'
    x='-1' />
    <rect fill='url(#gridpattern)' strokeWidth='0' height='100%' width='100%'
    display='none' overflow='visible' id='canvasGrid' />
    <g>
        <path stroke='#000' transform='rotate(90 202.448 227.287)' id='svg_1'
        d='m167.94804,255.78674l34.49999,-57l34.5,57l-68.99999,0z' strokeWidth='13'
        fill='#fff' />
    </g>
</svg>
    );
}
