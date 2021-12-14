//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconInstagram } from "../component/Instagram";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Social Icons / Instagram",
  component: WagIconInstagram,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconInstagram
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconInstagram
  />
);

export const Larger_Size = () => (
  <WagIconInstagram
    size="sixty-four"
  />
);




