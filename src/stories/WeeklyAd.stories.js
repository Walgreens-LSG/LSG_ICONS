//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconWeeklyAd } from "../component/WeeklyAd";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Document Icons / Weekly Ad",
  component: WagIconWeeklyAd,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconWeeklyAd
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconWeeklyAd
  />
);

export const Larger_Size = () => (
  <WagIconWeeklyAd
    size="sixty-four"
  />
);




