//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconDismiss } from "../component/Line_Dismiss";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Actions Icons / Line - Dismiss (alt)",
  component: WagIconDismiss,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconDismiss
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconDismiss
  />
);

export const Larger_Size = () => (
  <WagIconDismiss
    size="sixty-four"
  />
);




