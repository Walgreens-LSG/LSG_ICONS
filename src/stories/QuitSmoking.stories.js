//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconQuitSmoking } from "../component/QuitSmoking";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Health Icons/ Quit Smoking",
  component: WagIconQuitSmoking,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconQuitSmoking
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconQuitSmoking
  />
);

export const Larger_Size = () => (
  <WagIconQuitSmoking
    size="sixty-four"
  />
);




