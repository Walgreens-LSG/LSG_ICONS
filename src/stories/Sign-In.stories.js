//import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import {WagIconSignIn} from "../component/Sign-In";

//👇 This default export determines where your story goes in the story list
export default {
  title: "General Icons/ Sign In",
  component: WagIconSignIn,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconSignIn 
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconSignIn
  />
);

export const Larger_Size = () => (
  <WagIconSignIn
    size="sixty-four"
  />
);




