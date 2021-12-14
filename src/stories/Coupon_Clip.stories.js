//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconClipCoupon } from "../component/Coupon_Clip";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Shopping Icons / Coupon - Clip",
  component: WagIconClipCoupon,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconClipCoupon
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconClipCoupon
  />
);

export const Larger_Size = () => (
  <WagIconClipCoupon
    size="sixty-four"
  />
);




