//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconClipboard } from "../component/Clipboard";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Document Icons / Clipboard",
  component: WagIconClipboard,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconClipboard
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconClipboard
  />
);

export const Larger_Size = () => (
  <WagIconClipboard
    size="sixty-four"
  />
);




