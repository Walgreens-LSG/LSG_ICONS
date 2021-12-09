import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Image} from '@chakra-ui/react';

//list of imported Walgreens LSG Icons
import Pharmacist from "../stories/assets/individual/pharmacist.svg";


//Storybook Constants
export const WagIconPharmacist = ({
    
    //component props
    children,
    size,                    
    ...props
})=> {
    const KIND = {
        DEFAULT: "default",
        SIXTYFOUR:"sixty-four",
    };

    const WagIconPharmacist = styled(Image)`
      
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
       <WagIconPharmacist
       {...props}
       size={size}
       alt={props.alt}
       src={Pharmacist}       
       />
   );
};



WagIconPharmacist.propTypes = {
/**
 * What kind of Icon will you be using? 32x32(default) , 64x64, or other...
 */
size:PropTypes.oneOf(["default", "sixty-four"]),
/**
* What is your SVG's Alternative Text?
 */
 alt:PropTypes.string.isRequired,


};

WagIconPharmacist.defaultProps = {
    size:"default",
    alt: "Alert",
};