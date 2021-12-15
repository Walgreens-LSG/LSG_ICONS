//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconRunning } from "../component/Running";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Activity Icons/ Running",
  component: WagIconRunning,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconRunning
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconRunning
  />
);

export const Larger_Size = () => (
  <WagIconRunning
    size="sixty-four"
  />
);




