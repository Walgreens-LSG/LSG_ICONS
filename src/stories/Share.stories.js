//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconShare } from "../component/Share";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Actions Icons / Share",
  component: WagIconShare,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconShare
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconShare
  />
);

export const Larger_Size = () => (
  <WagIconShare
    size="sixty-four"
  />
);




