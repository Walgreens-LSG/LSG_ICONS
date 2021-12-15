import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

//list of imported Walgreens LSG Icons
import {ReactComponent as Icon} from "../stories/assets/individual/heart-blood-pressure.svg";


//Storybook Constants
export const WagIconHeartBloodPressure = ({
    
    //component props
    children,
    size,                    
    ...props
})=> {
    const KIND = {
        DEFAULT: "default",
        SIXTYFOUR:"sixty-four",
    };

    const WagIconHeartBloodPressure= styled(Icon)`
      
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
       <WagIconHeartBloodPressure
       {...props}
       size={size}
       alt={props.alt}
       aria-label={props.alt}
       fill={props.fill}       
       />
   );
};



WagIconHeartBloodPressure.propTypes = {
/**
 * What kind of Icon will you be using? 32x32(default) , 64x64, or other...
 */
size:PropTypes.oneOf(["default", "sixty-four"]),
/**
* What is your SVG's Alternative Text and Aria Label?
 */
 alt:PropTypes.string.isRequired,
/**
 * What color is your SVG Icon?
 */
 fill:PropTypes.string,

};

WagIconHeartBloodPressure.defaultProps = {
    size:"default",
    alt: "Heart blood pressure",
    fill:"#284b9b"
};