//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconSameDayDelivery } from "../component/SameDayDelivery";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Delivery Icons / Same day delivery",
  component: WagIconSameDayDelivery,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconSameDayDelivery
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconSameDayDelivery
  />
);

export const Larger_Size = () => (
  <WagIconSameDayDelivery
    size="sixty-four"
  />
);




