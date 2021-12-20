//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconOptical } from "../component/Optical";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Services Icons / Optical",
  component: WagIconOptical,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconOptical
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconOptical
  />
);

export const Larger_Size = () => (
  <WagIconOptical
    size="sixty-four"
  />
);




