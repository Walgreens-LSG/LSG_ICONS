//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconPillBottleSideEffects } from "../component/PillBottle_SideEffects";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Rx Icons / Pill Bottle - Side effects",
  component: WagIconPillBottleSideEffects,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconPillBottleSideEffects
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconPillBottleSideEffects
  />
);

export const Larger_Size = () => (
  <WagIconPillBottleSideEffects
    size="sixty-four"
  />
);




