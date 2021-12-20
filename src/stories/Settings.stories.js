//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconSettings } from "../component/Settings";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Actions Icons / Settings",
  component: WagIconSettings,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconSettings
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconSettings
  />
);

export const Larger_Size = () => (
  <WagIconSettings
    size="sixty-four"
  />
);




