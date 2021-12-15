//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconHeart } from "../component/Heart";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Health Icons/ Heart",
  component: WagIconHeart,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconHeart
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconHeart
  />
);

export const Larger_Size = () => (
  <WagIconHeart
    size="sixty-four"
  />
);




