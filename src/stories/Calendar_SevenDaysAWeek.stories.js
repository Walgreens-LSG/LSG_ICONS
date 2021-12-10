//import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconCalendar7DaysAWeek } from "../component/Calendar7DaysAWeek";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Date & Time Icons / Calendar - 7 Days a Week",
  component: WagIconCalendar7DaysAWeek,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconCalendar7DaysAWeek
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconCalendar7DaysAWeek
  />
);

export const Larger_Size = () => (
  <WagIconCalendar7DaysAWeek
    size="sixty-four"
  />
);




