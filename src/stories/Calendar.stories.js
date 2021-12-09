import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconCalendar } from "../component/Calendar";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Date & Time Icons / Calendar",
  component: WagIconCalendar,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconCalendar
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconCalendar
  />
);

export const Larger_Size = () => (
  <WagIconCalendar
    size="sixty-four"
  />
);




