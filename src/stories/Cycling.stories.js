//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconCycling } from "../component/Cycling";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Activity Icons/ Cycling",
  component: WagIconCycling,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconCycling
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconCycling
  />
);

export const Larger_Size = () => (
  <WagIconCycling
    size="sixty-four"
  />
);




