//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconCartCheck } from "../component/Cart_Check";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Shopping Icons / Cart - Check",
  component: WagIconCartCheck,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconCartCheck
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconCartCheck
  />
);

export const Larger_Size = () => (
  <WagIconCartCheck
    size="sixty-four"
  />
);




