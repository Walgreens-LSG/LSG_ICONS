//import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconShoppingBagWithClock } from "../component/ShoppingWithClock";


//👇 This default export determines where your story goes in the story list
export default {
  title: "Delivery Icons / Shopping bag with clock",
  component: WagIconShoppingBagWithClock,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconShoppingBagWithClock
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconShoppingBagWithClock
  />
);

export const Larger_Size = () => (
  <WagIconShoppingBagWithClock
    size="sixty-four"
  />
);




