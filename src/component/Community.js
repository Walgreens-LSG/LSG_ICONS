import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Image} from '@chakra-ui/react';

//list of imported Walgreens LSG Icons
import { ReactComponent as Community} from "../stories/assets/individual/community.svg";


//Storybook Constants
export const WagIconCommunity = ({
    
    //component props
    children,
    size,                    
    ...props
})=> {
    const KIND = {
        DEFAULT: "default",
        SIXTYFOUR:"sixty-four",
    };

    const WagIconCommunity = styled(Community)`
      
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
       <WagIconCommunity
       {...props}
       size={size}
       alt={props.alt}
       fill={props.fill}       
       />
   );
};



WagIconCommunity.propTypes = {
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

WagIconCommunity.defaultProps = {
    size:"default",
    alt: "Community",
    fill:"#284b9b"
};