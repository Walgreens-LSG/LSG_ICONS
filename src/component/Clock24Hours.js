import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

//list of imported Walgreens LSG Icons
import {ReactComponent as Clock} from "../stories/assets/individual/24-hours.svg";


//Storybook Constants
export const WagIconClock24Hours = ({
    
    //component props
    children,
    size,                    
    ...props
})=> {
    const KIND = {
        DEFAULT: "default",
        SIXTYFOUR:"sixty-four",
    };

    const WagIconClock24Hours = styled(Clock)`
      
        ${(props)=>
        props.size === KIND.DEFAULT &&
    `   
        width: 32px;
        height: 32px;
    `}
    ${(props)=>
        props.size === KIND.SIXTYFOUR &&   `   
        width: 64px;
        height: 64px;
    `}`;
    
  
   
    return(
       <WagIconClock24Hours
       {...props}
       size={size}
       alt={props.alt}
       aria-label={props.alt}
       fill={props.fill}
       />
   );
};



WagIconClock24Hours.propTypes = {
/**
 * What kind of Icon will you be using? 32x32(default) , 64x64, or other...
 */
size:PropTypes.oneOf(["default", "sixty-four"]),
/**
* What is your SVG's Alternative Text and Aria label?
 */
 alt:PropTypes.string.isRequired,
/**
 * What color is your SVG Icon?
 */
 fill:PropTypes.string,

};

WagIconClock24Hours.defaultProps = {
    size:"default",
    alt: "Clock - 24 Hours",
    fill: "#284b9b"
};