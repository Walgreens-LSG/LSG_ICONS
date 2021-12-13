//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconTablet } from "../component/Tablet";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Device Icons / Tablet",
  component: WagIconTablet,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconTablet
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconTablet
  />
);

export const Larger_Size = () => (
  <WagIconTablet
    size="sixty-four"
  />
);




