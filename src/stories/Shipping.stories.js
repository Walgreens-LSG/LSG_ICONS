//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconShipping } from "../component/Shipping";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Delivery Icons / Shipping",
  component: WagIconShipping,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconShipping
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconShipping/>
);

export const Larger_Size = () => (
  <WagIconShipping
    size="sixty-four"
  />
);




