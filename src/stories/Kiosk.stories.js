//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconKiosk } from "../component/Kiosk";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Device Icons / Kiosk",
  component: WagIconKiosk,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconKiosk
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconKiosk
  />
);

export const Larger_Size = () => (
  <WagIconKiosk
    size="sixty-four"
  />
);




