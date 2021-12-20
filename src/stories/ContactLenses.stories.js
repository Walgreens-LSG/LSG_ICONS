//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconContactLenses } from "../component/ContactLenses";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Services Icons / Contact lenses",
  component: WagIconContactLenses,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconContactLenses
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconContactLenses
  />
);

export const Larger_Size = () => (
  <WagIconContactLenses
    size="sixty-four"
  />
);




