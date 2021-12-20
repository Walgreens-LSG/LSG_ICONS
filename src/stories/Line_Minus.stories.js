//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconMinus } from "../component/Line_Minus";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Actions Icons / Line - Minus or Substract (alt)",
  component: WagIconMinus,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconMinus
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconMinus
  />
);

export const Larger_Size = () => (
  <WagIconMinus
    size="sixty-four"
  />
);




