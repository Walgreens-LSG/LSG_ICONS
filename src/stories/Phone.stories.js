//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconPhone } from "../component/Phone";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Device Icons / Phone",
  component: WagIconPhone,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconPhone
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconPhone
  />
);

export const Larger_Size = () => (
  <WagIconPhone
    size="sixty-four"
  />
);




