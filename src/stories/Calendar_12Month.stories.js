import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconCalendar12Month } from "../component/Calendar12Month";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Date & Time Icons / Calendar - 12 Month",
  component: WagIconCalendar12Month,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconCalendar12Month
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconCalendar12Month
  />
);

export const Larger_Size = () => (
  <WagIconCalendar12Month
    size="sixty-four"
  />
);




