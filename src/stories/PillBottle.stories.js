//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconPillBottle } from "../component/PillBottle";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Rx Icons / Pill Bottle",
  component: WagIconPillBottle,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconPillBottle
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconPillBottle
  />
);

export const Larger_Size = () => (
  <WagIconPillBottle
    size="sixty-four"
  />
);




