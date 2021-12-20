//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconRxHealth } from "../component/Rx_Health";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Rx Icons / Rx Health",
  component: WagIconRxHealth,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconRxHealth
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconRxHealth
  />
);

export const Larger_Size = () => (
  <WagIconRxHealth
    size="sixty-four"
  />
);




