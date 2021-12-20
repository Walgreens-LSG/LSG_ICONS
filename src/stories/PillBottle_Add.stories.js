//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconPillBottleAdd } from "../component/PillBottle_Add";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Rx Icons / Pill Bottle - Add",
  component: WagIconPillBottleAdd,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconPillBottleAdd
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconPillBottleAdd
  />
);

export const Larger_Size = () => (
  <WagIconPillBottleAdd
    size="sixty-four"
  />
);




