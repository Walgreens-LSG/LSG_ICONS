//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconUSB } from "../component/USB";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Device Icons / USB",
  component: WagIconUSB,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconUSB
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconUSB
  />
);

export const Larger_Size = () => (
  <WagIconUSB
    size="sixty-four"
  />
);




