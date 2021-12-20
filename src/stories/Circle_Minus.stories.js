//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconCircleMinus } from "../component/Circle_Minus";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Actions Icons / Circle - Minus or Subtract",
  component: WagIconCircleMinus,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconCircleMinus
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconCircleMinus
  />
);

export const Larger_Size = () => (
  <WagIconCircleMinus
    size="sixty-four"
  />
);




