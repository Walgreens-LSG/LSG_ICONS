//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconPillBottleExpress } from "../component/PillBottle_ExpressRx";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Rx Icons / Pill Bottle - Express Rx",
  component: WagIconPillBottleExpress,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconPillBottleExpress
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconPillBottleExpress
  />
);

export const Larger_Size = () => (
  <WagIconPillBottleExpress
    size="sixty-four"
  />
);




