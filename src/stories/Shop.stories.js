//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconShop } from "../component/Shop";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Shopping Icons / Shop",
  component: WagIconShop,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconShop
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconShop
  />
);

export const Larger_Size = () => (
  <WagIconShop
    size="sixty-four"
  />
);




