//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconCartAdd } from "../component/Cart_Add";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Shopping Icons / Cart - Add",
  component: WagIconCartAdd,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconCartAdd
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconCartAdd
  />
);

export const Larger_Size = () => (
  <WagIconCartAdd
    size="sixty-four"
  />
);




