import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Image} from '@chakra-ui/react';

//list of imported Walgreens LSG Icons
import Alert from "../stories/assets/individual/alert.svg";


//Storybook Constants
export const WagIconAlert = ({
    
    //component props
    children,
    size,                    
    ...props
})=> {
    const KIND = {
        DEFAULT: "default",
        SIXTYFOUR:"sixty-four",
    };

    const WagIconAlert = styled(Image)`
      
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
       <WagIconAlert
       {...props}
       size={size}
       alt={props.alt}
       src={Alert}       
       />
   );
};



WagIconAlert.propTypes = {
/**
 * What kind of Icon will you be using? 32x32(default) , 64x64, or other...
 */
size:PropTypes.oneOf(["default", "sixty-four"]),
/**
* What is your SVG's Alternative Text?
 */
 alt:PropTypes.string.isRequired,


};

WagIconAlert.defaultProps = {
    size:"default",
    alt: "Alert",
};