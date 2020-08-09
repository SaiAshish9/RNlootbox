import React from 'react';

import {SvgXml} from 'react-native-svg';



export default ({text,image}) => {


const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="314px" height="80px" viewBox="0 0 314 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Group 6</title>
    <defs>
        <path d="M17.9380823,0 L302.808044,0 C308.330891,-2.79088747e-15 312.808044,4.4771525 312.808044,10 C312.808044,10.3746751 312.786987,10.7490542 312.744972,11.1213662 L306.001123,70.8816285 C305.430814,75.9353978 301.158138,79.7561409 296.072293,79.7602591 L11.1971993,79.9909332 C5.67435362,79.9954053 1.19357726,75.5218795 1.18910521,69.9990339 C1.18880056,69.6228052 1.20972835,69.2468591 1.25178877,68.8729888 L8.00076912,8.88205227 C8.56983275,3.82370886 12.8478297,2.71142107e-15 17.9380823,0 Z" id="path-1"></path>
        <rect x="0" y="-73" width="315" height="442" id="rect-3"></rect>
        <rect x="0" y="-37" width="315" height="177" id="rect-4"></rect>
        <rect x="-31" y="-65" width="375" height="210.9375" id="rect-5"></rect>
        <linearGradient x1="49.0858633%" y1="50%" x2="49.0858633%" y2="73.1028353%" id="linearGradient-6">
            <stop stop-color="#153161" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#091632" stop-opacity="0.835254589" offset="100%"></stop>
        </linearGradient>
        <rect x="0" y="-49" width="316" height="178" id="rect-7"></rect>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard" transform="translate(-103.000000, -1918.000000)">
            <g id="Group-6" transform="translate(103.000000, 1918.000000)">
                <g id="youtubegaming1024_1440-copy">
                    <mask id="mask-2" fill="white">
                        <use xlink:href="#path-1"></use>
                    </mask>
                    <g id="thumb-1920-681536" mask="url(#mask-2)">
                        <image x="0" y="-49" width="316" height="178"
                         xlink:href="${image}"
></image>
                        <use fill="url(#linearGradient-6)" fill-rule="evenodd" xlink:href="#rect-7"></use>
                    </g>
                </g>
                <text id="The-Division" opacity="0.870000005" font-family="AvenirNext-Italic, Avenir Next" font-size="12" font-style="italic" font-weight="normal" fill="#FFFFFF">
                    <tspan x="16" y="63">${text}</tspan>
                </text>
            </g>
        </g>
    </g>
</svg>
`;

  return <SvgXml xml={xml} width="100%" />;
};
