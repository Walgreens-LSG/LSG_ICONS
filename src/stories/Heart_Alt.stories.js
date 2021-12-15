//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconHeartAlt } from "../component/HeartAlt";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Health Icons/ Heart - Alt",
  component: WagIconHeartAlt,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconHeartAlt
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconHeartAlt
  />
);

export const Larger_Size = () => (
  <WagIconHeartAlt
    size="sixty-four"
  />
);




