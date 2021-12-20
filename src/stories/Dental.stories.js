//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconDental } from "../component/Dental";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Services Icons / Dental",
  component: WagIconDental,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconDental
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconDental
  />
);

export const Larger_Size = () => (
  <WagIconDental
    size="sixty-four"
  />
);




