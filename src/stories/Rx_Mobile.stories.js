//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconRxMobile } from "../component/Rx_Mobile";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Rx Icons / Rx Mobile",
  component: WagIconRxMobile,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconRxMobile
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconRxMobile
  />
);

export const Larger_Size = () => (
  <WagIconRxMobile
    size="sixty-four"
  />
);




