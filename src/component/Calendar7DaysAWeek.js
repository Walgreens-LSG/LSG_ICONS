import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

//list of imported Walgreens LSG Icons
import {ReactComponent as Calendar} from "../stories/assets/individual/7-days-a-week.svg";


//Storybook Constants
export const WagIconCalendar7DaysAWeek = ({
    
    //component props
    children,
    size,                    
    ...props
})=> {
    const KIND = {
        DEFAULT: "default",
        SIXTYFOUR:"sixty-four",
    };

    const WagIconCalendar7DaysAWeek = styled(Calendar)`
      
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
       <WagIconCalendar7DaysAWeek
       {...props}
       size={size}
       alt={props.alt}
       fill={props.fill}
       />
   );
};



WagIconCalendar7DaysAWeek.propTypes = {
/**
 * What kind of Icon will you be using? 32x32(default) , 64x64, or other...
 */
size:PropTypes.oneOf(["default", "sixty-four"]),
/**
* What is your SVG's Alternative Text?
 */
 alt:PropTypes.string.isRequired,
/**
 * What color is your SVG Icon?
 */
 fill:PropTypes.string,

};

WagIconCalendar7DaysAWeek.defaultProps = {
    size:"default",
    alt: "Calendar",
    fill: "#284b9b"
};