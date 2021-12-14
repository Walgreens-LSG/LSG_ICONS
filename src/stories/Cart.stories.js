//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconCart } from "../component/Cart";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Shopping Icons / Cart",
  component: WagIconCart,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconCart
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconCart
  />
);

export const Larger_Size = () => (
  <WagIconCart
    size="sixty-four"
  />
);




