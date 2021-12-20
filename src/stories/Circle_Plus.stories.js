//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconCirclePlus } from "../component/Circle_Plus";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Actions Icons / Circle - Plus or Add",
  component: WagIconCirclePlus,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconCirclePlus
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconCirclePlus
  />
);

export const Larger_Size = () => (
  <WagIconCirclePlus
    size="sixty-four"
  />
);




