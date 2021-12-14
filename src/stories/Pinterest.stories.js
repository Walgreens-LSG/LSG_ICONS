//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconPinterest } from "../component/Pinterest";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Social Icons / Pinterest",
  component: WagIconPinterest,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconPinterest
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconPinterest
  />
);

export const Larger_Size = () => (
  <WagIconPinterest
    size="sixty-four"
  />
);




