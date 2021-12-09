import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconClockAutoReorder } from "../component/ClockAutoReorder";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Date & Time Icons / Clock - Auto Reorder",
  component: WagIconClockAutoReorder,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconClockAutoReorder
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconClockAutoReorder
  />
);

export const Larger_Size = () => (
  <WagIconClockAutoReorder
    size="sixty-four"
  />
);




