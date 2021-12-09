import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconCalendar18Month } from "../component/Calendar18Month";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Date & Time Icons / Calendar - 18 Month",
  component: WagIconCalendar18Month,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconCalendar18Month
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconCalendar18Month
  />
);

export const Larger_Size = () => (
  <WagIconCalendar18Month
    size="sixty-four"
  />
);




