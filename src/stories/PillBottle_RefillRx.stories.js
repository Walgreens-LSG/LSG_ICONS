//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconPillBottleRefillRx } from "../component/PillBottle_RefillRx";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Rx Icons / Pill Bottle - Refill Rx",
  component: WagIconPillBottleRefillRx,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconPillBottleRefillRx
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconPillBottleRefillRx
  />
);

export const Larger_Size = () => (
  <WagIconPillBottleRefillRx
    size="sixty-four"
  />
);




