//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconFilter } from "../component/Filter";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Actions Icons / Filter",
  component: WagIconFilter,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconFilter
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconFilter
  />
);

export const Larger_Size = () => (
  <WagIconFilter
    size="sixty-four"
  />
);




