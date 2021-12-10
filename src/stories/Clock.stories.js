//import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconClock } from "../component/Clock";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Date & Time Icons / Clock",
  component: WagIconClock,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconClock
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconClock
  />
);

export const Larger_Size = () => (
  <WagIconClock
    size="sixty-four"
  />
);




