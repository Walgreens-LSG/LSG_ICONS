//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconSleepHistory } from "../component/SleepHistory";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Health Icons/ Sleep History",
  component: WagIconSleepHistory,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconSleepHistory
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconSleepHistory
  />
);

export const Larger_Size = () => (
  <WagIconSleepHistory
    size="sixty-four"
  />
);




