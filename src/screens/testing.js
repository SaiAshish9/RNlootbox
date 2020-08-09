import React from 'react';

import {SvgXml} from 'react-native-svg';

export default ({text, image}) => {
  const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="314px" height="80px" viewBox="0 0 314 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999xlink">
    <title>youtubegaming1024_1440</title>
    <defs>
        <path d="M17.9380823,0 L302.808044,0 C308.330891,-2.79088747e-15 312.808044,4.4771525 312.808044,10 C312.808044,10.3746751 312.786987,10.7490542 312.744972,11.1213662 L306.001123,70.8816285 C305.430814,75.9353978 301.158138,79.7561409 296.072293,79.7602591 L11.1971993,79.9909332 C5.67435362,79.9954053 1.19357726,75.5218795 1.18910521,69.9990339 C1.18880056,69.6228052 1.20972835,69.2468591 1.25178877,68.8729888 L8.00076912,8.88205227 C8.56983275,3.82370886 12.8478297,2.71142107e-15 17.9380823,0 Z" id="path-1"></path>
        <rect x="0" y="-73" width="315" height="442" id="rect-3"></rect>
        <rect x="0" y="-37" width="315" height="177" id="rect-4"></rect>
        <linearGradient x1="65.7345279%" y1="85.3352865%" x2="35.5420078%" y2="0%" id="linearGradient-5">
            <stop stop-color="#865CF4" offset="0%"></stop>
            <stop stop-color="#C01C8A" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard" transform="translate(-1008.000000, -2820.000000)">
            <g id="youtubegaming1024_1440" transform="translate(1008.000000, 2820.000000)">
                <mask id="mask-2" fill="white">
                    <use xlink:href="#path-1"></use>
                </mask>
                <use id="Mask" fill="#1569F6" xlink:href="#path-1"></use>
                <g mask="url(#mask-2)">
                    
                             <image x="0" y="-49" width="316" height="178"

                                    xlink:href="${image}"
        ></image>
                    <use fill-opacity="0.752622378" fill="#091632" fill-rule="evenodd" xlink:href="#rect-4"></use>
                </g>
                <g id="Group-8" mask="url(#mask-2)">
                    <g transform="translate(-5.000000, -21.000000)">
                        <path d="M6.32352941,0 L57,10.1816406 L43,106 L0,106 L6.32352941,0 Z" id="Rectangle" stroke="none" fill="url(#linearGradient-5)" fill-rule="evenodd" opacity="0.400000006"></path>
                        <polyline id="Path" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="square" transform="translate(29.000000, 58.454523) rotate(-45.000000) translate(-29.000000, -58.454523) " points="33 59.909047 25 59.7067303 25.0823612 57"></polyline>
                    </g>
                </g>
                                <text id="The-Division" opacity="0.870000005" font-family="AvenirNext-Italic, Avenir Next" font-size="12" font-style="italic" font-weight="bold" fill="rgb(255,255,255)">
                    <tspan x="63" y="45">${text}</tspan>
                </text>
            </g>
        </g>
    </g>
</svg>
`;

  return <SvgXml xml={xml} width="100%" />;
};
