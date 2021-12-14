//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconSavingsCoupon } from "../component/Coupon_Savings";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Shopping Icons / Coupon - Savings",
  component: WagIconSavingsCoupon,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconSavingsCoupon
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconSavingsCoupon
  />
);

export const Larger_Size = () => (
  <WagIconSavingsCoupon
    size="sixty-four"
  />
);




