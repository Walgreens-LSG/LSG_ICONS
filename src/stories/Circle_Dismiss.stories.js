//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconCircleDismiss } from "../component/Circle_Dismiss";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Actions Icons / Circle - Dismiss",
  component: WagIconCircleDismiss,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconCircleDismiss
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconCircleDismiss
  />
);

export const Larger_Size = () => (
  <WagIconCircleDismiss
    size="sixty-four"
  />
);




