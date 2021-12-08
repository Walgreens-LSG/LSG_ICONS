import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Image} from '@chakra-ui/react';

//list of imported Walgreens LSG Icons
import Avatar from "../stories/assets/individual/avatar.svg";


//Storybook Constants
export const WagIconAvatar = ({
    
    //component props
    children,
    size,                    
    ...props
})=> {
    const KIND = {
        DEFAULT: "default",
        SIXTYFOUR:"sixty-four",
    };

    const WagIconAvatar = styled(Image)`
      
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
       <WagIconAvatar
       {...props}
       size={size}
       alt={props.alt}
       src={Avatar}       
       />
   );
};



WagIconAvatar.propTypes = {
/**
 * What kind of Icon will you be using? 32x32(default) , 64x64, or other...
 */
size:PropTypes.oneOf(["default", "sixty-four"]),
/**
* What is your SVG's Alternative Text?
 */
 alt:PropTypes.string.isRequired,


};

WagIconAvatar.defaultProps = {
    size:"default",
    alt: "Alert",
};