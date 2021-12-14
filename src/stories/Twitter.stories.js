//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconTwitter } from "../component/Twitter";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Social Icons / Twitter",
  component: WagIconTwitter,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconTwitter
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconTwitter
  />
);

export const Larger_Size = () => (
  <WagIconTwitter
    size="sixty-four"
  />
);




