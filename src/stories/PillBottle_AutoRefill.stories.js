//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconPillBottleRefill } from "../component/PillBottle_AutoRefill";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Rx Icons / Pill Bottle - Auto refill",
  component: WagIconPillBottleRefill,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconPillBottleRefill
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconPillBottleRefill
  />
);

export const Larger_Size = () => (
  <WagIconPillBottleRefill
    size="sixty-four"
  />
);




