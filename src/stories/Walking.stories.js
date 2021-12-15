//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconWalking } from "../component/Walking";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Activity Icons/ Walking",
  component: WagIconWalking,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconWalking
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconWalking
  />
);

export const Larger_Size = () => (
  <WagIconWalking
    size="sixty-four"
  />
);




