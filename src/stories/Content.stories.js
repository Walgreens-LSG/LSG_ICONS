//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconContent } from "../component/Content";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Document Icons / Content",
  component: WagIconContent,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconContent
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconContent
  />
);

export const Larger_Size = () => (
  <WagIconContent
    size="sixty-four"
  />
);




