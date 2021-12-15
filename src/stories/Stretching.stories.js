//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconStretching } from "../component/Stretching";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Activity Icons/ Stretching",
  component: WagIconStretching,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconStretching
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconStretching
  />
);

export const Larger_Size = () => (
  <WagIconStretching
    size="sixty-four"
  />
);




