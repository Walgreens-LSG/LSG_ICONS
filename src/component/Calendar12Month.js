import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

//list of imported Walgreens LSG Icons
import {ReactComponent as CalendarTwelveMonth} from "../stories/assets/individual/12-month.svg";


//Storybook Constants
export const WagIconCalendar12Month = ({
    
    //component props
    children,
    size,                    
    ...props
})=> {
    const KIND = {
        DEFAULT: "default",
        SIXTYFOUR:"sixty-four",
    };

    const WagIconCalendar12Month = styled(CalendarTwelveMonth)`
      
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
       <WagIconCalendar12Month
       {...props}
       size={size}
       alt={props.alt}
       aria-label={props.alt}
       fill={props.fill}
       />
   );
};



WagIconCalendar12Month.propTypes = {
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

WagIconCalendar12Month.defaultProps = {
    size:"default",
    alt: "Calendar",
    fill: "#284b9b"
};