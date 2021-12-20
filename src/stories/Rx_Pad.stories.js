//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconRxPad } from "../component/Rx_Pad";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Rx Icons / Rx Pad",
  component: WagIconRxPad,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconRxPad
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconRxPad
  />
);

export const Larger_Size = () => (
  <WagIconRxPad
    size="sixty-four"
  />
);




