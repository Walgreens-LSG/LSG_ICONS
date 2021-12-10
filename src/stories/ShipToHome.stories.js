//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconShipToHome } from "../component/ShipToHome";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Delivery Icons / Ship to home",
  component: WagIconShipToHome,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconShipToHome
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconShipToHome
  />
);

export const Larger_Size = () => (
  <WagIconShipToHome
    size="sixty-four"
  />
);




