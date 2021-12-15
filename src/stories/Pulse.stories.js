//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconPulse } from "../component/Pulse";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Health Icons/ Pulse",
  component: WagIconPulse,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconPulse
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconPulse
  />
);

export const Larger_Size = () => (
  <WagIconPulse
    size="sixty-four"
  />
);




