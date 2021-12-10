//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconPickup } from "../component/Pickup";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Delivery Icons / Pickup",
  component: WagIconPickup,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconPickup
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconPickup
  />
);

export const Larger_Size = () => (
  <WagIconPickup
    size="sixty-four"
  />
);




