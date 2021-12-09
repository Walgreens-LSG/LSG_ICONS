import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconClockSameDayPickup } from "../component/ClockSameDayPickup";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Date & Time Icons / Clock - Same day pickup",
  component: WagIconClockSameDayPickup,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconClockSameDayPickup
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconClockSameDayPickup
  />
);

export const Larger_Size = () => (
  <WagIconClockSameDayPickup
    size="sixty-four"
  />
);




