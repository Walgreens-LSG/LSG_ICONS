//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconPillBottleTransferRx } from "../component/PillBottle_TransferRx";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Rx Icons / Pill Bottle - Transfer Rx",
  component: WagIconPillBottleTransferRx,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconPillBottleTransferRx
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconPillBottleTransferRx
  />
);

export const Larger_Size = () => (
  <WagIconPillBottleTransferRx
    size="sixty-four"
  />
);




