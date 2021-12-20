//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconEditAlt } from "../component/EditAlt";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Actions Icons / Edit - alt",
  component: WagIconEditAlt,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconEditAlt
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconEditAlt
  />
);

export const Larger_Size = () => (
  <WagIconEditAlt
    size="sixty-four"
  />
);




