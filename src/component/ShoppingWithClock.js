import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

//list of imported Walgreens LSG Icons
import {ReactComponent as ShoppingWithClock} from "../stories/assets/individual/bag--clock.svg";


//Storybook Constants
export const WagIconShoppingBagWithClock = ({
    
    //component props
    children,
    size,                    
    ...props
})=> {
    const KIND = {
        DEFAULT: "default",
        SIXTYFOUR:"sixty-four",
    };

    const WagIconShoppingBagWithClock = styled(ShoppingWithClock)`
      
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
       <WagIconShoppingBagWithClock
       {...props}
       size={size}
       alt={props.alt}
       aria-label={props.alt}
       fill={props.fill}       
       />
   );
};



WagIconShoppingBagWithClock.propTypes = {
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

WagIconShoppingBagWithClock.defaultProps = {
    size:"default",
    alt: "Shopping bag with clock",
    fill:"#284b9b"
};