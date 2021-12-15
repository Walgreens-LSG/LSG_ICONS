//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconApple } from "../component/Apple";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Health Icons/ Apple",
  component: WagIconApple,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconApple
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconApple
  />
);

export const Larger_Size = () => (
  <WagIconApple
    size="sixty-four"
  />
);




