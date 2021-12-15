//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconStanding } from "../component/Standing";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Activity Icons/ Standing",
  component: WagIconStanding,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconStanding
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconStanding
  />
);

export const Larger_Size = () => (
  <WagIconStanding
    size="sixty-four"
  />
);




