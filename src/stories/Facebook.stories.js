//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconFacebook } from "../component/Facebook";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Social Icons / Facebook",
  component: WagIconFacebook,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconFacebook
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconFacebook
  />
);

export const Larger_Size = () => (
  <WagIconFacebook
    size="sixty-four"
  />
);




