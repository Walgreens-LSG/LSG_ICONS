//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconDesktop } from "../component/Desktop";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Device Icons / Desktop",
  component: WagIconDesktop,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconDesktop
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconDesktop
  />
);

export const Larger_Size = () => (
  <WagIconDesktop
    size="sixty-four"
  />
);




