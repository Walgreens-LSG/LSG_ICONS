//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconInhaler } from "../component/Inhaler";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Services Icons / Inhaler",
  component: WagIconInhaler,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconInhaler
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconInhaler
  />
);

export const Larger_Size = () => (
  <WagIconInhaler
    size="sixty-four"
  />
);




