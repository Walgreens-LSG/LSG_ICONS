//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconMonitoring } from "../component/Monitoring";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Health Icons/ Monitoring",
  component: WagIconMonitoring,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconMonitoring
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconMonitoring
  />
);

export const Larger_Size = () => (
  <WagIconMonitoring
    size="sixty-four"
  />
);




