//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconAdd } from "../component/Line_Plus";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Actions Icons / Line - Plus or Add (alt)",
  component: WagIconAdd,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconAdd
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconAdd
  />
);

export const Larger_Size = () => (
  <WagIconAdd
    size="sixty-four"
  />
);




