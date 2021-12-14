//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconCreditCard } from "../component/CreditCard";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Shopping Icons / Card - Credit",
  component: WagIconCreditCard,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconCreditCard
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconCreditCard
  />
);

export const Larger_Size = () => (
  <WagIconCreditCard
    size="sixty-four"
  />
);




