import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

//list of imported Walgreens LSG Icons
import {ReactComponent as Icon} from "../stories/assets/individual/price.svg";


//Storybook Constants
export const WagIconPrice= ({
    
    //component props
    children,
    size,                    
    ...props
})=> {
    const KIND = {
        DEFAULT: "default",
        SIXTYFOUR:"sixty-four",
    };

    const WagIconPrice = styled(Icon)`
      
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
       <WagIconPrice
       {...props}
       size={size}
       alt={props.alt}
       aria-label={props.alt}
       fill={props.fill}       
       />
   );
};



WagIconPrice.propTypes = {
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

WagIconPrice.defaultProps = {
    size:"default",
    alt: "Price",
    fill:"#284b9b"
};