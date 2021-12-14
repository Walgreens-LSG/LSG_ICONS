//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconWalgreensCard } from "../component/myWalgreensCard";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Shopping Icons / Card - myWalgreens",
  component: WagIconWalgreensCard,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconWalgreensCard
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconWalgreensCard
  />
);

export const Larger_Size = () => (
  <WagIconWalgreensCard
    size="sixty-four"
  />
);




