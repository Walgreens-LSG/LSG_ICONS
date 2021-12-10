//import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import {WagIconReorder} from '../component/Reorder';

//👇 This default export determines where your story goes in the story list
export default {
  title: "Delivery Icons / Reorder",
  component: WagIconReorder,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconReorder
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconReorder/>
);

export const Larger_Size = () => (
  <WagIconReorder
    size="sixty-four"
  />
);




