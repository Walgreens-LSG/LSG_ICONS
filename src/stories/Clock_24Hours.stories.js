import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconClock24Hours } from "../component/Clock24Hours";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Date & Time Icons / Clock - 24 Hours",
  component: WagIconClock24Hours,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconClock24Hours
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconClock24Hours
  />
);

export const Larger_Size = () => (
  <WagIconClock24Hours
    size="sixty-four"
  />
);




