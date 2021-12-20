//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconSort } from "../component/Sort";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Actions Icons / Sort",
  component: WagIconSort,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconSort
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconSort
  />
);

export const Larger_Size = () => (
  <WagIconSort
    size="sixty-four"
  />
);




