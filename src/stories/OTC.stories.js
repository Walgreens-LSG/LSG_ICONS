//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconOTC } from "../component/OTC";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Rx Icons / OTC",
  component: WagIconOTC,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconOTC
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconOTC
  />
);

export const Larger_Size = () => (
  <WagIconOTC
    size="sixty-four"
  />
);




