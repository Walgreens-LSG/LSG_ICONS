//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconScan } from "../component/Scan";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Document Icons / Scan",
  component: WagIconScan,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconScan
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconScan
  />
);

export const Larger_Size = () => (
  <WagIconScan
    size="sixty-four"
  />
);




